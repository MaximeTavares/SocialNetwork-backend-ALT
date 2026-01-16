import { Type } from "class-transformer";
import { IsDate, IsEmail, IsOptional, IsString } from "class-validator";

export class CreateUserDto {
	@IsString()
	firstname: string;

	@IsString()
	lastname: string;

	@IsEmail()
	email: string;

	@IsString()
	password: string;

	@Type(() => Date)
	@IsDate()
	birthdate: Date;

	@IsOptional()
	@IsString()
	avatar?: string;

	@IsOptional()
	@IsString()
	bio?: string;
}


//test commit GitLab