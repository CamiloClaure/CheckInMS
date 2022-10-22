import { CheckinController } from '../../../WebApi/Controllers/checkin.controller';
import { createMock } from 'ts-auto-mock';
import { CreateCommandFactory } from '../../../Application/UseCases/Command/CreateCheckInCommand/CreateCommandFactory';
import { CheckInDto } from '../../../Application/Dto/CheckInDto';
import { CheckInService } from '../../../Application/Services/CheckInService';
import { CreateReservationCommand } from "../../../Application/UseCases/Command/CreateReservationCommand/CreateReservationCommand";
import { RabbitMQService } from "../../../Application/Services/BrokerService";
import { CreateReservationCommandFactory } from "../../../Application/UseCases/Command/CreateReservationCommand/CreateReservationCommandFactory";

const commandConfig = {
	commandName: 'CreateCheckInCommand',
	args: new CheckInDto(),
};

describe('FlightController', () => {
	let checkInController: CheckinController;
	const checkInService = createMock<CheckInService>();
	const createReservationCommand = createMock<CreateReservationCommandFactory>();
	const rabbitMQService = createMock<RabbitMQService>();
	const createFlightCommandFactory = new CreateCommandFactory(checkInService);

	test('does something', async () => {
		checkInController = new CheckinController(createFlightCommandFactory, createReservationCommand, rabbitMQService);
		const result = await checkInController.createFlight(new CheckInDto());
		expect(result).not.toBe(null);
	});
});
