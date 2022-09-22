import { CheckInDto } from '../../../Dto/CheckInDto';
import { CheckInService } from '../../../Services/CheckInService';
import ICommandConfig from "../ICommandConfig";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export class CreateCheckInHandler<ICommand> {
	private readonly checkIn: CheckInDto;
	private checkInService: CheckInService;

	constructor(config: ICommandConfig) {
		this.checkIn = config.args;
		this.checkInService = config.service;
	}

	public execute = async () => {
		const checkInId = await this.checkInService.createCheckIn(this.checkIn);
		return { checkInId };
	};
}
