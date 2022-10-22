import { ReserveDto } from '../../../Application/Dto/ReserveDto';

describe('Creating a FlightDto', () => {
	test('should create FlightDto', () => {
		const date = new Date('2020-12-12');
		const reserveDto = new ReserveDto();
		reserveDto.id = '11';
		reserveDto.nroReserva = "";
		reserveDto.idVuelo = 'LP-SCZ';
		reserveDto.activo = true;
		reserveDto.vueloReserva = [];
		reserveDto.costo = 100;
		reserveDto.fechaVuelo = date;
		reserveDto.occuredOn = null;
		expect(reserveDto.id).toBe('11');
		expect(reserveDto.idVuelo).toBe('LP-SCZ');
		expect(reserveDto.costo).toBe(100);
	});
});
