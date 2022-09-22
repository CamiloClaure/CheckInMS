import { ICheckInRepository } from '../../../Domain/Repositories/ICheckInRepository';
import { Reservation as ReservationDomain } from '../../../Domain/Model/Reservation/Reservation';
import { Reservation } from '../Entities/Reservation.entity';
import { DataSource, getManager } from "typeorm";
import { Seat } from '../Entities/Seat.entity';
import { Injectable } from '@nestjs/common';
import { IReservationRepository } from "../../../Domain/Repositories/IReservationRepository";

@Injectable()
export class ReservationRepository implements IReservationRepository {
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

	createReservation(reservationDomain: ReservationDomain): Promise<any> {
		// TODO abstraer la conexion cosa que quede funcion tipo new Model("CheckIn"); model.save(checkIn)
		console.log("reservation repository");
		const reservation = new Reservation();
		reservation.id = reservationDomain.id;
		reservation.nroReserva = reservationDomain.nroReserva;
		reservation.activo = reservationDomain.activo
		reservation.idVuelo = reservationDomain.idVuelo;
		const status = this.dataSource
			.getRepository('Reservation')
			.save(reservation)
			.then((reservationRes) => {
				console.log("repository reservation");
				return reservation.id;
			})
			.catch((err) => {
				console.log(err);
				return null;
			});
		return Promise.resolve(status);
	}

	updateReservation(checkIn: ReservationDomain): Promise<any> {
		console.log(checkIn);
		return Promise.resolve(undefined);
	}

	removeReservation(checkIn: ReservationDomain): Promise<any> {
		console.log(checkIn);
		return Promise.resolve(undefined);
	}
}
