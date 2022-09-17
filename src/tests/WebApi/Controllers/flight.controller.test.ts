import { CheckinController } from '../../../WebApi/Controllers/checkin.controller';
import { createMock } from 'ts-auto-mock';
import { CreateCheckInCommandFactory } from '../../../Application/UseCases/Command/CreateCheckInCommand/CreateCheckInCommandFactory';
import { CheckInDto } from '../../../Application/Dto/CheckInDto';
import { CheckInService } from '../../../Application/Services/CheckInService';

const commandConfig = {
	commandName: 'CreateCheckInCommand',
	args: new CheckInDto(),
};

describe('FlightController', () => {
	let checkInController: CheckinController;
	const checkInService = createMock<CheckInService>();
	const createFlightCommandFactory = new CreateCheckInCommandFactory(checkInService);

	test('does something', async () => {
		checkInController = new CheckinController(createFlightCommandFactory);
		const result = await checkInController.createFlight(new CheckInDto());
		expect(result).not.toBe(null);
	});
});
