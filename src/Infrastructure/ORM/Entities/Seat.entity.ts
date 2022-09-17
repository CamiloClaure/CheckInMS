import { Entity, PrimaryGeneratedColumn, Column, Timestamp, OneToMany, PrimaryColumn } from 'typeorm';
import { CommonEntityEntity } from './CommonEntity.entity';

@Entity()
export class Seat extends CommonEntityEntity {
	constructor(id: string) {
		super();
		this.id = id;
	}

	@Column({ nullable: true })
		name: string;

	@Column({ nullable: true })
		enabled: boolean;

	@Column({ nullable: true })
		totalDistance: number;

	@Column({ nullable: true })
		totalDuration: number;
}
