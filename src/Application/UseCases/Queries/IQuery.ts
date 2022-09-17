import { IQueryResponse } from './IQueryResponse';

export default interface IQuery<T> {
	execute: () => Promise<IQueryResponse<T>>;
}
