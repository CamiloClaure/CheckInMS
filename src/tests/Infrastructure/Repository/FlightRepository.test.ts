import { CheckInRepository } from '../../../Infrastructure/ORM/Repository/CheckInRepository';
import { CheckIn } from '../../../Domain/Model/CheckIn/CheckIn';

const checkInRepository = new CheckInRepository();
describe('CheckIn Service', () => {
	test('Creates a checkIn', async () => {
		const result = await checkInRepository.CreateAsync('123');
		expect(result).toBe(undefined);
	});
	test('Removes a checkIn', async () => {
		const result = await checkInRepository.removeCheckIn(new CheckIn());
		expect(result).toBe(undefined);
	});
	test('Finds a checkIn', async () => {
		const result = await checkInRepository.FindByIdAsync('123');
		expect(result).toBe(undefined);
	});
	test('Updates a checkIn', async () => {
		const result = await checkInRepository.updateCheckIn(new CheckIn());
		expect(result).toBe(undefined);
	});
});
