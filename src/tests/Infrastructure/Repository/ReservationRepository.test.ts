import { CheckInRepository } from '../../../Infrastructure/ORM/Repository/CheckInRepository';
import { CheckIn } from '../../../Domain/Model/CheckIn/CheckIn';
import { DataSource } from "typeorm";
import { createMock } from "ts-auto-mock";
import { SeatService } from "../../../Application/Services/SeatService";
import { ReservationRepository } from "../../../Infrastructure/ORM/Repository/ReservationRepository";
import { Reservation } from "../../../Domain/Model/Reservation/Reservation";



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
const reservationRepository = new ReservationRepository(dataSourceMockFactory);
describe('reservation Service', () => {
	test('Creates a reservation', async () => {
		const result = await reservationRepository.CreateAsync('123');
		expect(result).toBe(undefined);
	});
	test('Removes a reservation', async () => {
		const result = await reservationRepository.removeReservation(new Reservation());
		expect(result).toBe(undefined);
	});
	test('Updates a reservation', async () => {
		const result = await reservationRepository.updateReservation(new Reservation());
		expect(result).toBe(undefined);
	});
});
