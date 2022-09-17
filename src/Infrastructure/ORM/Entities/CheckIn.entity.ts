import {
	Entity,
	Column,
	PrimaryColumn,
} from 'typeorm';

@Entity()
export class CheckIn {
	@PrimaryColumn('varchar', {
		length: 100,
	})
		id: string;

	@Column({ nullable: true })
		seat: string;

	@Column({ nullable: true })
		departureDate: Date;

	@Column({ nullable: true })
		baggage: number;
}
