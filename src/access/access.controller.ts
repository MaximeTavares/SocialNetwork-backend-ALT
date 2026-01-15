import { Controller, Get, Post, Body, Patch, Param, Delete } from "@nestjs/common";
import { AccessService } from "./access.service.js";
import { CreateAccessDto } from "./dto/create-access.dto.js";
import { UpdateAccessDto } from "./dto/update-access.dto.js";

@Controller("api/v1/resources")
export class AccessController {
	constructor(private readonly accessService: AccessService) {}

	@Post(":resourceId/access")
	create(@Param("resourceId") resourceId: string, @Body() createAccessDto: CreateAccessDto) {
		return this.accessService.createAccess(+resourceId, createAccessDto);
	}

	@Get(":id")
	findOne(@Param("id") id: string) {
		return this.accessService.findOne(+id);
	}

	@Patch(":id")
	update(@Param("id") id: string, @Body() updateAccessDto: UpdateAccessDto) {
		return this.accessService.update(+id, updateAccessDto);
	}

	@Delete(":id")
	remove(@Param("id") id: string) {
		return this.accessService.remove(+id);
	}
}
