import { Module } from "@nestjs/common";
import { EventRsvpService } from "./event-rsvp.service.js";
import { EventRsvpController } from "./event-rsvp.controller.js";
import { PrismaModule } from "../prisma/prisma.module.js";

@Module({
	imports: [PrismaModule],
	controllers: [EventRsvpController],
	providers: [EventRsvpService],
})
export class EventRsvpModule {}
