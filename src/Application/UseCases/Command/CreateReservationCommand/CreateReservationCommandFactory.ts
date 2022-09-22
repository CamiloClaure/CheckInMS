import { CreateReservationCommand } from './CreateReservationCommand';
import ICommandConfig from '../ICommandConfig';
import { Injectable } from '@nestjs/common';
import { CRUDCommandFactory } from "../CRUDCommandHandler/CRUDCommandFactory";
import { ReservationService } from "../../../Services/ReservationService";

@Injectable()
export class CreateReservationCommandFactory<ICommandFactory> {
	private readonly reservationService: ReservationService;
	constructor(reservationService: ReservationService) {
		this.reservationService = reservationService;
	}
	makeCommand = (config: ICommandConfig) => {
		if (config.commandName == CreateReservationCommand.name) {
			return new CreateReservationCommand(config.args, new CRUDCommandFactory<ReservationService>(), this.reservationService);
		} else {
			throw new Error('Command not found!');
		}
	};
}
