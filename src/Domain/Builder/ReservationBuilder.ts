import { Reservation } from '../Model/Reservation/Reservation';
export class ReservationBuilder {
	private readonly _reservation: Reservation;

	constructor(id?: string) {
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
	setPasajero(documento: string) {
		this._reservation.pasajero = documento;
		return this;
	}

	build(): Reservation {
		return this._reservation;
	}
}
