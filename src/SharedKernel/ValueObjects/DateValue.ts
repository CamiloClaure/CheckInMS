import { ValueObject } from '../Core/ValueObject';

export class DateValue extends ValueObject {
	date: Date;

	constructor(date: Date) {
		super();
		// TODO add rule validation

		this.date = new Date(date);
	}

	getDate(value: DateValue): Date {
		return value.date;
	}
}
