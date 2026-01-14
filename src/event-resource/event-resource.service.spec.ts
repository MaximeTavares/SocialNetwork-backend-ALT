import { Test, TestingModule } from "@nestjs/testing";
import { EventResourceService } from "./event-resource.service.js";

describe("EventResourceService", () => {
	let service: EventResourceService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [EventResourceService],
		}).compile();

		service = module.get<EventResourceService>(EventResourceService);
	});

	it("should be defined", () => {
		expect(service).toBeDefined();
	});
});
