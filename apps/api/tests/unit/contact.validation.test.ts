import { contactSchema } from "../../src/validation/contact";

describe("contactSchema", () => {
  const validData = {
    name: "Ernest Annor",
    email: "ernest@example.com",
    subject: "Hello there",
    message: "This is a test message that is long enough",
  };
});
