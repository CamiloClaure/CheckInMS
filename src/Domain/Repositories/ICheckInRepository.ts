import { CheckIn } from '../Model/CheckIn/CheckIn';
import { IRepository } from '../../SharedKernel/Core/IRepository';

export interface ICheckInRepository extends IRepository<any, any> {
	createCheckIn(checkIn: CheckIn): Promise<any>;
	updateCheckIn(checkIn: CheckIn): Promise<any>;
	removeCheckIn(checkIn: CheckIn): Promise<any>;
}
