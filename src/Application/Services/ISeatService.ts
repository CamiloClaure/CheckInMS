import { Seat } from '../../Domain/Model/Seat/Seat';
import { IQueryResponse } from '../UseCases/Queries/IQueryResponse';

export interface ISeatService {
	getSeat: (seatName: string) => Promise<IQueryResponse<Seat>>;
}
