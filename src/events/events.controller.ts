import { Controller, Get, Post, Body, Param, Delete, Put } from "@nestjs/common";
import { EventsService } from "./events.service.js";
import { CreateEventDto } from "./dto/create-event.dto.js";
import { UpdateEventDto } from "./dto/update-event.dto.js";

@Controller("api/v1/events")
export class EventsController {
	constructor(private readonly eventsService: EventsService) {}

	@Post()
	create(@Body() createEventDto: CreateEventDto) {
		return this.eventsService.create(createEventDto);
	}

	@Get()
	findAll() {
		return this.eventsService.findAll();
	}

	@Get(":id")
	findOne(@Param("id") id: string) {
		return this.eventsService.findById(+id);
	}

	@Put(":id")
	update(@Param("id") id: string, @Body() updateEventDto: UpdateEventDto) {
		return this.eventsService.update(+id, updateEventDto);
	}

	@Delete(":id")
	remove(@Param("id") id: string) {
		return this.eventsService.remove(+id);
	}
}
