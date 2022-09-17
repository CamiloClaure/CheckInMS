import { getManager } from 'typeorm';
import { ISeatRepository } from '../../../Domain/Repositories/ISeatRepository';
import { Seat } from '../../../Domain/Model/Seat/Seat';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SeatRepository implements ISeatRepository {
	CreateAsync(obj: any): Promise<any> {
		console.log(obj);
		return Promise.resolve(undefined);
	}

	FindByIdAsync(id: any): Promise<any> {
		return getManager().getRepository('Seat').findOne({
			id: id,
		});
	}
	FindByNameAsync(name: any): Promise<any> {
		return getManager().getRepository('Seat').findOne({
			name: name,
		});
	}

	createSeat(seat: Seat): Promise<any> {
		console.log(seat);
		return Promise.resolve(undefined);
	}

	updateSeat(seat: Seat): Promise<any> {
		// console.log(seat);
		return Promise.resolve(undefined);
	}

	removeSeat(seat: Seat): Promise<any> {
		console.log(seat);
		return Promise.resolve(undefined);
	}
}
