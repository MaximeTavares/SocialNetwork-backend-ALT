import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateResourceDto } from "./dto/create-resource.dto.js";
import { UpdateResourceDto } from "./dto/update-resource.dto.js";
import { PrismaService } from "../prisma/prisma.service.js";
import { toResourceDto } from "./resource.mapper.js";
import { DeleteResourceDto } from "./dto/delete.resource.dto.js";

@Injectable()
export class ResourcesService {
	constructor(private readonly prisma: PrismaService) {}

	create(createResourceDto: CreateResourceDto) {
		return this.prisma.sharedResource.create({
			data: createResourceDto,
		});
	}

	// Retourne toutes les ressources (non softdelete)
	findAll() {
		return this.prisma.sharedResource.findMany({ where: { deletedAt: null } });
	}

	// Retourne toutes les ressources softdelete
	findAllDeletedResources() {
		return this.prisma.sharedResource.findMany({ where: { deletedAt: { not: null } } });
	}

	async findById(id: number) {
		const resource = await this.prisma.sharedResource.findUnique({
			where: { id },
			include: {
				accesses: true,
				creator: { select: { id: true, firstname: true, lastname: true } },
				parent: true,
			},
		});
		if (!resource) throw new NotFoundException(`Resource ${id} not found.`);

		return toResourceDto(resource);
	}

	update(id: number, updateResourceDto: UpdateResourceDto) {
		return this.prisma.sharedResource.update({ where: { id }, data: updateResourceDto });
	}

	download(resourceId: number, version?: string) {
		return "Not implemented yet";
	}
	/**
	 * Supprime une ressource en hard ou soft delete selon la query qui lui est passée.
	 * Hard pour la suppression de la base de donnée.
	 * Soft pour la rendre invisible aux utilisateurs.
	 *
	 * @param {number} resourceId - ID de la ressource à supprimer.
	 * @param {boolean} forceDelete - True pour hardDelete, false pour softDelete.
	 * @param {DeleteResourceDto} [body] - Donne la possibilité d'indiquer la raison et de notifier l'utilisateur.
	 * @return {*} - Retour de la réussite en json.
	 */
	async remove(resourceId: number, forceDelete: boolean, body?: DeleteResourceDto) {
		const resource = await this.prisma.sharedResource.findUnique({ where: { id: resourceId } });

		if (!resource) throw new NotFoundException(`Resource ${resourceId} not found.`);

		if (forceDelete) {
			//Suppression définitive
			await this.prisma.sharedResource.delete({ where: { id: resourceId } });
		} else {
			//Suppression de la visibilité avec raisons
			await this.prisma.sharedResource.update({
				where: { id: resourceId },
				data: {
					deletedAt: new Date(),
					deletionReason: body?.deletion_reason ?? null,
				},
			});
		}

		//Notification
		if (body?.notify_user) {
			console.log(`Suppression de la resource ${resourceId} validée.`);
		}

		return { success: true };
	}
}
