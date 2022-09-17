import { DomainEvent } from './DomainEvent';
import { IBussinessRule } from './IBussinessRule';
import { BussinessRuleValidationException } from './Exceptions/BussinessRuleValidationException';

export abstract class Entity<TId> {
	private _id: TId | undefined;
	protected _domainEvents!: DomainEvent[];

	protected constructor() {
		this._domainEvents = [];
	}

	get id(): TId | undefined {
		return this._id;
	}

	protected set id(value: TId) {
		this._id = value;
	}

	public AddDomainEvent(event: DomainEvent): void {
		this._domainEvents.push(event);
	}

	public ClearDomainEvents(): void {
		this._domainEvents.splice(0, this._domainEvents.length);
	}
	protected CheckRule(rule: IBussinessRule): void {
		if (!rule) {
			throw 'Rule cannot be null';
		}
		if (!rule.IsValid()) {
			throw new BussinessRuleValidationException(rule);
		}
	}
}
