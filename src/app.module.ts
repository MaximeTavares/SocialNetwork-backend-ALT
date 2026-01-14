import { Module } from "@nestjs/common";
import { AppController } from "./app.controller.js";
import { AppService } from "./app.service.js";
import { PrismaModule } from "./prisma/prisma.module.js";
import { UsersModule } from "./users/users.module.js";
import { EventsModule } from "./events/events.module.js";
import { NotificationsModule } from "./notifications/notifications.module.js";
import { ResourcesModule } from "./resources/resources.module.js";
import { EventResourceModule } from "./event-resource/event-resource.module.js";

@Module({
	imports: [
		PrismaModule,
		UsersModule,
		EventsModule,
		NotificationsModule,
		ResourcesModule,
		EventResourceModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
