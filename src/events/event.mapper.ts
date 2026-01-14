export function toEventDto(event: {
	id: number;
	title: string;
	description?: string | null;
	startDate: Date;
	endDate: Date;
	location?: string | null;
	locationType?: string | null;
	maxParticipants?: number | null;
	isPrivate: boolean;
	status: string;
	creator: {
		id: number;
		firstname: string;
		lastname: string;
	};
	rsvps: { status: string }[];
	resources: { resource: any }[];
}) {
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
		rsvps: rsvpCount,
		resources: event.resources.map((r) => r.resource),
	};
}
