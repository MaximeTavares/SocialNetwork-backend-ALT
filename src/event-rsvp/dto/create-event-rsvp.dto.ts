import { IsEnum, IsInt, IsOptional, IsString } from "class-validator";

export enum RsvpStatus {
	ATTENTING = "attending",
	MAYBE = "maybe",
	DECLINED = "declined",
}

export class CreateEventRsvpDto {
	@IsEnum(RsvpStatus)
	status: RsvpStatus;

	@IsOptional()
	@IsString()
	notes?: string;

	@IsInt()
	userId: number;
}
