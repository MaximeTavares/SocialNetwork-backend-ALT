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
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { creatorId, parentId, accesses, createdAt, updatedAt, ...rest } = resource;

	const metadata = resource.metadata as Metadata;

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
}
