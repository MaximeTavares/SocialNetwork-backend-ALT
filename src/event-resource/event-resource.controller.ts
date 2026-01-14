import { Controller, Post, Param, Delete } from "@nestjs/common";
import { EventResourceService } from "./event-resource.service.js";

@Controller("api/v1/events/:eventId/resources")
export class EventResourceController {
	constructor(private readonly eventResourceService: EventResourceService) {}

	@Post(":resourceId")
	link(@Param("eventId") eventId: string, @Param("resourceId") resourceId: string) {
		return this.eventResourceService.create(+eventId, +resourceId);
	}

	@Delete(":resourceId")
	unlink(@Param("eventId") eventId: string, @Param("resourceId") resourceId: string) {
		return this.eventResourceService.remove(+eventId, +resourceId);
	}
}
