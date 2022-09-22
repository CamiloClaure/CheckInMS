import { ICheckInService } from "./ICheckInService";
import { Injectable } from '@nestjs/common';
import { CheckInDto } from '../Dto/CheckInDto';
import { CheckInBuilder } from '../../Domain/Builder/CheckInBuilder';
import { SeatService } from './SeatService';
import { CheckInRepository } from '../../Infrastructure/ORM/Repository/CheckInRepository';
import * as amqplib from 'amqplib';
import { IReservationService } from "./IReservationService";
import { ReserveDto } from "../Dto/ReserveDto";
import { ReservationBuilder } from "../../Domain/Builder/ReservationBuilder";
import { ReservationRepository } from "../../Infrastructure/ORM/Repository/ReservationRepository";

@Injectable()
export class ReservationService implements IReservationService {
	reservationRepository: ReservationRepository;
	seatService: SeatService;

	constructor(reservationRepository: ReservationRepository, seatService: SeatService) {
		this.reservationRepository = reservationRepository;
		this.seatService = seatService;
	}

	async createReservation(reserveDto: ReserveDto): Promise<string> {
		// buscar el boleto y que sea el mismo usuario
		// if true then guardar else retornar error
		reserveDto.vueloReserva.forEach(value => {
			const reservationModel = new ReservationBuilder()
				.setActivo(reserveDto.activo)
				.setReservationNroReserva(reserveDto.nroReserva)
				.setIdVuelo(reserveDto.idVuelo)
				.setPasajero(value.nroDocumento)
				.build();
			return this.reservationRepository.createReservation(reservationModel);
		})
		return "created";
	}

	async getReservation(reservationId: string){
		return await this.reservationRepository.FindByIdAsync(reservationId)
	}
}
