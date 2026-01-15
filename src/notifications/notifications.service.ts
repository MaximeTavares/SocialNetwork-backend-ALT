import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateNotificationDto } from "./dto/create-notification.dto.js";
import { UpdateNotificationDto } from "./dto/update-notification.dto.js";
import { PrismaService } from "../prisma/prisma.service.js";

import { toNotificationDto } from "./notifications.mapper.dto.js";

@Injectable()
export class NotificationsService {
	constructor(private readonly prisma: PrismaService) {}

	async create(createNotification: CreateNotificationDto) {
		const notification = await this.prisma.notification.create({
			data: createNotification,
		});

		return toNotificationDto(notification);
	}

	findAll() {
		return this.prisma.notification.findMany();
	}

	async findById(id: number) {
		const notification = await this.prisma.notification.findUnique({ where: { id } });

		if (!notification) throw new NotFoundException(`Notification ${id} not found.`);

		return toNotificationDto(notification);
	}

	update(id: number, updateNotificationDto: UpdateNotificationDto) {
		return this.prisma.notification.update({
			where: { id },
			data: updateNotificationDto,
		});
	}

	async markAsRead(id: number) {
		const notification = await this.prisma.notification.findUnique({ where: { id } });
		if (!notification) throw new NotFoundException(`Notification ${id} not found.`);

		if (notification.read) {
			return {
				id: notification.id,
				read: notification.read,
				read_at: notification.readAt,
				updated_at: notification.updatedAt,
			};
		} else {
			const updated = await this.prisma.notification.update({
				where: { id },
				data: {
					read: true,
					readAt: notification.readAt ?? new Date(),
				},
			});

			return {
				id: updated.id,
				read: updated.read,
				read_at: updated.readAt,
				updated_at: updated.updatedAt,
			};
		}
	}

	remove(id: number) {
		return this.prisma.notification.delete({ where: { id } });
	}
}
