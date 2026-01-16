import { User } from "@prisma/client";

export function toUserDto(user: User) {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { password, createdAt, updatedAt, ...rest } = user;

	return {
		...rest,
	};
}
