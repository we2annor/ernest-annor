import { contactSchema } from "../../src/validation/contact";

describe("contactSchema", () => {
  const validData = {
    name: "Ernest Annor",
    email: "ernest@example.com",
    subject: "Hello there",
    message: "This is a test message that is long enough.",
  };

  describe("valid data", () => {
    it("passes validation with correct data", () => {
      const result = contactSchema.safeParse(validData);
      expect(result.success).toBe(true);
    });

    it("returns the parsed data when valid", () => {
      const result = contactSchema.safeParse(validData);
      if (result.success) {
        expect(result.data).toEqual(validData);
      }
    });
  });

  describe("name validation", () => {
    it("fails when name is too short", () => {
      const result = contactSchema.safeParse({ ...validData, name: "E" });
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.flatten().fieldErrors.name).toContain(
          "Name must be at least 2 characters"
        );
      }
    });

    it("fails when name is missing", () => {
      const { name, ...rest } = validData;
      const result = contactSchema.safeParse(rest);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.flatten().fieldErrors.name).toContain("Required");
      }
    });
  });

  describe("email validation", () => {
    it("fails when email format is invalid", () => {
      const result = contactSchema.safeParse({
        ...validData,
        email: "notanemail",
      });
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.flatten().fieldErrors.email).toContain(
          "Invalid email address"
        );
      }
    });

    it("fails when email is missing", () => {
      const { email, ...rest } = validData;
      const result = contactSchema.safeParse(rest);
      expect(result.success).toBe(false);
    });
  });

  describe("message validation", () => {
    it("fails when message is too short", () => {
      const result = contactSchema.safeParse({
        ...validData,
        message: "Too short",
      });
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.flatten().fieldErrors.message).toContain(
          "Message must be at least 10 characters"
        );
      }
    });
  });

  describe("subject validation", () => {
    it("fails when subject is too short", () => {
      const result = contactSchema.safeParse({
        ...validData,
        subject: "Hi",
      });
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.flatten().fieldErrors.subject).toContain(
          "Subject must be at least 3 characters"
        );
      }
    });
  });
});
