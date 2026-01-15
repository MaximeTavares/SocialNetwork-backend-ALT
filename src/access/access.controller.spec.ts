import { Test, TestingModule } from "@nestjs/testing";
import { AccessController } from "./access.controller.js";
import { AccessService } from "./access.service.js";

describe("AccessController", () => {
	let controller: AccessController;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [AccessController],
			providers: [AccessService],
		}).compile();

		controller = module.get<AccessController>(AccessController);
	});

	it("should be defined", () => {
		expect(controller).toBeDefined();
	});
});
