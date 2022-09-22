import { CheckInDto } from '../../../Dto/CheckInDto';
import { CheckInService } from '../../../Services/CheckInService';
import ICommandConfig from "../ICommandConfig";
import { ReservationService } from "../../../Services/ReservationService";
import { ReserveDto } from "../../../Dto/ReserveDto";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export class CreateReservationHandler<ICommand> {
	private readonly reserveDto: ReserveDto;
	private reservationService: ReservationService;

	constructor(config: ICommandConfig) {
		this.reserveDto = config.args;
		this.reservationService = config.service;
	}

	public execute = async () => {
		const reservationId = await this.reservationService.createReservation(this.reserveDto);
		return { reservationId };
	};
}
