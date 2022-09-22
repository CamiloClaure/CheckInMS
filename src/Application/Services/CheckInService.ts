import { ICheckInService } from "./ICheckInService";
import { Injectable } from '@nestjs/common';
import { CheckInDto } from '../Dto/CheckInDto';
import { CheckInBuilder } from '../../Domain/Builder/CheckInBuilder';
import { SeatService } from './SeatService';
import { CheckInRepository } from '../../Infrastructure/ORM/Repository/CheckInRepository';
import * as amqplib from 'amqplib';
import { RabbitMQService } from "./BrokerService";

@Injectable()
export class CheckInService implements ICheckInService {
	checkInRepository: CheckInRepository;
	seatService: SeatService;
	rabbitMQService: RabbitMQService;

	constructor(checkInRepository: CheckInRepository, seatService: SeatService, rabbitMQService: RabbitMQService) {
		this.checkInRepository = checkInRepository;
		this.seatService = seatService;
		this.rabbitMQService = rabbitMQService
	}

	async createCheckIn(checkIn: CheckInDto): Promise<string> {
		// buscar el boleto y que sea el mismo usuario
		// if true then guardar else retornar error
		const checkInModel = new CheckInBuilder()
			.setCheckInDate(checkIn.checkInDate)
			.setBaggage(checkIn.baggage)
			.build();
		checkInModel.consolidateCheckIn();
		const { id, baggage, seat } = checkInModel
		console.log({ id, baggage, seat });
		await this.rabbitMQService.sendRabbitMQ({
			id: checkInModel.id, baggage: checkInModel.baggage, OccurredOn: new Date(), eventId: "event"
		});
		return this.checkInRepository.createCheckIn(checkInModel);
	}

}
