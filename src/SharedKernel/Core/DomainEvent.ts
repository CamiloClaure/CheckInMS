import { v4 as uuidv4 } from 'uuid';

export abstract class DomainEvent {
	private _OccurredOn: Date | undefined;
	private _Id: string | undefined;

	protected constructor(occurredOn: Date) {
		this._OccurredOn = occurredOn;
		this._Id = uuidv4();
	}
	get Id(): string {
		return <string>this._Id;
	}
	get OccurredOn(): Date {
		return <Date>this._OccurredOn;
	}
}
