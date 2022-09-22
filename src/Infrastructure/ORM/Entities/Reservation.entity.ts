import {
	Entity,
	Column,
	PrimaryColumn,
} from 'typeorm';

@Entity()
export class Reservation {
	@PrimaryColumn('varchar', {
		length: 100,
	})
		id: string;

	@Column({ nullable: true })
		nroReserva: string;

	@Column({ nullable: true })
		idVuelo: string;

	@Column({ nullable: true })
		activo: boolean;
}
