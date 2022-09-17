import { IBussinessRule } from '../IBussinessRule';

export class BussinessRuleValidationException extends Error {
	BrokenRule: IBussinessRule | undefined;

	Details = '';

	constructor(brokenRule?: any) {
		super('');
		if (brokenRule.brokenRule) {
			this.BrokenRule = brokenRule.brokenRule;
			this.Details = brokenRule.brokenRule.Message();
		} else if (brokenRule) {
			this.BrokenRule = brokenRule;
			this.Details = brokenRule.Message();
		}
	}

	error(): string {
		return `${this.Details}`;
	}
}
