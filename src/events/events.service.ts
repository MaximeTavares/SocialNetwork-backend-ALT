import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateEventDto } from "./dto/create-event.dto.js";
import { UpdateEventDto } from "./dto/update-event.dto.js";
import { PrismaService } from "../prisma/prisma.service.js";
import { toEventDto } from "./event.mapper.js";

@Injectable()
export class EventsService {
	constructor(private readonly prisma: PrismaService) {}

	create(createEventDto: CreateEventDto) {
		return this.prisma.event.create({
			data: createEventDto,
		});
	}

	findAll() {
		return this.prisma.event.findMany();
	}

	async findById(id: number) {
		const event = await this.prisma.event.findUnique({
			where: { id },
			include: {
				creator: { select: { id: true, firstname: true, lastname: true } },
				resources: {
					include: {
						resource: { select: { id: true, title: true, resourceType: true } },
					},
				},
			},
		});

		if (!event) {
			throw new NotFoundException(`Event with id ${id} not found`);
		}

		return toEventDto(event);
	}

	update(id: number, updateEventDto: UpdateEventDto) {
		return this.prisma.event.update({ where: { id }, data: updateEventDto });
	}

	remove(id: number) {
		return this.prisma.event.delete({ where: { id } });
	}
}
