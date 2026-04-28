import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
  test("home page loads correctly", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/Ernest Annor/);
    await expect(page.getByText("Hi, my name is")).toBeVisible();
    await expect(
      page.getByText("Ernest", { exact: false }).first()
    ).toBeVisible();
  });

  test("navigation links work correctly", async ({ page }) => {
    await page.goto("/");

    // Click About
    await page.getByRole("link", { name: "About" }).first().click();
    await expect(page).toHaveURL("/about");
    await page.waitForLoadState("networkidle");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible({
      timeout: 10000,
    });
  });

  test("navigates to experience page", async ({ page }) => {
    await page.goto("/experience");
    await expect(page.getByText("Work Experience")).toBeVisible();
    await expect(page.getByText("Sky", { exact: true }).first()).toBeVisible();
  });

  test("navigates to projects page", async ({ page }) => {
    await page.goto("/projects");
    await expect(page.getByText("Featured Projects")).toBeVisible();
  });

  test("navigates to blog page", async ({ page }) => {
    await page.goto("/blog");
    await expect(page.getByText("Thoughts & Articles")).toBeVisible();
  });

  test("navigates to CV page", async ({ page }) => {
    await page.goto("/cv");
    await expect(page.getByText("Ernest Wiafe-Annor")).toBeVisible();
  });

  test("404 page shows for unknown routes", async ({ page }) => {
    await page.goto("/this-page-does-not-exist");
    await expect(page.getByText("Page not Found")).toBeVisible();
    await expect(
      page.getByRole("link", { name: "Back to Home" })
    ).toBeVisible();
  });
});
