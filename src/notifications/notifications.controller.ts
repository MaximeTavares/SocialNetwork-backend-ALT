import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from "@nestjs/common";
import { NotificationsService } from "./notifications.service.js";
import { CreateNotificationDto } from "./dto/create-notification.dto.js";
import { UpdateNotificationDto } from "./dto/update-notification.dto.js";

@Controller("api/v1/notifications")
export class NotificationsController {
	constructor(private readonly notificationsService: NotificationsService) {}

	@Post()
	create(@Body() createNotificationDto: CreateNotificationDto) {
		return this.notificationsService.create(createNotificationDto);
	}

	@Get()
	findAll() {
		return this.notificationsService.findAll();
	}

	@Get(":id")
	findById(@Param("id") id: string) {
		return this.notificationsService.findById(+id);
	}

	@Patch(":id")
	update(@Param("id") id: string, @Body() updateNotificationDto: UpdateNotificationDto) {
		return this.notificationsService.update(+id, updateNotificationDto);
	}

	@Put(":id/read")
	markAsRead(@Param("id") id: string) {
		return this.notificationsService.markAsRead(+id);
	}

	@Delete(":id")
	remove(@Param("id") id: string) {
		return this.notificationsService.remove(+id);
	}
}
