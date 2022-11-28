"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const events_controller_1 = require("../events.controller");
const supertest_1 = __importDefault(require("supertest"));
const express_1 = __importDefault(require("express"));
const event_routes_1 = __importDefault(require("../../config/routes/event.routes"));
let server;
beforeEach(() => {
    const app = (0, express_1.default)();
    app.use((0, event_routes_1.default)(express_1.default.Router()));
    server = app.listen();
});
afterEach(() => {
    server.close();
});
describe("create()", () => {
    const res = {
        json: jest.fn(),
    };
    const req = jest.fn();
    it("does stuff", () => {
        (0, events_controller_1.create)(req, res);
        expect(res.json).toHaveBeenCalledWith("hello, world!");
    });
    it("uses supertest", async () => {
        const response = await (0, supertest_1.default)(server).get("/events");
        expect(response.status).toEqual(200);
    });
});
