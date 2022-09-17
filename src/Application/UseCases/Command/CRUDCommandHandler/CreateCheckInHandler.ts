import { CheckInDto } from '../../../Dto/CheckInDto';
import { CheckInService } from '../../../Services/CheckInService';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export class CreateCheckInHandler<ICommand> {
	private readonly checkIn: CheckInDto;
	private checkInService: CheckInService;

	constructor(checkIn: CheckInDto, checkInService: CheckInService) {
		this.checkIn = checkIn;
		this.checkInService = checkInService;
	}

	public execute = async () => {
		const checkInId = await this.checkInService.createCheckIn(this.checkIn);
		return { checkInId };
	};
}
