import { SeatRepository } from '../../../Infrastructure/ORM/Repository/SeatRepository';
import { Seat } from '../../../Domain/Model/Seat/Seat';

const checkInRepository = new SeatRepository();
describe('CheckIn Service', () => {
	test('Creates a checkIn', async () => {
		const result = await checkInRepository.CreateAsync('123');
		expect(result).toBe(undefined);
	});
	test('Removes a checkIn', async () => {
		const result = await checkInRepository.removeSeat(new Seat());
		expect(result).toBe(undefined);
	});
	test('Updates a checkIn', async () => {
		const result = await checkInRepository.updateSeat(new Seat());
		expect(result).toBe(undefined);
	});
	test('Updates a checkIn', async () => {
		const result = await checkInRepository.createSeat(new Seat());
		expect(result).toBe(undefined);
	});
});
