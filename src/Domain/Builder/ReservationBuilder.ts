import { Reservation } from '../Model/Reservation/Reservation';
export class ReservationBuilder {
	private readonly _reservation: Reservation;

	constructor(id?: string) {
		console.log("id reservation", id);
		this._reservation = id ? new Reservation(id) : new Reservation();
	}

	setReservationNroReserva(nroReserva: string) {
		this._reservation.nroReserva = nroReserva;
		return this;
	}

	setIdVuelo(idVuelo: string) {
		this._reservation.idVuelo = idVuelo
		return this;
	}

	setActivo(activo: boolean) {
		this._reservation.activo = activo;
		return this;
	}

	build(): Reservation {
		return this._reservation;
	}
}
