import { NotificationPriority, NotificationType } from "@prisma/client";

export class NotificationDto {
	id: number;
	type: NotificationType;
	title: string;
	content: string;
	priority: NotificationPriority;
	recipient_id: number;
	sender_id: number | null;
	read: boolean;
	created_at: Date;
}
