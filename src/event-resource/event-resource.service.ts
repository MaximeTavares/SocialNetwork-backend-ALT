import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service.js";

@Injectable()
export class EventResourceService {
	constructor(private readonly prisma: PrismaService) {}

	create(eventId: number, resourceId: number) {
		return this.prisma.eventResource.create({ data: { eventId, resourceId } });
	}

	findByEvent(eventId: number) {
		return this.prisma.eventResource.findMany({
			where: { eventId },
			include: { resource: true },
		});
	}

	remove(eventId: number, resourceId: number) {
		return this.prisma.eventResource.deleteMany({
			where: {
				eventId,
				resourceId,
			},
		});
	}
}
