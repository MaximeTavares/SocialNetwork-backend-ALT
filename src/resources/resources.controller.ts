import { Controller, Get, Post, Body, Param, Delete, Put, Query, Res } from "@nestjs/common";
import { ResourcesService } from "./resources.service.js";
import { CreateResourceDto } from "./dto/create-resource.dto.js";
import { UpdateResourceDto } from "./dto/update-resource.dto.js";
import { DeleteResourceDto } from "./dto/delete.resource.dto.js";

@Controller("api/v1/resources")
export class ResourcesController {
	constructor(private readonly resourcesService: ResourcesService) {}

	@Post()
	create(@Body() createResourceDto: CreateResourceDto) {
		return this.resourcesService.create(createResourceDto);
	}

	@Get()
	findAll() {
		return this.resourcesService.findAll();
	}

	@Get("deleted")
	findAllDeletedResource() {
		return this.resourcesService.findAllDeletedResources();
	}

	@Get(":id")
	findById(@Param("id") id: string) {
		return this.resourcesService.findById(+id);
	}

	@Get(":id/download")
	download(
		@Param("id") resourceId: string,
		@Query("version") version: string,
		@Res() res: Response,
	) {
		return "non implemented yet";
	}

	@Put(":id")
	update(@Param("id") id: string, @Body() updateResourceDto: UpdateResourceDto) {
		return this.resourcesService.update(+id, updateResourceDto);
	}

	@Delete(":id")
	remove(
		@Param("id") id: string,
		@Query("force") force?: string,
		@Body() body?: DeleteResourceDto,
	) {
		const forceDelete = force === "true";
		return this.resourcesService.remove(+id, forceDelete, body);
	}
}
