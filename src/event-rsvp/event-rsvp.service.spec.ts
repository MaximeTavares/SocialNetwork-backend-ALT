import { Test, TestingModule } from "@nestjs/testing";
import { EventRsvpService } from "./event-rsvp.service.js";

describe("EventRsvpService", () => {
	let service: EventRsvpService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [EventRsvpService],
		}).compile();

		service = module.get<EventRsvpService>(EventRsvpService);
	});

	it("should be defined", () => {
		expect(service).toBeDefined();
	});
});
