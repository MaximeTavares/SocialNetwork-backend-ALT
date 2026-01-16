import { Prisma } from "@prisma/client";
import { EventDto } from "./dto/event.dto.js";

type eventsForMapper = Prisma.EventGetPayload<{
	include: {
		creator: { select: { id: true; firstname: true; lastname: true } };
		rsvps: { select: { status: true } };
		resources: {
			include: {
				resource: { select: { id: true; title: true; resourceType: true } };
			};
		};
	};
}>;

export function toEventDto(event: eventsForMapper): EventDto {
	//* Voir pour utiliser les class-validator pout se passer du destructuring
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { createdAt, updatedAt, creatorId, groupId, ...rest } = event;
	//Transforme les rsvps en compteur
	const rsvpCount = {
		attending: 0,
		maybe: 0,
		declined: 0,
	};

	for (const rsvp of event.rsvps) {
		if (rsvp.status === "attending") rsvpCount.attending++;
		else if (rsvp.status === "maybe") rsvpCount.maybe++;
		else if (rsvp.status === "declined") rsvpCount.declined++;
	}

	return {
		...rest,
		rsvps: rsvpCount,
		//Flatten creator
		creator: {
			id: event.creator.id,
			firstname: event.creator.firstname,
			lastname: event.creator.lastname,
		},
		//Flatten resources
		resources: event.resources.map((r) => r.resource),
	};
}
