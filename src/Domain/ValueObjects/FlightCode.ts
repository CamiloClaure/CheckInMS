import { ValueObject } from '../../SharedKernel/Core/ValueObject';

export class FlightCodeValue extends ValueObject {
	code: string;

	constructor(code: string) {
		super();
		// TODO add rule validation

		this.code = code;
	}

	getDate(value: FlightCodeValue): string {
		return value.code;
	}
}
