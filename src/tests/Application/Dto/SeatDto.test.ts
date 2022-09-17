import { SeatDto } from '../../../Application/Dto/SeatDto';

describe('Creating a SeatDto', () => {
	test('should create SeatDto', () => {
		const date = new Date('2020-12-12');
		const seat = new SeatDto();
		seat.id = '11';
		seat.code = 'SCZCBBA';
		seat.type = 2323;
		expect(seat.id).toBe('11');
		expect(seat.code).toBe('SCZCBBA');
		expect(seat.type).toBe(2323);
	});
});
