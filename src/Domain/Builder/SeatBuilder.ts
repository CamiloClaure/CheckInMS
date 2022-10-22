import { Seat } from '../Model/Seat/Seat';
import { NameValue } from '../../SharedKernel/ValueObjects/NameValue';
export class SeatBuilder {
	private readonly _seat: Seat;

	constructor(seat?: Seat) {
		this._seat = seat ? seat : new Seat();
	}

	setCode(name: string) {
		this._seat.code = new NameValue(name);
		return this;
	}
	setType(type: string) {
		this._seat.type = new NameValue(type);
		return this;
	}

	build(): Seat {
		return this._seat;
	}
}
