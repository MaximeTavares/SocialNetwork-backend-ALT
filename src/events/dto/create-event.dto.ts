export class CreateEventDto {
	title: string; // Titre de l'événement
	description?: string; // Description optionnelle
	startDate: Date; // Format ISO 8601
	endDate: Date; // Format ISO 8601
	location?: string; // Lieu de l'événement
	locationType?: "physical" | "virtual" | "hybrid"; // Type de lieu
	maxParticipants?: number; // Nombre maximum de participants
	isPrivate: boolean; // Visibilité de l'événement
	status: "draft" | "published" | "cancelled"; // Statut de l'événement
	creatorId: number; // ID du créateur
	groupId?: number; // ID du groupe associé
}
