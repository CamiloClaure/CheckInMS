import IQueryConfig from '../IQueryConfig';
import { GetSeatBySeatName } from './GetSeatBySeatName';
import { SeatService } from '../../../Services/SeatService';

export class SeatByNameQueryHandlerFactory<ICommandFactory> {
	seatService: SeatService;
	constructor(seatService: SeatService) {
		this.seatService = seatService;
	}
	makeCommand = (config: IQueryConfig) => {
		if (config.queryName == GetSeatBySeatName.name) {
			return new GetSeatBySeatName(config.args, this.seatService);
		} else {
			throw new Error('Command not found!');
		}
	};
}
