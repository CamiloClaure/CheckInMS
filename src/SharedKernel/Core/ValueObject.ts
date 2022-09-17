import { IBussinessRule } from './IBussinessRule';
import { BussinessRuleValidationException } from './Exceptions/BussinessRuleValidationException';

export abstract class ValueObject {
	protected CheckRule(rule: IBussinessRule): void {
		if (!rule) {
			throw 'Rule cannot be null';
		}
		if (!rule.IsValid()) {
			throw new BussinessRuleValidationException(rule);
		}
	}
}
