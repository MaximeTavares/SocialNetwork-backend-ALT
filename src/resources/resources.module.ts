import { Module } from "@nestjs/common";
import { ResourcesController } from "./resources.controller.js";
import { ResourcesService } from "./resources.service.js";
import { PrismaModule } from "../prisma/prisma.module.js";

@Module({
	imports: [PrismaModule],
	controllers: [ResourcesController],
	providers: [ResourcesService],
})
export class ResourcesModule {}
