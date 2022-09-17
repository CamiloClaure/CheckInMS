import IQuery from './IQuery';
import IQueryConfig from './IQueryConfig';

export default interface IQueryFactory {
	makeQuery: (config: IQueryConfig) => IQuery<any>;
}
