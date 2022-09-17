import { IBussinessRule } from '../Core/IBussinessRule';

export class StringNotNullOrEmptyRule implements IBussinessRule {
	private readonly _value: string | undefined;

	constructor(value: string) {
		this._value = value;
	}

	Message(): string {
		return 'String cannot be empty';
	}

	IsValid(): boolean {
		return this._value !== '';
	}
}
