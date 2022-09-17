import IQuery from '../IQuery';
import { SeatByNameQueryHandlerFactory } from '../GetSeatBySeatNameHandler/SeatByNameQueryHandlerFactory';
import { SeatDto } from '../../../Dto/SeatDto';
import { Seat } from '../../../../Domain/Model/Seat/Seat';
import { SeatService } from '../../../Services/SeatService';
export class GetSeatBySeatNameQuery implements IQuery<Seat> {
	private seat: SeatDto;
	private name = '';
	private seatService: SeatService;
	constructor(checkIn: SeatDto, seatService: SeatService) {
		this.seat = checkIn;
		this.seatService = seatService;
	}

	public execute = async () => {
		const queryFactory = new SeatByNameQueryHandlerFactory(this.seatService);
		const queryName = 'GetRouteByRouteName';

		const config = {
			queryName,
			args: this.seat,
		};
		const command = queryFactory.makeCommand(config);

		const results = await command.execute();
		return { result: results };
	};
}
