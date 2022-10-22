import { CheckInDto } from '../../../../../Application/Dto/CheckInDto';
import { CreateCommandFactory } from '../../../../../Application/UseCases/Command/CreateCheckInCommand/CreateCommandFactory';
import { CreateCheckInCommand } from '../../../../../Application/UseCases/Command/CreateCheckInCommand/CreateCheckInCommand';
import { createMock } from 'ts-auto-mock';
import { CheckInService } from '../../../../../Application/Services/CheckInService';
import { CreateReservationCommandFactory } from "../../../../../Application/UseCases/Command/CreateReservationCommand/CreateReservationCommandFactory";
import { ReservationService } from "../../../../../Application/Services/ReservationService";
import { CreateReservationCommand } from "../../../../../Application/UseCases/Command/CreateReservationCommand/CreateReservationCommand";
const checkInDto = new CheckInDto();
checkInDto.id = '11';
checkInDto.baggage = 123;
checkInDto.checkInDate = new Date();
checkInDto.docPassenger = "asd";
checkInDto.ticketCode = "123123adreew3";
const commandConfig = {
	commandName: 'CreateReservationCommand',
	args: { checkInDto },
};
const commandConfigWrong = {
	commandName: 'CreateReservationCommandWrong',
	args: { checkInDto },
};
const reservationService = createMock<ReservationService>();
reservationService.createReservation = (param) => {
	return Promise.resolve('11');
};

const createReservationCommandFactory = new CreateReservationCommandFactory(reservationService);

describe('Creates a checkIn', () => {
	test('Should be a createFlightCommand', () => {
		const command = createReservationCommandFactory.makeCommand(commandConfig);
		expect(command).toBeInstanceOf(CreateReservationCommand);
	});
	test('Should be throw error', () => {
		const t = () => {
			createReservationCommandFactory.makeCommand(commandConfigWrong);
		}
		expect(t).toThrow("Command not found!");
	});
});
