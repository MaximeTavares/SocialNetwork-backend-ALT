import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateAccessDto } from "./dto/create-access.dto.js";
import { UpdateAccessDto } from "./dto/update-access.dto.js";
import { PrismaService } from "../prisma/prisma.service.js";

@Injectable()
export class AccessService {
	constructor(private readonly prisma: PrismaService) {}

	async createAccess(resourceId: number, createAccessDto: CreateAccessDto) {
		const resource = await this.prisma.sharedResource.findUnique({ where: { id: resourceId } });
		if (!resource) {
			throw new NotFoundException(`Resource ${resourceId} not found`);
		}
		const access = await this.prisma.resourceAccess.create({
			data: {
				resourceId: resourceId,
				...createAccessDto,
				grantedAt: new Date(),
			},
		});
		return access;
	}

	findOne(id: number) {
		return `This action returns a #${id} access`;
	}

	update(id: number, updateAccessDto: UpdateAccessDto) {
		return `This action updates a #${id} access`;
	}

	remove(id: number) {
		return `This action removes a #${id} access`;
	}
}
