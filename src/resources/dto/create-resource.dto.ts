export class CreateResourceDto {
	title: string; // Titre de la ressource
	description?: string; // Description
	resourceType: "document" | "image" | "video" | "presentation"; // Type
	path: string; // Chemin du fichier
	mimeType: string; // Type MIME
	size: number; // Taille en octets
	isPublic: boolean; // Visibilité
	creatorId: number; // ID du créateur
	parentId?: number; // ID du parent (optionnel)
	metadata?: {
		// Métadonnées
		version?: string;
		tags?: string[];
		custom_fields?: Record<string, any>;
	};
}
