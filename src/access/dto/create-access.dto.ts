import { Type } from "class-transformer";
import { IsEnum, IsNumber, IsOptional } from "class-validator";

export enum AccessType {
	VIEW = "view",
	EDIT = "edit",
	ADMIN = "admin",
}

export class CreateAccessDto {
	@IsNumber()
	userId: number;

	@IsEnum(AccessType)
	accessType: "view" | "edit" | "admin";

	@IsOptional()
	@Type(() => Date)
	expiresAt?: Date;

	@IsNumber()
	grantedById: number;
}
