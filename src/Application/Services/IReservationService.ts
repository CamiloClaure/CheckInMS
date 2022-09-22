import { ReserveDto } from '../Dto/ReserveDto';
import { IService } from "./IService";

export interface IReservationService extends IService {
	createReservation(checkIn: ReserveDto): Promise<string>;
}
