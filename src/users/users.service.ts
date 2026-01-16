import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto.js";
import { UpdateUserDto } from "./dto/update-user.dto.js";
import { PrismaService } from "../prisma/prisma.service.js";
import { toUserDto } from "./user.mapper.js";

@Injectable()
export class UsersService {
	constructor(private readonly prisma: PrismaService) {}
	async create(createUserDto: CreateUserDto) {
		const user = await this.prisma.user.create({
			data: createUserDto,
		});
		return toUserDto(user);
	}

	async findAll() {
		const users = await this.prisma.user.findMany();

		return users.map(toUserDto);
	}

	async findOne(id: number) {
		const user = await this.prisma.user.findUnique({ where: { id } });

		if (!user) throw new NotFoundException(`User with id : ${id} not found.`);

		return toUserDto(user);
	}

	update(id: number, updateUserDto: UpdateUserDto) {
		return this.prisma.user.update({ where: { id }, data: updateUserDto });
	}

	remove(id: number) {
		return this.prisma.user.delete({ where: { id } });
	}
}
