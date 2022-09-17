import { GetSeatBySeatNameQuery } from './GetSeatBySeatNameQuery';
import IQueryConfig from '../IQueryConfig';
import { SeatService } from '../../../Services/SeatService';

export class SeatQueryHandlerFactory<IQueryFactory> {
	private seatService: SeatService;
	constructor(seatService: SeatService) {
		this.seatService = seatService;
	}
	makeQuery = (config: IQueryConfig) => {
		if (config.queryName == GetSeatBySeatNameQuery.name) {
			return new GetSeatBySeatNameQuery(config.args, this.seatService);
		} else {
			throw new Error('Command not found!');
		}
	};
}
