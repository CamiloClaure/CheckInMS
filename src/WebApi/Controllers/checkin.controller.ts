import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateCheckInCommandFactory } from '../../Application/UseCases/Command/CreateCheckInCommand/CreateCheckInCommandFactory';
import { CheckInDto } from '../../Application/Dto/CheckInDto';
import { Connection, getManager } from 'typeorm';

@Controller('checkIn')
export class CheckinController {
	constructor(private readonly createFlightCommandFactory: CreateCheckInCommandFactory<any>) {}

	@Post()
	createFlight(@Body() checkInDto: CheckInDto): any {
		const commandConfig = {
			commandName: 'CreateCheckInCommand',
			args: checkInDto,
		};
		const command = this.createFlightCommandFactory.makeCommand(commandConfig);
		return command
			.execute()
			.then((result) => {
				return result;
			})
			.catch((err) => {
				return err;
			});
	}
	@Get()
	getFlight(@Body() checkInDto: CheckInDto): any {
		return 'presentacion del dia';
	}
}
