import { Test, TestingModule } from "@nestjs/testing";
import { EventResourceController } from "./event-resource.controller.js";
import { EventResourceService } from "./event-resource.service.js";

describe("EventResourceController", () => {
	let controller: EventResourceController;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [EventResourceController],
			providers: [EventResourceService],
		}).compile();

		controller = module.get<EventResourceController>(EventResourceController);
	});

	it("should be defined", () => {
		expect(controller).toBeDefined();
	});
});
