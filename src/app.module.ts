import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { CheckinController } from './WebApi/Controllers/checkin.controller';
import { CreateCommandFactory } from './Application/UseCases/Command/CreateCheckInCommand/CreateCommandFactory';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CheckInRepository } from './Infrastructure/ORM/Repository/CheckInRepository';
import { SeatService } from './Application/Services/SeatService';
import { CheckInService } from './Application/Services/CheckInService';
import { SeatRepository } from './Infrastructure/ORM/Repository/SeatRepository';
import * as fs from 'fs';
import * as path from 'path';
import { RabbitMQService } from "./Application/Services/BrokerService";
import { CreateReservationCommandFactory } from "./Application/UseCases/Command/CreateReservationCommand/CreateReservationCommandFactory";
import { ReservationService } from "./Application/Services/ReservationService";
import { EventEmitterModule } from '@nestjs/event-emitter';
import { ReservationRepository } from "./Infrastructure/ORM/Repository/ReservationRepository";

@Module({
	imports: [TypeOrmModule.forRoot({
		type: "postgres",
		host: "db-postgresql-nyc1-96651-do-user-12454790-0.b.db.ondigitalocean.com",
		port: 25060,
		username: "doadmin",
		password: "AVNS_CN9Jp0ogwNX5Vnmr36y",
		database: "defaultdb",
		entities: ["dist/Infrastructure/ORM/Entities/**/*.js"],
		synchronize: false,
		migrations: ["src/persistance/migrations/*.js"],
		migrationsTableName: "custom_migration_table",
		logging: false,
		ssl: {
			ca: fs
				.readFileSync(path.join(__dirname, '../src/ca-certificate.crt'))
				.toString()
		}
	}), ClientsModule.register([
		{
			name: 'venta-registrada',
			transport: Transport.RMQ,
			options: {
				urls: [
					'amqp://guest:guest@20.169.83.87:5672',
				],
				queue: 'venta-registrada',
			},
		},
	]), EventEmitterModule.forRoot()],
	controllers: [CheckinController],
	providers: [SeatService, CheckInService, SeatRepository, CreateCommandFactory,
		CheckInRepository, RabbitMQService, CreateReservationCommandFactory, ReservationService, ReservationRepository],
})
export class AppModule {}
