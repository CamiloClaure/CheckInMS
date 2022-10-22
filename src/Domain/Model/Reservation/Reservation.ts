import { AggregateRoot } from '../../../SharedKernel/Core/AggregateRoot';
import { v4 as uuidv4 } from 'uuid';
import { DateValue } from '../../../SharedKernel/ValueObjects/DateValue';
import { Seat } from '../Seat/Seat';
import { CheckInPassed } from '../../Event/CheckInPassed';

export class Reservation extends AggregateRoot<string> {
	private _nroReserva!: string;
	private _pasajeroDoc!: string;
	private _idVuelo!: string;
	private _activo!: boolean;

	constructor(id?: string) {
		super();
		if (!id) {
			this.id = uuidv4();
		} else {
			this.id = id
		}
	}

	get nroReserva(): string {
		return this._nroReserva;
	}

	set nroReserva(value: string) {
		this._nroReserva = value;
	}
	get pasajero(): string {
		return this._pasajeroDoc;
	}

	set pasajero(value: string) {
		this._pasajeroDoc = value;
	}
	get idVuelo(): string {
		return this._idVuelo;
	}

	set idVuelo(value: string) {
		this._idVuelo = value;
	}

	get activo(): boolean {
		return this._activo;
	}

	set activo(value: boolean) {
		this._activo = value;
	}

	get domainEvents(): Array<any> {
		return this._domainEvents;
	}
	consolidateReservation() {
		this.AddDomainEvent(new CheckInPassed(this.id));
	}
}
