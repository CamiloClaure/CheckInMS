import { SeatDto } from '../../../Dto/SeatDto';
import { SeatService } from '../../../Services/SeatService';

export class GetSeatBySeatName<IQuery> {
	private seat: SeatDto;
	private seatService: SeatService;

	constructor(seat: SeatDto, seatService: SeatService) {
		this.seat = seat;
		this.seatService = seatService;
	}

	public execute = async () => {
		return (await this.seatService.getRouteFromRouteName(this.seat.code)).result;
	};
}
