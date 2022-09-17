import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as amqplib from "amqplib";


async function rabbitMQStuff(): Promise<void> {
	try {
		const connection = await amqplib.connect('amqp://guest:123456@157.245.93.102:5672');
		const channel = await connection.createChannel();
		const result = await channel.assertQueue("checkin-realizado");
		channel.consume("vuelo-creado", message => {
			const input = JSON.parse(message.content.toString())
			// console.log(message.content.toString());
			channel.ack(message)
			console.log(input);
		})
	}
	catch (e){
		console.error(e)
	}
}
async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	rabbitMQStuff();
	await app.listen(3000);
}
bootstrap();
