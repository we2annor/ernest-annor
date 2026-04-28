import { test, expect } from "@playwright/test";

test.describe("Contact Form", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/contact");
  });

  test("contact page loads correctly", async ({ page }) => {
    await expect(page.getByText("Let's Talk")).toBeVisible();
    await expect(page.getByPlaceholder("Ernest Annor")).toBeVisible();
    await expect(page.getByPlaceholder("you@example.com")).toBeVisible();
    await expect(
      page.getByPlaceholder("Senior Engineer opportunity at...")
    ).toBeVisible();
    await expect(
      page.getByPlaceholder("Tell me about the role or project...")
    ).toBeVisible();
  });

  test("shows validation errors for empty form", async ({ page }) => {
    await page.getByRole("button", { name: "Send Message" }).click();
    await expect(
      page.getByText("Name must be at least 2 characters")
    ).toBeVisible();
    await expect(
      page.getByText("Please enter a valid email address")
    ).toBeVisible();
  });

  test("shows validation error for invalid email", async ({ page }) => {
    await page.getByPlaceholder("Ernest Annor").fill("Ernest Annor");
    await page.getByPlaceholder("you@example.com").fill("notanemail");
    await page.getByRole("button", { name: "Send Message" }).click();
    await expect(
      page.getByText("Please enter a valid email address")
    ).toBeVisible();
  });

  test("clears error when user starts typing", async ({ page }) => {
    await page.getByRole("button", { name: "Send Message" }).click();
    await expect(
      page.getByText("Name must be at least 2 characters")
    ).toBeVisible();
    await page.getByPlaceholder("Ernest Annor").fill("Er");
    await expect(
      page.getByText("Name must be at least 2 characters")
    ).not.toBeVisible();
  });
});
