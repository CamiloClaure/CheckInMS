import { createMock } from 'ts-auto-mock';
import { CheckInService } from '../../../Application/Services/CheckInService';
import { SeatService } from '../../../Application/Services/SeatService';
import { ICheckInRepository } from '../../../Domain/Repositories/ICheckInRepository';
import { CheckInDto } from '../../../Application/Dto/CheckInDto';
import { SeatBuilder } from '../../../Domain/Builder/SeatBuilder';
const checkInDto = new CheckInDto();
checkInDto.id = '11';
checkInDto.ticketCode = 'dsfs';
checkInDto.checkInDate = new Date();

const seatModel = new SeatBuilder().setCode('CBBA').build();

const seatService = createMock<SeatService>();
seatService.getRouteFromRouteName = (param) => {
	return Promise.resolve({ result: seatModel });
};
const checkInRepository = createMock<ICheckInRepository>();
checkInRepository.createCheckIn = (param) => {
	return Promise.resolve('11');
};

const checkInService = new CheckInService(checkInRepository, seatService);

describe('CheckIn Service', () => {
	test('Creates a checkIn', () => {
		expect(checkInService.createCheckIn(checkInDto)).resolves.toEqual('11');
	});
});
