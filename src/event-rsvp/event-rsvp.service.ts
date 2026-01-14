import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateEventRsvpDto } from "./dto/create-event-rsvp.dto.js";
import { UpdateEventRsvpDto } from "./dto/update-event-rsvp.dto.js";
import { PrismaService } from "../prisma/prisma.service.js";

@Injectable()
export class EventRsvpService {
	constructor(private readonly prisma: PrismaService) {}

	async createRsvp(eventId: number, createEventRsvpDto: CreateEventRsvpDto) {
		const event = await this.prisma.event.findUnique({ where: { id: eventId } });
		if (!event) {
			throw new NotFoundException(`Event ${eventId} not found`);
		}
		const rsvp = await this.prisma.eventRSVP.create({
			data: {
				eventId: eventId,
				...createEventRsvpDto,
				responseDate: new Date(),
			},
		});
		return rsvp;
	}

	async updateRsvp(eventId: number, rsvpId: number, updateEventRsvpDto: UpdateEventRsvpDto) {
		const rsvp = await this.prisma.eventRSVP.findUnique({ where: { id: rsvpId } });

		if (!rsvp || rsvp.eventId !== eventId) {
			throw new NotFoundException(`RSVP not found for this event`);
		}

		return this.prisma.eventRSVP.update({
			where: { id: rsvpId },
			data: updateEventRsvpDto,
		});
	}
}
