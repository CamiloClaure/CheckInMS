import { CheckInDto } from '../../../Application/Dto/CheckInDto';

describe('Creating a FlightDto', () => {
	test('should create FlightDto', () => {
		const date = new Date('2020-12-12');
		const checkIn = new CheckInDto();
		checkIn.id = '11';
		checkIn.checkInDate = date;
		checkIn.ticketCode = 'LP-SCZ';
		expect(checkIn.id).toBe('11');
		expect(checkIn.checkInDate).toBe(date);
		expect(checkIn.ticketCode).toBe('LP-SCZ');
	});
});
