import { CheckInDto } from '../Dto/CheckInDto';
import { IService } from "./IService";

export interface ICheckInService extends IService {
	createCheckIn(checkIn: CheckInDto): Promise<string>;
}
