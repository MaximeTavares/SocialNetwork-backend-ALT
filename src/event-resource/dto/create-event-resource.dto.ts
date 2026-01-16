import { IsNumber } from "class-validator";

export class CreateEventResourceDto {
	@IsNumber()
	eventId: number;

	@IsNumber()
	resourceId: number;
}
