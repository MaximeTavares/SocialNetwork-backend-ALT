import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateEventRsvpDto } from "./dto/create-event-rsvp.dto.js";
import { UpdateEventRsvpDto } from "./dto/update-event-rsvp.dto.js";
import { PrismaService } from "../prisma/prisma.service.js";
import { toEventDto } from "../events/event.mapper.js";

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
	/**
	 * Met à jour le status d'un RSVP d'un event donné.
	 *
	 * 1 - Vérifie que le RSVP existe.
	 * 2 - Met à jour le RSVP
	 * 3 - On récupère l'event du RSVP
	 * 4 - On retourne l'event transformé en DTO, sans quoi le compteur Rsvp n'est pas mis à jour.
	 *
	 * @param {number} eventId - ID de l'event lié au RSVP
	 * @param {number} rsvpId - ID du RSVP à update.
	 * @param {UpdateEventRsvpDto} updateEventRsvpDto - DTO des données mises à jour.
	 * @return {*} - le RSVP est mis à jour, retour sous la forme du DTO d'Event.
	 *
	 */
	async updateRsvp(eventId: number, rsvpId: number, updateEventRsvpDto: UpdateEventRsvpDto) {
		//Récupération du RSVP existant
		const rsvp = await this.prisma.eventRSVP.findUnique({ where: { id: rsvpId } });

		if (!rsvp || rsvp.eventId !== eventId) {
			throw new NotFoundException(`RSVP not found for this event`);
		}

		//Mise à jour avec le nouveau status
		await this.prisma.eventRSVP.update({
			where: { id: rsvpId },
			data: updateEventRsvpDto,
		});

		//Renvoi le DTO de event pour que le compteur RsvpCount se mettent correctement à jour
		const event = await this.prisma.event.findUnique({
			where: { id: rsvp.eventId },
			include: {
				creator: { select: { id: true, firstname: true, lastname: true } },
				rsvps: { select: { status: true } },
				resources: {
					include: {
						resource: { select: { id: true, title: true, resourceType: true } },
					},
				},
			},
		});

		if (!event) throw new NotFoundException(`Event ${eventId} not found.`);

		return toEventDto(event);
	}
}
