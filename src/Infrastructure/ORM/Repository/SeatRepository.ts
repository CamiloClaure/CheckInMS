import { DataSource } from "typeorm";
import { ISeatRepository } from '../../../Domain/Repositories/ISeatRepository';
import { Seat } from '../../../Domain/Model/Seat/Seat';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SeatRepository implements ISeatRepository {
	constructor(private dataSource: DataSource) {
	}
	CreateAsync(obj: any): Promise<any> {
		return Promise.resolve(undefined);
	}

	FindByIdAsync(id: any): Promise<any> {
		return this.dataSource.getRepository('Seat').findOne({where: { id },});
	}
	FindByNameAsync(name: any): Promise<any> {

		return this.dataSource.getRepository('Seat').findOne({where: {
			name: name,
		}});
	}

	createSeat(seat: Seat): Promise<any> {
		return Promise.resolve(undefined);
	}

	updateSeat(seat: Seat): Promise<any> {
		// console.log(seat);
		return Promise.resolve(undefined);
	}

	removeSeat(seat: Seat): Promise<any> {
		return Promise.resolve(undefined);
	}
}
