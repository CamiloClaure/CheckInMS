import { Seat } from '../../Domain/Model/Seat/Seat';
import { IQueryResponse } from '../UseCases/Queries/IQueryResponse';
import { IService } from "./IService";

export interface ISeatService extends IService {
	getSeat: (seatName: string) => Promise<IQueryResponse<Seat>>;
}
