export class ReserveDto {
	id: string = null;
	nroReserva: string = null;
	costo: number = null;
	fechaVuelo: Date = null;
	idVuelo: string = null;
	activo: boolean = null;
	vueloReserva: Array<	{
		id: string;
		pasajero: string;
		nroDocumento: string;
		costo: number;
	}> = null;
	occuredOn: Date = null;
	eventId: string = null;
}