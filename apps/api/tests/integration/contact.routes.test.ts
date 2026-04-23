import request from "supertest";
import app from "../../src/app";
import { Contact } from "../../src/models/Contact";
import * as emailService from "../../src/services/emailService";

// Mock the Contact model and email service
jest.mock("../../src/models/Contact");
jest.mock("../../src/services/emailService");

const mockContactCreate = Contact.create as jest.MockedFunction<
  typeof Contact.create
>;
const mockSendEmail = emailService.sendContactEmail as jest.MockedFunction<
  typeof emailService.sendContactEmail
>;
describe("POST /api/contact", () => {
  const validPayload = {
    name: "Ernest Annor",
    email: "ernest@example.com",
    subject: "Test subject",
    message: "This is a test message that is long enough.",
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("valid requests", () => {
    it("returns 200 and success message for valid payload", async () => {
      mockContactCreate.mockResolvedValueOnce({} as any);
      mockSendEmail.mockResolvedValueOnce(undefined);

      const response = await request(app)
        .post("/api/contact")
        .send(validPayload);

      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.message).toBe("Message sent successfully");
    });

    it("saves the contact to the database", async () => {
      mockContactCreate.mockResolvedValueOnce({} as any);
      mockSendEmail.mockResolvedValueOnce(undefined);

      await request(app).post("/api/contact").send(validPayload);

      expect(mockContactCreate).toHaveBeenCalledWith(validPayload);
    });

    it("sends an email with the contact data", async () => {
      mockContactCreate.mockResolvedValueOnce({} as any);
      mockSendEmail.mockResolvedValueOnce(undefined);

      await request(app).post("/api/contact").send(validPayload);

      expect(mockSendEmail).toHaveBeenCalledWith(validPayload);
    });
  });

  describe("invalid requests", () => {
    it("returns 400 for missing fields", async () => {
      const response = await request(app)
        .post("/api/contact")
        .send({ name: "Ernest" });

      expect(response.status).toBe(400);
      expect(response.body.error).toBe("validation failed");
      expect(response.body.details).toBeDefined();
    });

    it("returns 400 for invalid email", async () => {
      const response = await request(app)
        .post("/api/contact")
        .send({ ...validPayload, email: "notanemail" });

      expect(response.status).toBe(400);
      expect(response.body.details.email).toBeDefined();
    });

    it("does not call database or email when validation fails", async () => {
      await request(app).post("/api/contact").send({ name: "E" });

      expect(mockContactCreate).not.toHaveBeenCalled();
      expect(mockSendEmail).not.toHaveBeenCalled();
    });
  });

  describe("error handling", () => {
    it("returns 200 even if email fails", async () => {
      mockContactCreate.mockResolvedValueOnce({} as any);
      mockSendEmail.mockRejectedValueOnce(new Error("Email service down"));

      const response = await request(app)
        .post("/api/contact")
        .send(validPayload);

      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
    });

    it("returns 500 if database save fails", async () => {
      mockContactCreate.mockRejectedValueOnce(new Error("DB error"));

      const response = await request(app)
        .post("/api/contact")
        .send(validPayload);

      expect(response.status).toBe(500);
    });
  });
});
