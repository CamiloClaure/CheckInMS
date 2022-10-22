import { SeatDto } from '../../../../Application/Dto/SeatDto';
import { createMock } from 'ts-auto-mock';
import { SeatService } from '../../../../Application/Services/SeatService';
import { Seat } from '../../../../Domain/Model/Seat/Seat';
import { SeatByNameQueryHandlerFactory } from '../../../../Application/UseCases/Queries/GetSeatBySeatNameHandler/SeatByNameQueryHandlerFactory';
import { GetSeatBySeatName } from '../../../../Application/UseCases/Queries/GetSeatBySeatNameHandler/GetSeatBySeatName';
import { SeatQueryHandlerFactory } from '../../../../Application/UseCases/Queries/GetSeatFromSeatNameQuery/SeatQueryHandlerFactory';
import { GetSeatBySeatNameQuery } from '../../../../Application/UseCases/Queries/GetSeatFromSeatNameQuery/GetSeatBySeatNameQuery';

const seatDto = new SeatDto();
seatDto.id = '11';
seatDto.code = 'CBBA';
const commandConfig = {
	queryName: 'GetSeatBySeatNameQuery',
	args: { seatDto },
};
const commandConfigWrong = {
	queryName: 'GetSeatBySeatNameQueryWrong',
	args: { seatDto },
};
const seatService = createMock<SeatService>();
seatService.getRouteFromRouteName = (param) => {
	return Promise.resolve({ result: new Seat('1234321') });
};

const seatQueryHandlerFactory = new SeatQueryHandlerFactory(seatService);

describe('Gets a Seat', () => {
	test('Should be a createFlightCommand', () => {
		const command = seatQueryHandlerFactory.makeQuery(commandConfig);
		expect(command).toBeInstanceOf(GetSeatBySeatNameQuery);
	});
	test('Should return an error', async () => {
		expect(() => {
			seatQueryHandlerFactory.makeQuery(commandConfigWrong);
		}).toThrow('Command not found!');
	});
	test('Should get a seat', async () => {
		const command = seatQueryHandlerFactory.makeQuery(commandConfig);
		const result = await command.execute();
		expect(result.result.id).toEqual('1234321');
	});
});
