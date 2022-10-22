import { createMock } from 'ts-auto-mock';
import { CheckInService } from '../../../Application/Services/CheckInService';
import { SeatService } from '../../../Application/Services/SeatService';
import { ICheckInRepository } from '../../../Domain/Repositories/ICheckInRepository';
import { CheckInDto } from '../../../Application/Dto/CheckInDto';
import { SeatBuilder } from '../../../Domain/Builder/SeatBuilder';
import { CheckInRepository } from "../../../Infrastructure/ORM/Repository/CheckInRepository";
import { RabbitMQService } from "../../../Application/Services/BrokerService";
import { ReservationService } from "../../../Application/Services/ReservationService";
const checkInDto = new CheckInDto();
checkInDto.id = '11';
checkInDto.ticketCode = 'dsfs';
checkInDto.docPassenger = 'sdf'
checkInDto.checkInDate = new Date();

const seatModel = new SeatBuilder().setCode('CBBA').build();

const seatService = createMock<SeatService>();
seatService.getRouteFromRouteName = (param) => {
	return Promise.resolve({ result: seatModel });
};
const checkInRepository = createMock<CheckInRepository>();
checkInRepository.createCheckIn = (param) => {
	return Promise.resolve('11');
};
const rabbitMqService = createMock<RabbitMQService>();
rabbitMqService.sendRabbitMQ = (param) => {
	return Promise.resolve();
};
const reservationService = createMock<ReservationService>();
reservationService.getReservation = (param) => {
	return Promise.resolve({
		nroReserva: "23", idVuelo: 1, docPasajero: "sdf", activo: true
	});
};

const checkInService = new CheckInService(checkInRepository, seatService, rabbitMqService, reservationService);

describe('CheckIn Service', () => {
	test('Creates a checkIn', () => {
		expect(checkInService.createCheckIn(checkInDto)).resolves.toEqual('11');
	});
});
