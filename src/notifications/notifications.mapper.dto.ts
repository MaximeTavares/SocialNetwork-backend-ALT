import { Notification } from "@prisma/client";
import { NotificationDto } from "./dto/notifications.dto.js";

export function toNotificationDto(notification: Notification): NotificationDto {
	return {
		id: notification.id,
		type: notification.type,
		title: notification.title,
		content: notification.content,
		priority: notification.priority.toLowerCase() as "LOW" | "MEDIUM" | "HIGH",
		recipient_id: notification.recipientId,
		sender_id: notification.senderId,
		read: notification.read,
		created_at: notification.createdAt,
	};
}
