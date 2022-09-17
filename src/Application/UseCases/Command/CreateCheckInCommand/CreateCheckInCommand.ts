import ICommand from '../ICommand';
import { CRUDCommandFactory } from '../CRUDCommandHandler/CRUDCheckInFactory';
import { CheckInDto } from '../../../Dto/CheckInDto';
import { Injectable } from '@nestjs/common';

Injectable();
export class CreateCheckInCommand implements ICommand {
	private readonly checkIn: CheckInDto;
	private name = '';

	constructor(checkIn: CheckInDto, private readonly crudCommandFactory: CRUDCommandFactory<any>) {
		this.checkIn = checkIn;
	}

	public execute = async () => {
		console.log('creating command');

		const commandName = 'CreateCheckInHandler';

		const config = {
			commandName,
			args: this.checkIn,
		};
		const checkInId = await this.crudCommandFactory.makeCommand(config).execute();
		return { result: checkInId };
	};
}
