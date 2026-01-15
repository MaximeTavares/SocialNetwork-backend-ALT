export class CreateAccessDto {
	userId: number;
	accessType: "view" | "edit" | "admin";
	expiresAt?: Date;
	grantedById: number;
}
