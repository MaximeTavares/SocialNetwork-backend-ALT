import { IsBoolean, IsOptional, IsString } from "class-validator";

export class DeleteResourceDto {
	@IsOptional()
	@IsString()
	deletion_reason?: string;

	@IsOptional()
	@IsBoolean()
	notify_user?: boolean;
}
