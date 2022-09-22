import { CreateCheckInCommand } from './CreateCheckInCommand';
import ICommandConfig from '../ICommandConfig';
import { Injectable } from '@nestjs/common';
import { CRUDCommandFactory } from '../CRUDCommandHandler/CRUDCommandFactory';
import { CheckInService } from '../../../Services/CheckInService';
import { ReservationService } from "../../../Services/ReservationService";

@Injectable()
export class CreateCommandFactory<T> {
	private readonly checkInService: CheckInService;
	constructor(checkInService: CheckInService) {
		this.checkInService = checkInService;
	}
	makeCommand = (config: ICommandConfig) => {
		if (config.commandName == CreateCheckInCommand.name) {
			return new CreateCheckInCommand(config.args, new CRUDCommandFactory<ReservationService>(), this.checkInService);
		} else {
			throw new Error('Command not found!');
		}
	};
}
