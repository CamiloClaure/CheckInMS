import { SeatDto } from '../../../../Application/Dto/SeatDto';
import { createMock } from 'ts-auto-mock';
import { SeatService } from '../../../../Application/Services/SeatService';
import { Seat } from '../../../../Domain/Model/Seat/Seat';
import { SeatByNameQueryHandlerFactory } from '../../../../Application/UseCases/Queries/GetSeatBySeatNameHandler/SeatByNameQueryHandlerFactory';
import { GetSeatBySeatName } from '../../../../Application/UseCases/Queries/GetSeatBySeatNameHandler/GetSeatBySeatName';

const checkInDto = new SeatDto();
checkInDto.id = '11';
checkInDto.code = 'CBBA';
const commandConfig = {
	queryName: 'GetSeatBySeatName',
	args: { checkInDto },
};
const commandConfigWrong = {
	queryName: 'GetSeatBySeatNameWrong',
	args: { checkInDto },
};
const seatService = createMock<SeatService>();
seatService.getRouteFromRouteName = (param) => {
	return Promise.resolve({ result: new Seat('1234321') });
};

const seatByNameQueryHandlerFactory = new SeatByNameQueryHandlerFactory(seatService);

describe('Gets a Seat', () => {
	test('Should be a createFlightCommand', () => {
		const command = seatByNameQueryHandlerFactory.makeCommand(commandConfig);
		expect(command).toBeInstanceOf(GetSeatBySeatName);
	});
	test('Should return an error', async () => {
		expect(() => {
			seatByNameQueryHandlerFactory.makeCommand(commandConfigWrong);
		}).toThrow('Command not found!');
	});
	test('Should get a seat', async () => {
		const command = seatByNameQueryHandlerFactory.makeCommand(commandConfig);
		const result = await command.execute();
		expect(result.id).toEqual('1234321');
	});
});
