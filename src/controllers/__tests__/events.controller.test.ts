import request from "supertest";
import express from "express";
import { Server } from "http";
import routes from "../../config/routes/event.routes";

let server: Server;

beforeEach(() => {
  const app = express();
  app.use(routes(express.Router()));
  server = app.listen();
});

afterEach(() => {
  server.close();
});

describe("index()", () => {
  it("responds with 'Hello World'", async () => {
    const response = await request(server).get("/");
    expect(response.body).toEqual({ foo: "changed" });
  });
});
