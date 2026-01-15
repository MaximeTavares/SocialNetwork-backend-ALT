export class EventDto {
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
	creator: CreatorDto;
	rsvps: RsvpsDto;
	resources: ResourceDto[];
}

export class CreatorDto {
	id: number;
	firstname: string;
	lastname: string;
}

export class ResourceDto {
	id: number;
	title: string;
	resourceType: string;
}

export class RsvpsDto {
	attending: number;
	maybe: number;
	declined: number;
}
