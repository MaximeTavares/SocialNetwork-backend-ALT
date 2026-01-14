export class CreateEventRsvpDto {
	status: "attending" | "maybe" | "declined";
	notes?: string;
	userId: number;
}
