import { PartialType } from "@nestjs/mapped-types";
import { CreateEventRsvpDto, RsvpStatus } from "./create-event-rsvp.dto.js";
import { IsEnum, IsString } from "class-validator";

export class UpdateEventRsvpDto extends PartialType(CreateEventRsvpDto) {
	@IsEnum(RsvpStatus)
	status?: RsvpStatus;

	@IsString()
	notes?: string;
}
