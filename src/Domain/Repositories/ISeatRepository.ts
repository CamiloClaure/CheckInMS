import { IRepository } from '../../SharedKernel/Core/IRepository';
import { Seat } from '../Model/Seat/Seat';

export interface ISeatRepository extends IRepository<any, any> {
	createSeat(seat: Seat): Promise<any>;
	updateSeat(seat: Seat): Promise<any>;
	removeSeat(seat: Seat): Promise<any>;
}
