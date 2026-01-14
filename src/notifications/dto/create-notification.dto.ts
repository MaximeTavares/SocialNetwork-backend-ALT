import { NotificationPriority, NotificationType } from "@prisma/client";

export class CreateNotificationDto {
	// Type de notification - détermine le contexte et le format
	type: NotificationType;

	// Informations principales
	title: string; // Titre court et descriptif
	content: string; // Contenu détaillé du message
	priority: NotificationPriority; // Niveau de priorité

	// Destinataires et relations
	recipientId: number; // Identifiant du destinataire
	senderId?: number; // Identifiant de l'expéditeur (optionnel)
	relationId?: number; // Identifiant de l'objet lié (optionnel)

	// Configuration
	expiresAt?: string; // Date d'expiration au format ISO 8601
	actionUrl?: string; // Lien d'action directe

	// Métadonnées contextuelles
	metadata?: {
		eventId?: number; // ID de l'événement concerné
		resourceId?: number; // ID de la ressource concernée
		changeType?: string; // Type de changement
		additionalInfo?: Record<string, any>; // Informations supplémentaires
	};
}
