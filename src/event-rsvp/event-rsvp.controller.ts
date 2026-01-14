import { Controller, Post, Body, Param, Put } from "@nestjs/common";
import { EventRsvpService } from "./event-rsvp.service.js";
import { CreateEventRsvpDto } from "./dto/create-event-rsvp.dto.js";
import { UpdateEventRsvpDto } from "./dto/update-event-rsvp.dto.js";

@Controller("api/v1/events")
export class EventRsvpController {
	constructor(private readonly eventRsvpService: EventRsvpService) {}

	@Post(":eventId/rsvps")
	createRsvp(@Param("eventId") eventId: string, @Body() createEventRsvpDto: CreateEventRsvpDto) {
		return this.eventRsvpService.createRsvp(+eventId, createEventRsvpDto);
	}

	@Put(":eventId/rsvps/:rsvpId")
	updateRsvp(
		@Param("eventId") eventId: string,
		@Param("rsvpId") rsvpId: string,
		@Body() updateEventRsvpDto: UpdateEventRsvpDto,
	) {
		return this.eventRsvpService.updateRsvp(+eventId, +rsvpId, updateEventRsvpDto);
	}
}
