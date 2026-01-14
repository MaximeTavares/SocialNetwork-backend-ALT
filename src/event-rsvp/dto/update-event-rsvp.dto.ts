import { PartialType } from "@nestjs/mapped-types";
import { CreateEventRsvpDto } from "./create-event-rsvp.dto.js";

export class UpdateEventRsvpDto extends PartialType(CreateEventRsvpDto) {
	status: "attending" | "maybe" | "declined";
}
