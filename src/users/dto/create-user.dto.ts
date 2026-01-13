export class CreateUserDto {
	firstname: string;
	lastname: string;
	email: string;
	password: string;
	birthdate: Date;
	avatar?: string;
	bio?: string;
}
