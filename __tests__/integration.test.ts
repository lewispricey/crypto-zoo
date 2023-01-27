import request from "supertest";
import { app } from "../src/index";

describe("/", () => {
  test("200 - Should return a body with the key of message and the value of server online", async () => {
    const { status, body } = await request(app).get("/");
    expect(status).toBe(200);
    expect(body).toEqual({ msg: "server online!" });
  });
});
