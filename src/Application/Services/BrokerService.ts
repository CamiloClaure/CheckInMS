/* istanbul ignore file */
import { Injectable } from '@nestjs/common';
import * as amqplib from "amqplib";
import { Replies } from "amqplib";
import { EventEmitter2 } from "@nestjs/event-emitter";

@Injectable()
export class RabbitMQService {
	constructor(private eventEmitter: EventEmitter2
	) {}
	// public send(pattern: string, data: any) {
	// 	return lastValueFrom(this.client.send(pattern, data))
	// }
	public async sendRabbitMQ(data: any): Promise<void> {
		try {
			const connection = await amqplib.connect('amqp://guest:guest@20.169.83.87:5672');
			const channel = await connection.createChannel();
			const result = await channel.assertQueue("checkin-realizado-reserva");
			const parsedData = {
				"messageId": "340d0000-fb6e-4ced-a618-08da9b6b5cdc",
				"requestId": null,
				"correlationId": "ac9663ab-8f0c-4266-ae68-528de4a7415c",
				"conversationId": "340d0000-fb6e-4ced-ad28-08da9b6b5ce1",
				"initiatorId": null,
				"sourceAddress": "rabbitmq://20.169.83.87/RAULPC_iisexpress_bus_gogoyy85p3gq55rtbdpjs43dfb?temporary=true",
				"destinationAddress": "rabbitmq://20.169.83.87/Sharedkernel.IntegrationEvents:Checkin",
				"responseAddress": null,
				"faultAddress": null,
				"messageType": [
					"urn:message:Sharedkernel.IntegrationEvents:Checkin",
					"urn:message:Sharedkernel.Core:IntegrationEvent"
				],
				"message": {
					...data
				},
				"expirationTime": null,
				"sentTime": "2022-09-21T00:51:04.811676Z",
				"headers": {},
				"host": {
					"machineName": "CAMILO-PC",
					"processName": "nodejs",
					"processId": 3380,
					"assembly": "Reservas.WebApi",
					"assemblyVersion": "1.0.0.0",
					"frameworkVersion": "5.0.15",
					"massTransitVersion": "8.0.6.0",
					"operatingSystemVersion": "Microsoft Windows NT 10.0.19043.0"
				}

			}
			// channel.assertExchange('Sharedkernel.IntegrationEvents:Checkin', 'fanout')
			// channel.publish('Sharedkernel.IntegrationEvents:Checkin', 'checkin-realizado', Buffer.from(JSON.stringify(data)))
			channel.sendToQueue("checkin-realizado-reserva", Buffer.from(JSON.stringify(parsedData)))
		}
		catch (e){
			console.error(e)
		}
	}

	create<T>(type: (new () => T)): T {
		return new type();
	}
	public async rabbitMQStuff<T>(type: (new () => T), queue: string): Promise<Replies.Consume> {
		try {
			const connection = await amqplib.connect('amqp://guest:guest@20.169.83.87:5672');
			const channel = await connection.createChannel();
			const result = await channel.assertQueue(queue);
			return await channel.consume(queue, message => {
				const input = JSON.parse(message.content.toString())
				const parsedInput = this.create(type);
				Object.entries(input.message).forEach(([key, value]) => {
					if (Object.keys(parsedInput).includes(key)) {
						parsedInput[key] = value
					}
				})
				// callback(parsedInput)
				this.eventEmitter.emit('order.created', parsedInput)
				channel.ack(message)
			})
		}
		catch (e){
			console.error(e)
		}
	}

}