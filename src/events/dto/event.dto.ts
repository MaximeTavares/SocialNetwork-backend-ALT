export class EventDto {
	id: string;
	title: string;
	description: string;
	startDate: Date;
	endDate: Date;
	location?: string;
	locationType?: string;
	maxParticipants?: number;
	isPrivate: boolean;
	status: string;
	creator: CreatorDto;
	resources: ResourceDto[];
}

export class CreatorDto {
	firstname: string;
	lastname: string;
}

export class ResourceDto {
	id: number;
	title: string;
	resourceType: string;
}
