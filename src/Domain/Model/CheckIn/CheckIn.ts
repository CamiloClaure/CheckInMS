import { AggregateRoot } from '../../../SharedKernel/Core/AggregateRoot';
import { v4 as uuidv4 } from 'uuid';
import { DateValue } from '../../../SharedKernel/ValueObjects/DateValue';
import { Seat } from '../Seat/Seat';
import { CheckInPassed } from '../../Event/CheckInPassed';

export class CheckIn extends AggregateRoot<string> {
	private _checkInDate!: DateValue;
	private _baggage!: number;
	private _seat!: Seat;

	constructor() {
		super();
		this.id = uuidv4();
	}

	get checkInDate(): DateValue {
		return this._checkInDate;
	}

	set checkInDate(value: DateValue) {
		this._checkInDate = value;
	}
	get baggage(): number {
		return this._baggage;
	}

	set baggage(value: number) {
		this._baggage = value;
	}

	get seat(): Seat {
		return this._seat;
	}

	set seat(value: Seat) {
		this._seat = value;
	}

	get domainEvents(): Array<any> {
		return this._domainEvents;
	}
	consolidateCheckIn() {
		this.AddDomainEvent(new CheckInPassed(this.id));
	}
}
