import { ICheckInService } from "./ICheckInService";
import { Injectable } from '@nestjs/common';
import { CheckInDto } from '../Dto/CheckInDto';
import { CheckInBuilder } from '../../Domain/Builder/CheckInBuilder';
import { SeatService } from './SeatService';
import { CheckInRepository } from '../../Infrastructure/ORM/Repository/CheckInRepository';
import * as amqplib from 'amqplib';

@Injectable()
export class CheckInService implements ICheckInService {
	checkInRepository: CheckInRepository;
	seatService: SeatService;

	constructor(checkInRepository: CheckInRepository, seatService: SeatService) {
		this.checkInRepository = checkInRepository;
		this.seatService = seatService;
	}

	async createCheckIn(checkIn: CheckInDto): Promise<string> {
		// buscar el boleto y que sea el mismo usuario
		// if true then guardar else retornar error
		const checkInModel = new CheckInBuilder()
			.setCheckInDate(checkIn.checkInDate)
			.setBaggage(checkIn.baggage)
			.build();
		console.log(checkInModel);
		checkInModel.consolidateCheckIn();
		return this.checkInRepository.createCheckIn(checkInModel);
	}

	async rabbitMQStuff(): Promise<void> {
		try {
			const connection = await amqplib.connect('amqp://localhost:5672');
			const channel = await connection.createChannel();
			const result = await channel.assertQueue("jobs");
			channel.consume("jobs", message => {
				const input = JSON.parse(message.content.toString())
				console.log(`Received ${input}`);
			})
		}
		catch (e){
			console.error(e)
		}
	}
}
