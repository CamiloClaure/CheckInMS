import { createMock } from 'ts-auto-mock';
import { SeatService } from '../../../Application/Services/SeatService';
import { ICheckInRepository } from '../../../Domain/Repositories/ICheckInRepository';
import { CheckInDto } from '../../../Application/Dto/CheckInDto';
import { SeatRepository } from '../../../Infrastructure/ORM/Repository/SeatRepository';
import { Seat } from '../../../Infrastructure/ORM/Entities/Seat.entity';

const seatEntity = new Seat('123');
seatEntity.name = 'CBBA';

const seatRepository = createMock<SeatRepository>();
seatRepository.FindByNameAsync = (param) => {
	return Promise.resolve(seatEntity);
};

const seatServiceTest = new SeatService(seatRepository);

describe('Seat Service', () => {
	test('Gets a seat based on its name', async () => {
		const name = await seatServiceTest.getRouteFromRouteName('CBBA');
		expect(name.result.code).toEqual({ Name: 'CBBA' });
	});
});
