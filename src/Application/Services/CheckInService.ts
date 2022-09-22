import { ICheckInService } from "./ICheckInService";
import { Injectable } from '@nestjs/common';
import { CheckInDto } from '../Dto/CheckInDto';
import { CheckInBuilder } from '../../Domain/Builder/CheckInBuilder';
import { SeatService } from './SeatService';
import { CheckInRepository } from '../../Infrastructure/ORM/Repository/CheckInRepository';
import * as amqplib from 'amqplib';
import { RabbitMQService } from "./BrokerService";
import { ReservationService } from "./ReservationService";
import { v4 as uuidv4 } from 'uuid';
import { Seat } from "../../Domain/Model/Seat/Seat";

@Injectable()
export class CheckInService implements ICheckInService {
	checkInRepository: CheckInRepository;
	seatService: SeatService;
	rabbitMQService: RabbitMQService;
	reservationService: ReservationService;

	constructor(checkInRepository: CheckInRepository, seatService: SeatService, rabbitMQService: RabbitMQService, reservationService: ReservationService) {
		this.checkInRepository = checkInRepository;
		this.seatService = seatService;
		this.rabbitMQService = rabbitMQService
		this.reservationService = reservationService
	}

	async createCheckIn(checkIn: CheckInDto): Promise<string> {
		// buscar el boleto y que sea el mismo usuario
		// if true then guardar else retornar error
		const reservation = await this.reservationService.getReservation(checkIn.ticketCode)
		if(!reservation){
			return Promise.reject("Reservation not found")
		}
		if(reservation.docPasajero != checkIn.docPassenger){
			return Promise.reject("Passenger documents doesn't match")
		}
		const seat = new Seat()
		console.log(seat);
		const checkInModel = new CheckInBuilder()
			.setCheckInDate(checkIn.checkInDate)
			.setBaggage(checkIn.baggage)
			.setSeat(seat)
			.build();
		checkInModel.consolidateCheckIn();
		await this.rabbitMQService.sendRabbitMQ({
			id: checkInModel.id, NroAsiento: checkInModel.seat.id, NroReserva: checkIn.ticketCode
		});
		return this.checkInRepository.createCheckIn(checkInModel);
	}

}
