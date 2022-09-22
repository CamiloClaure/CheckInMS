import { Reservation } from '../Model/Reservation/Reservation';
import { IRepository } from '../../SharedKernel/Core/IRepository';

export interface IReservationRepository extends IRepository<any, any> {
	createReservation(reservation: Reservation): Promise<any>;
	updateReservation(reservation: Reservation): Promise<any>;
	removeReservation(reservation: Reservation): Promise<any>;
}
