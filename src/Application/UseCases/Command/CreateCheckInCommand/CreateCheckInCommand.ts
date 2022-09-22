import ICommand from '../ICommand';
import { CRUDCommandFactory } from '../CRUDCommandHandler/CRUDCommandFactory';
import { CheckInDto } from '../../../Dto/CheckInDto';
import { Injectable } from '@nestjs/common';
import { CheckInService } from "../../../Services/CheckInService";

Injectable();
export class CreateCheckInCommand implements ICommand {
	private readonly checkIn: CheckInDto;
	private readonly checkInService: CheckInService
	private name = '';

	constructor(checkIn: CheckInDto, private readonly crudCommandFactory: CRUDCommandFactory<any>, checkInService: CheckInService) {
		this.checkIn = checkIn;
		this.checkInService = checkInService
	}

	public execute = async () => {

		const commandName = 'CreateCheckInHandler';

		const config = {
			commandName,
			service: this.checkInService,
			args: this.checkIn,
		};
		const checkInId = await this.crudCommandFactory.makeCommand(config).execute();
		return { result: checkInId };
	};
}
