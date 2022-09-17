import ICommandConfig from '../ICommandConfig';
import { CreateCheckInHandler } from './CreateCheckInHandler';
import { CheckInService } from '../../../Services/CheckInService';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export class CRUDCommandFactory<ICommandFactory> {
	constructor(private checkInService: CheckInService) {}
	makeCommand = (config: ICommandConfig) => {
		if (config.commandName == CreateCheckInHandler.name) {
			return new CreateCheckInHandler(config.args, this.checkInService);
		} else {
			throw new Error('Command not found!');
		}
	};
}
