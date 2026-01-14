import { EventDto } from "./dto/event.dto.js";

export function toEventDto(event: any): EventDto {
	return {
		id: event.id,
		title: event.title,
		description: event.description,
		startDate: event.startDate,
		endDate: event.endDate,
		location: event.location,
		locationType: event.locationType,
		maxParticipants: event.maxParticipants,
		isPrivate: event.isPrivate,
		status: event.status,
		creator: event.creator,
		resources: event.resources.map((r) => r.resource),
	};
}
