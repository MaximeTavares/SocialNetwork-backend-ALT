/* eslint-disable @typescript-eslint/no-unused-vars */
import { Prisma } from "@prisma/client";

type resourcesForMapper = Prisma.SharedResourceGetPayload<{
	include: {
		accesses: true;
		creator: { select: { id: true; firstname: true; lastname: true } };
		parent: true;
	};
}>;

type Metadata = {
	version?: string;
	tags?: string;
};

export function toResourceDto(resource: resourcesForMapper) {
	const {
		creatorId,
		parentId,
		accesses,
		createdAt,
		updatedAt,
		deletedAt,
		deletionReason,
		...rest
	} = resource;

	const metadata = resource.metadata as Metadata;

	if (resource.deletedAt === null) {
		return {
			...rest,
			metadata: {
				version: metadata.version,
				tags: metadata.tags,
			},
			creator: {
				id: resource.creator.id,
				firstname: resource.creator.firstname,
				lastname: resource.creator.lastname,
			},
			parent: resource.parent,
			accessRight: {
				canEdit: null,
				canDelete: null,
				canShare: null,
			},
			versions: {
				version: metadata.version,
				createdAt: resource.createdAt,
				createdBy: {
					id: resource.creator.id,
					firstname: resource.creator.firstname,
					lastname: resource.creator.lastname,
				},
			},
		};
	} else {
		return {
			response: "La resource n'existe plus.",
		};
	}
}
