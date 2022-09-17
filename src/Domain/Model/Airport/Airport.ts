import { AggregateRoot } from '../../../SharedKernel/Core/AggregateRoot';
import { NameValue } from '../../../SharedKernel/ValueObjects/NameValue';
import { v4 as uuidv4 } from 'uuid';
import { CheckIn } from '../CheckIn/CheckIn';
import { Seat } from '../Seat/Seat';

export class Airport extends AggregateRoot<string> {
	private _Name!: NameValue;
	_checkIns: CheckIn[] = [];
	constructor(name: string) {
		// comentario de prueba
		super();
		this.id = uuidv4();
		this.Name = name;
	}

	set Name(name: string) {
		this._Name = new NameValue(name);
	}

	getFlightCode(checkInDate: Date, destination: Seat) {
		return `${checkInDate.getDate().toString()}-${destination.code.Name}`;
	}
}
