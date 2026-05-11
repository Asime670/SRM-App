import { test, expect } from '@playwright/test';

test('home page loads', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Student Result/i);
});

test('should add a result and redirect to dashboard', async ({ page }) => {
  // Navigate to the correct page
  await page.goto('/add-result');

  // Confirm the form heading is visible
  await expect(page.getByRole('heading', { name: /Add Student Record/i })).toBeVisible();

  // "name" is a <select> dropdown — use selectOption, not fill
  await page.selectOption('select[name="name"]', 'John');

  // "subject" is also a <select> dropdown
  await page.selectOption('select[name="subject"]', 'Maths');

  // "score" is a number <input>
  await page.fill('input[name="score"]', '85');

  // Click the submit button (text is "Submit Result")
  await page.click('button:has-text("Submit Result")');

  // On success the form redirects to /dashboard
  await expect(page).toHaveURL(/\/dashboard/);
});

test('should add results', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Add Result/i);
  await page.fill('input[name="name"]', 'John Doe');
await page.fill('input[name="rollNumber"]', '123456');
await page.fill('input[name="branch"]', 'Computer Science');
await page.fill('input[name="class"]', '10');
await page.fill('input[name="year"]', '2023');
await page.fill('input[name="semester"]', '1');
await page.fill('input[name="cgpa"]', '9.0');
await page.fill('input[name="status"]', 'Pass');
await page.click('button:has-text("Add Result")');
await expect(page).toContainText('Result added successfully');
});

