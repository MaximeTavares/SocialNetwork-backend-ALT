import { Test, TestingModule } from "@nestjs/testing";
import { EventRsvpController } from "./event-rsvp.controller.js";
import { EventRsvpService } from "./event-rsvp.service.js";

describe("EventRsvpController", () => {
	let controller: EventRsvpController;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [EventRsvpController],
			providers: [EventRsvpService],
		}).compile();

		controller = module.get<EventRsvpController>(EventRsvpController);
	});

	it("should be defined", () => {
		expect(controller).toBeDefined();
	});
});
