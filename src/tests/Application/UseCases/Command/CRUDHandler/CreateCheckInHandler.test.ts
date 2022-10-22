import { CheckInDto } from '../../../../../Application/Dto/CheckInDto';
import { CRUDCommandFactory } from '../../../../../Application/UseCases/Command/CRUDCommandHandler/CRUDCommandFactory';
import { CreateCheckInHandler } from '../../../../../Application/UseCases/Command/CRUDCommandHandler/CreateCheckInHandler';
import { CheckInService } from '../../../../../Application/Services/CheckInService';
import { createMock } from 'ts-auto-mock';

const checkInDto = new CheckInDto();
checkInDto.id = '11';
checkInDto.baggage = 123;
checkInDto.checkInDate = new Date();
checkInDto.docPassenger = "asd";
checkInDto.ticketCode = "123123adreew3";

const checkInService = createMock<CheckInService>();
checkInService.createCheckIn = (param) => {
	return Promise.resolve( '11');
};
const commandConfig = {
	commandName: 'CreateCheckInHandler',
	args: { checkInDto },
	service: checkInService
};
const crudCommandFactory = new CRUDCommandFactory();

describe('Creates a checkIn', () => {
	test('Should be a createFlightHandler', () => {
		const command = crudCommandFactory.makeCommand(commandConfig);
		expect(command).toBeInstanceOf(CreateCheckInHandler);
	});
	test('Should execute createFlight', async () => {
		const command = crudCommandFactory.makeCommand(commandConfig);
		await expect(command.execute()).resolves.toEqual({ checkInId: "11" });
	});
});
