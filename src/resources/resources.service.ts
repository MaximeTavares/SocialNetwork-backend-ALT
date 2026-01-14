import { Injectable } from "@nestjs/common";
import { CreateResourceDto } from "./dto/create-resource.dto.js";
import { UpdateResourceDto } from "./dto/update-resource.dto.js";
import { PrismaService } from "../prisma/prisma.service.js";

@Injectable()
export class ResourcesService {
	constructor(private readonly prisma: PrismaService) {}

	create(createResourceDto: CreateResourceDto) {
		return this.prisma.sharedResource.create({
			data: createResourceDto,
		});
	}

	findAll() {
		return this.prisma.sharedResource.findMany();
	}

	findOne(id: number) {
		return this.prisma.sharedResource.findUnique({ where: { id } });
	}

	update(id: number, updateResourceDto: UpdateResourceDto) {
		return this.prisma.sharedResource.update({ where: { id }, data: updateResourceDto });
	}

	remove(id: number) {
		return this.prisma.sharedResource.delete({ where: { id } });
	}
}
