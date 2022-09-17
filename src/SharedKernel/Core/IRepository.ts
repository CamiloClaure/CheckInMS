export interface IRepository<T, TId> {
	FindByIdAsync(id: TId): Promise<any>;

	CreateAsync(obj: T): Promise<any>;
}
