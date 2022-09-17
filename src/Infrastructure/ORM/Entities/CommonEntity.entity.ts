import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CommonEntityEntity {
	@PrimaryGeneratedColumn('uuid')
		id: string;
}
