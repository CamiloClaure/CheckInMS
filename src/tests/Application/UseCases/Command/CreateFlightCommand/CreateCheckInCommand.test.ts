import { CheckInDto } from '../../../../../Application/Dto/CheckInDto';
import { CreateCommandFactory } from '../../../../../Application/UseCases/Command/CreateCheckInCommand/CreateCommandFactory';
import { CreateCheckInCommand } from '../../../../../Application/UseCases/Command/CreateCheckInCommand/CreateCheckInCommand';
import { createMock } from 'ts-auto-mock';
import { CheckInService } from '../../../../../Application/Services/CheckInService';
const checkInDto = new CheckInDto();
checkInDto.id = '11';
checkInDto.baggage = 123;
checkInDto.checkInDate = new Date();
checkInDto.docPassenger = "asd";
checkInDto.ticketCode = "123123adreew3";
const commandConfig = {
	commandName: 'CreateCheckInCommand',
	args: { checkInDto },
};
const commandConfigWrong = {
	commandName: 'CreateCheckInCommandWrong',
	args: { checkInDto },
};
const checkInService = createMock<CheckInService>();
checkInService.createCheckIn = (param) => {
	return Promise.resolve('11');
};

const createFlightCommandFactory = new CreateCommandFactory(checkInService);

describe('Creates a checkIn', () => {
	test('Should be a createFlightCommand', () => {
		const command = createFlightCommandFactory.makeCommand(commandConfig);
		expect(command).toBeInstanceOf(CreateCheckInCommand);
	});
	test('Should be throw error', () => {
		const t = () => {
			createFlightCommandFactory.makeCommand(commandConfigWrong);
		}
		expect(t).toThrow("Command not found!");
	});
});
