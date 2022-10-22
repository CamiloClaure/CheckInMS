import { CheckInRepository } from '../../../Infrastructure/ORM/Repository/CheckInRepository';
import { CheckIn } from '../../../Domain/Model/CheckIn/CheckIn';
import { DataSource } from "typeorm";
import { createMock } from "ts-auto-mock";
import { SeatService } from "../../../Application/Services/SeatService";


// @ts-ignore
export const dataSourceMockFactory: () => MockType<DataSource> = jest.fn(() => ({
	getRepository: jest.fn().mockImplementation(() => {"ewerw"}),
	createQueryRunner: jest.fn().mockImplementation(() => ({
		connect: jest.fn(),
		startTransaction: jest.fn(),
		release: jest.fn(),
		rollbackTransaction: jest.fn(),
		manager: {
			save: jest.fn(),
		}
	}))
}))
export type MockType<T> = {
	[P in keyof T]?: jest.Mock<{}>;
};
const checkInRepository = new CheckInRepository(dataSourceMockFactory);
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
