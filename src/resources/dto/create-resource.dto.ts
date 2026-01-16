import {
	IsArray,
	IsBoolean,
	IsEnum,
	IsNumber,
	IsObject,
	IsOptional,
	IsString,
} from "class-validator";

export enum ResourceType {
	DOCUMENT = "document",
	IMAGE = "image",
	VIDEO = "video",
	PRESENTATION = "presentation",
}

export class MetadataDto {
	@IsOptional()
	@IsString()
	version?: string;

	@IsOptional()
	@IsArray()
	@IsString({ each: true })
	tags?: string[];

	@IsOptional()
	@IsObject()
	custom_fields?: Record<string, any>;
}

export class CreateResourceDto {
	@IsString()
	title: string; // Titre de la ressource

	@IsOptional()
	@IsString()
	description?: string; // Description

	@IsEnum(ResourceType)
	resourceType: ResourceType; // Type

	@IsString()
	path: string; // Chemin du fichier

	@IsString()
	mimeType: string; // Type MIME

	@IsNumber()
	size: number; // Taille en octets

	@IsBoolean()
	isPublic: boolean; // Visibilité

	@IsNumber()
	creatorId: number; // ID du créateur

	@IsOptional()
	@IsNumber()
	parentId?: number; // ID du parent (optionnel)

	@IsOptional()
	@IsObject()
	metadata?: {
		version?: string;
		tags?: string[];
		custom_fields?: Record<string, any>;
	};

	/* @IsOptional()
	@ValidateNested()
	@Type(() => MetadataDto)
	metadata?: MetadataDto; */
}
