import { createMock } from 'ts-auto-mock';
import { CheckInService } from '../../../Application/Services/CheckInService';
import { Seat } from '../../../Domain/Model/Seat/Seat';
import { CheckIn } from '../../../Domain/Model/CheckIn/CheckIn';
import { DateValue } from '../../../SharedKernel/ValueObjects/DateValue';
const date = new Date('2020-12-12');
const seat = createMock<Seat>();
seat.code.Name = 'CBBASCZ';
describe('Creating a FlightCodeGenerated', () => {
	test('should create FlightCodeGenerated', () => {
		const checkIn = new CheckIn();
		checkIn.seat = new Seat();
		checkIn.checkInDate = new DateValue(new Date());
		checkIn.consolidateCheckIn();
		expect(checkIn).not.toBe(null);
		expect(checkIn.domainEvents).toHaveLength(1);
	});
});
