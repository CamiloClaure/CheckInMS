import { DomainEvent } from '../../SharedKernel/Core/DomainEvent';

export class CheckInPassed extends DomainEvent {
	checkInId: string;

	constructor(checkInId: string) {
		super(new Date());
		this.checkInId = checkInId;
	}
}
