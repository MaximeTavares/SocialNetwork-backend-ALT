import { Module } from "@nestjs/common";
import { EventResourceService } from "./event-resource.service.js";
import { EventResourceController } from "./event-resource.controller.js";
import { PrismaModule } from "../prisma/prisma.module.js";

@Module({
	imports: [PrismaModule],
	controllers: [EventResourceController],
	providers: [EventResourceService],
})
export class EventResourceModule {}
