import { Airport } from '../../../Domain/Model/Airport/Airport';
import { createMock } from 'ts-auto-mock';
import { Seat } from '../../../Domain/Model/Seat/Seat';
const date = new Date('2020-12-25T00:00:00');
const seat = createMock<Seat>();
seat.code.Name = 'CBBASCZ';
describe('Creating a FlightCodeGenerated', () => {
	test('should create FlightCodeGenerated', () => {
		const airport = new Airport('Viru Viru');
		expect(airport).not.toBe(null);
		const checkInCode = airport.getFlightCode(date, seat);
		expect(checkInCode).toBe('25-CBBASCZ');
	});
});
