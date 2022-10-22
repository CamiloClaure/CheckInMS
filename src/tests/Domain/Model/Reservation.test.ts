import { Reservation } from "../../../Domain/Model/Reservation/Reservation";
describe('Creating a reservation', () => {
	test('should create reservation', () => {
		const reservation = new Reservation();
		reservation.idVuelo = "123";
		reservation.activo = true;
		reservation.pasajero = "321";
		reservation.nroReserva = "332";
		reservation.consolidateReservation();
		expect(reservation).not.toBe(null);
		expect(reservation.domainEvents).toHaveLength(1);
	});
});
