import { Module } from '@nestjs/common';
import { CheckinController } from './WebApi/Controllers/checkin.controller';
import { CreateCheckInCommandFactory } from './Application/UseCases/Command/CreateCheckInCommand/CreateCheckInCommandFactory';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CheckInRepository } from './Infrastructure/ORM/Repository/CheckInRepository';
import { SeatService } from './Application/Services/SeatService';
import { CheckInService } from './Application/Services/CheckInService';
import { SeatRepository } from './Infrastructure/ORM/Repository/SeatRepository';
import * as fs from 'fs';
import * as path from 'path';

@Module({
	imports: [TypeOrmModule.forRoot({
		type: "postgres",
		host: "db-postgresql-nyc1-96651-do-user-12454790-0.b.db.ondigitalocean.com",
		port: 25060,
		username: "doadmin",
		password: "AVNS_CN9Jp0ogwNX5Vnmr36y",
		database: "defaultdb",
		entities: ["dist/Infrastructure/ORM/Entities/**/*.js"],
		synchronize: true,
		migrations: ["src/persistance/migrations/*.js"],
		migrationsTableName: "custom_migration_table",
		logging: true,
		ssl: {
			ca: fs
				.readFileSync(path.join(__dirname, '../src/ca-certificate.crt'))
				.toString()
		}
	})],
	controllers: [CheckinController],
	providers: [SeatService, CheckInService, SeatRepository, CreateCheckInCommandFactory, CheckInRepository],
})
export class AppModule {}
