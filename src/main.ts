import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as amqplib from "amqplib";
import { Transport } from "@nestjs/microservices";


async function rabbitMQStuff(): Promise<void> {
	try {
		const connection = await amqplib.connect('amqp://guest:guest@20.169.83.87:5672');
		const channel = await connection.createChannel();
		const result = await channel.assertQueue("venta-registrada-check");
		channel.consume("venta-registrada", message => {
			const input = JSON.parse(message.content.toString())
			// console.log(message.content.toString());
			channel.ack(message)
		})
	}
	catch (e){
		console.error(e)
	}
}
async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	await app.listen(3000);
}
bootstrap();
