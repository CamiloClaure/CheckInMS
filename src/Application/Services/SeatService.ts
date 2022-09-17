import {  ISeatService } from "./ISeatService";
import { Seat } from '../../Domain/Model/Seat/Seat';
import { IQueryResponse } from '../UseCases/Queries/IQueryResponse';
import { Injectable } from '@nestjs/common';
import { SeatRepository } from '../../Infrastructure/ORM/Repository/SeatRepository';
import { SeatBuilder } from '../../Domain/Builder/SeatBuilder';

@Injectable()
export class SeatService implements ISeatService {
	private seatRepository: SeatRepository;
	constructor(seatRepository: SeatRepository) {
		this.seatRepository = seatRepository;
	}
	async getRouteFromRouteName(seatName: string): Promise<IQueryResponse<Seat>> {
		const seatEntity = await this.seatRepository.FindByNameAsync(seatName);
		// TODO verificar que la entidad tenga sentido aca
		return {
			result: new SeatBuilder(new Seat(seatEntity.id)).setCode(seatEntity.name).build(),
		};
	}

	getSeat(seatName: string): Promise<IQueryResponse<Seat>> {
		return Promise.resolve(undefined);
	}
}
