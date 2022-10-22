import { ICheckInRepository } from '../../../Domain/Repositories/ICheckInRepository';
import { Reservation as ReservationDomain } from '../../../Domain/Model/Reservation/Reservation';
import { Reservation } from '../Entities/Reservation.entity';
import { DataSource, getManager } from "typeorm";
import { Seat } from '../Entities/Seat.entity';
import { Injectable } from '@nestjs/common';
import { IReservationRepository } from "../../../Domain/Repositories/IReservationRepository";

@Injectable()
export class ReservationRepository implements IReservationRepository {
	constructor(private dataSource: DataSource | any) {
	}
	CreateAsync(obj: any): Promise<any> {
		return Promise.resolve(undefined);
	}

	FindByIdAsync(id: any): Promise<any> {
		return this.dataSource.getRepository('Reservation').findOne({where: { nroReserva: id}})
	}

	createReservation(reservationDomain: ReservationDomain): Promise<any> {
		// TODO abstraer la conexion cosa que quede funcion tipo new Model("CheckIn"); model.save(checkIn)
		const reservation = new Reservation();
		reservation.id = reservationDomain.id;
		reservation.nroReserva = reservationDomain.nroReserva;
		reservation.activo = reservationDomain.activo
		reservation.docPasajero = reservationDomain.pasajero
		reservation.idVuelo = reservationDomain.idVuelo;
		const status = this.dataSource
			.getRepository('Reservation')
			.save(reservation)
			.then((reservationRes) => {
				return reservation.id;
			})
			.catch((err) => {
				console.log(err);
				return null;
			});
		return Promise.resolve(status);
	}

	updateReservation(checkIn: ReservationDomain): Promise<any> {
		return Promise.resolve(undefined);
	}

	removeReservation(checkIn: ReservationDomain): Promise<any> {
		return Promise.resolve(undefined);
	}
}
