import { Injectable } from "@nestjs/common";
import { CreateNotificationDto } from "./dto/create-notification.dto.js";
import { UpdateNotificationDto } from "./dto/update-notification.dto.js";
import { PrismaService } from "../prisma/prisma.service.js";

@Injectable()
export class NotificationsService {
	constructor(private readonly prisma: PrismaService) {}

	create(createNotificationDto: CreateNotificationDto) {
		return this.prisma.notification.create({
			data: createNotificationDto,
		});
	}

	findAll() {
		return this.prisma.notification.findMany();
	}

	findOne(id: number) {
		return this.prisma.notification.findUnique({ where: { id } });
	}

	update(id: number, updateNotificationDto: UpdateNotificationDto) {
		return this.prisma.notification.update({
			where: { id },
			data: updateNotificationDto,
		});
	}

	remove(id: number) {
		return this.prisma.notification.delete({ where: { id } });
	}
}
