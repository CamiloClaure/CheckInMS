import ICommand from '../ICommand';
import { Injectable } from '@nestjs/common';
import { ReserveDto } from "../../../Dto/ReserveDto";
import { CRUDCommandFactory } from "../CRUDCommandHandler/CRUDCommandFactory";
import { ReservationService } from "../../../Services/ReservationService";

Injectable();
export class CreateReservationCommand implements ICommand {
	private readonly reserveDto: ReserveDto;
	private readonly reservationService: ReservationService;
	private name = '';

	constructor(reserveDto: ReserveDto, private readonly crudCommandFactory: CRUDCommandFactory<any>, reservationService: ReservationService) {
		this.reserveDto = reserveDto;
		this.reservationService = reservationService
	}

	public execute = async () => {
		console.log('creating command');

		const commandName = 'CreateReservationHandler';

		const config = {
			commandName,
			service: this.reservationService,
			args: this.reserveDto,
		};
		const checkInId = await this.crudCommandFactory.makeCommand(config).execute();
		return { result: checkInId };
	};
}
