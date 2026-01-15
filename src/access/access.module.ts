import { Module } from "@nestjs/common";
import { AccessService } from "./access.service.js";
import { AccessController } from "./access.controller.js";
import { PrismaModule } from "../prisma/prisma.module.js";

@Module({
	imports: [PrismaModule],
	controllers: [AccessController],
	providers: [AccessService],
})
export class AccessModule {}
