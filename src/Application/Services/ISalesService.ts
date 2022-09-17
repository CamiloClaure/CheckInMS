import { Seat } from '../../Domain/Model/Seat/Seat';
import { IQueryResponse } from '../UseCases/Queries/IQueryResponse';

export interface ISalesService {
	// TODO mover ese tipo any
	getTicketSold: (ticketId: string) => Promise<IQueryResponse<any>>;
}
