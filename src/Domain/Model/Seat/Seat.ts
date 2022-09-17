import { AggregateRoot } from '../../../SharedKernel/Core/AggregateRoot';
import { v4 as uuidv4 } from 'uuid';
import { NameValue } from '../../../SharedKernel/ValueObjects/NameValue';

export class Seat extends AggregateRoot<string> {
	private _code!: NameValue;
	private _type!: NameValue; //TODO agregar un DataValue para el tipo?
	constructor(id?: string) {
		super();
		this.id = id ? id : uuidv4();
	}
	get code(): NameValue {
		return this._code;
	}

	set code(value: NameValue) {
		this._code = value;
	}
	get type(): NameValue {
		return this._type;
	}

	set type(value: NameValue) {
		this._type = value;
	}
}
