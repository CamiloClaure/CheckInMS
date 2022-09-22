import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateCommandFactory } from '../../Application/UseCases/Command/CreateCheckInCommand/CreateCommandFactory';
import { CheckInDto } from '../../Application/Dto/CheckInDto';
import { Ctx, EventPattern, MessagePattern, Payload, RmqContext } from "@nestjs/microservices";
import { RabbitMQService } from "../../Application/Services/BrokerService";
import { ReserveDto } from "../../Application/Dto/ReserveDto";
import { SeatDto } from "../../Application/Dto/SeatDto";
import { CreateReservationCommandFactory } from "../../Application/UseCases/Command/CreateReservationCommand/CreateReservationCommandFactory";
import { OnEvent } from "@nestjs/event-emitter";

@Controller('checkIn')
export class CheckinController {
	constructor(private readonly createCheckInCommandFactory: CreateCommandFactory<any>,
	            private readonly createReservationCommandFactory: CreateReservationCommandFactory<any>,
	            private readonly rabbitMQService: RabbitMQService) {
		rabbitMQService.rabbitMQStuff(ReserveDto, "venta-registrada");
	}
	// vuelo-habilitado-checkin

	@OnEvent('order.created')
	async handleReservationCreated(message) {
		// this.getFlight(message)
		console.log(message);
		console.log(await this.getFlight(message));
	}

	@Post()
	createFlight(@Body() checkInDto: CheckInDto): any {
		const commandConfig = {
			commandName: 'CreateCheckInCommand',
			args: checkInDto,
		};
		const command = this.createCheckInCommandFactory.makeCommand(commandConfig);
		return command
			.execute()
			.then((result) => {
				return result;
			})
			.catch((err) => {
				return err;
			});
	}

	getFlight(message: any): any {
		// this.rabbitMQService.send('venta-registrada', {data: "success"})
		const commandConfig = {
			commandName: 'CreateReservationCommand',
			args: message,
		};
		const command = this.createReservationCommandFactory.makeCommand(commandConfig);
		return command
			.execute()
			.then((result) => {
				return result;
			})
			.catch((err) => {
				return err;
			});
	}
}
