import { CreateCheckInCommand } from './CreateCheckInCommand';
import ICommandConfig from '../ICommandConfig';
import { Injectable } from '@nestjs/common';
import { CRUDCommandFactory } from '../CRUDCommandHandler/CRUDCheckInFactory';
import { CheckInService } from '../../../Services/CheckInService';

@Injectable()
export class CreateCheckInCommandFactory<ICommandFactory> {
	private readonly checkInService: CheckInService;
	constructor(checkInService: CheckInService) {
		this.checkInService = checkInService;
	}
	makeCommand = (config: ICommandConfig) => {
		if (config.commandName == CreateCheckInCommand.name) {
			return new CreateCheckInCommand(config.args, new CRUDCommandFactory<any>(this.checkInService));
		} else {
			throw new Error('Command not found!');
		}
	};
}
