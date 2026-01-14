import { Module } from "@nestjs/common";

import { NotificationsController } from "./notifications.controller.js";
import { PrismaModule } from "../prisma/prisma.module.js";
import { NotificationsService } from "./notifications.service.js";

@Module({
	imports: [PrismaModule],
	controllers: [NotificationsController],
	providers: [NotificationsService],
})
export class NotificationsModule {}
