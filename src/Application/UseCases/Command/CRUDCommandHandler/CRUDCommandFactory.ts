import ICommandConfig from '../ICommandConfig';
import { CreateCheckInHandler } from './CreateCheckInHandler';
import { CheckInService } from '../../../Services/CheckInService';
import { CreateReservationCommand } from "../CreateReservationCommand/CreateReservationCommand";
import { CreateReservationHandler } from "./CreateReservationHandler";
import { IService } from "../../../Services/IService";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export class CRUDCommandFactory<T extends IService> {
	constructor() {}
	makeCommand = (config: ICommandConfig) => {
		if (config.commandName == CreateCheckInHandler.name) {
			// @ts-ignore
			return new CreateCheckInHandler(config);
		} else if (config.commandName == CreateReservationHandler.name) {
			// @ts-ignore
			return new CreateReservationHandler(config);
		} else {
			throw new Error('Command not found!');
		}
	};
}
