import { CheckInDto } from '../Dto/CheckInDto';

export interface ICheckInService {
	createCheckIn(checkIn: CheckInDto): Promise<string>;
}
