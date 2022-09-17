import { CheckIn } from '../Model/CheckIn/CheckIn';
import { DateValue } from '../../SharedKernel/ValueObjects/DateValue';
import { Seat } from '../Model/Seat/Seat';
export class CheckInBuilder {
	private readonly _checkIn: CheckIn;

	constructor() {
		this._checkIn = new CheckIn();
	}

	setCheckInDate(departureTime: Date) {
		this._checkIn.checkInDate = new DateValue(departureTime);
		return this;
	}

	setBaggage(baggage: number) {
		this._checkIn.baggage = baggage
		return this;
	}

	setSeat(seat: Seat) {
		this._checkIn.seat = seat;
		return this;
	}

	build(): CheckIn {
		return this._checkIn;
	}
}
