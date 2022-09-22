import { ICheckInRepository } from '../../../Domain/Repositories/ICheckInRepository';
import { CheckIn as CheckInDomain } from '../../../Domain/Model/CheckIn/CheckIn';
import { CheckIn } from '../Entities/CheckIn.entity';
import { DataSource, getManager } from "typeorm";
import { Seat } from '../Entities/Seat.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CheckInRepository implements ICheckInRepository {
	constructor(private dataSource: DataSource) {
	}
	CreateAsync(obj: any): Promise<any> {
		console.log(obj);
		return Promise.resolve(undefined);
	}

	FindByIdAsync(id: any): Promise<any> {
		console.log(id);
		return Promise.resolve(undefined);
	}

	createCheckIn(checkInDomain: CheckInDomain): Promise<any> {
		// TODO abstraer la conexion cosa que quede funcion tipo new Model("CheckIn"); model.save(checkIn)
		const checkIn = new CheckIn();
		checkIn.id = checkInDomain.id;
		checkIn.seat = new Seat("test").id;
		checkIn.departureDate = new Date();
		checkIn.baggage = checkInDomain.baggage;
		const status = this.dataSource
			.getRepository('CheckIn')
			.save(checkIn)
			.then((checkInRes) => {
				return checkInRes.id;
			})
			.catch((err) => {
				console.log(err);
				return null;
			});
		return Promise.resolve(status);
	}

	removeCheckIn(checkIn: CheckInDomain): Promise<any> {
		console.log(checkIn);
		return Promise.resolve(undefined);
	}

	updateCheckIn(checkIn: CheckInDomain): Promise<any> {
		console.log(checkIn);
		return Promise.resolve(undefined);
	}
}
