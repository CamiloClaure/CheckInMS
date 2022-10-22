import { SeatRepository } from '../../../Infrastructure/ORM/Repository/seatRepository';
import { DataSource } from "typeorm";
import { Seat } from "../../../Domain/Model/Seat/Seat";


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
const seatRepository = new SeatRepository(dataSourceMockFactory);
describe('Seat Service', () => {
	test('Creates a Seat', async () => {
		const result = await seatRepository.CreateAsync('123');
		expect(result).toBe(undefined);
	});
	test('Removes a Seat', async () => {
		const result = await seatRepository.removeSeat(new Seat());
		expect(result).toBe(undefined);
	});
	test('Updates a Seat', async () => {
		const result = await seatRepository.updateSeat(new Seat());
		expect(result).toBe(undefined);
	});
});
