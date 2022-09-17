import { BussinessRuleValidationException } from '../../../../SharedKernel/Core/Exceptions/BussinessRuleValidationException';
import { NotNullRule } from '../../../../SharedKernel/Rules/NotNullRule';
import { StringNotNullOrEmptyRule } from '../../../../SharedKernel/Rules/StringNotNullOrEmptyRule';

describe('Testing BusinessRule Validation', () => {
	test('Should throw message Object cannot be null', () => {
		const exception = new BussinessRuleValidationException(new NotNullRule(null));
		expect(exception.error()).toBe('Object cannot be null');
	});
	test('Should throw message Object cannot be null', () => {
		const exception = new BussinessRuleValidationException(new StringNotNullOrEmptyRule(null));
		expect(exception.error()).toBe('String cannot be empty');
	});
});
