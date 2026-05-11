# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: home.spec.ts >> should add results
- Location: e2e\home.spec.ts:31:5

# Error details

```
Error: expect(page).toHaveTitle(expected) failed

Expected pattern: /Add Result/i
Received string:  "Student Result Management App"
Timeout: 5000ms

Call log:
  - Expect "toHaveTitle" with timeout 5000ms
    9 × unexpected value "Student Result Management App"

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - main [ref=e2]:
    - generic:
      - img
    - generic:
      - img
    - generic:
      - img
    - generic:
      - img
    - generic [ref=e4]:
      - generic [ref=e5]:
        - heading "Student Result Management App" [level=1] [ref=e6]:
          - text: Student Result
          - text: Management App
        - paragraph [ref=e7]: The ultimate platform for tracking student performance, managing records, and visualizing academic statistics with ease and precision.
        - link "Go to Login" [ref=e9] [cursor=pointer]:
          - /url: /login
      - generic [ref=e11]:
        - img "Students studying" [ref=e12]
        - paragraph [ref=e14]: The ultimate platform for tracking student performance, and comment performance, managing records, and visualizing academic statistics with ease and precision.
    - generic [ref=e15]:
      - generic [ref=e16]:
        - generic [ref=e17]: "N"
        - generic [ref=e18]:
          - generic [ref=e19] [cursor=pointer]:
            - img [ref=e20]
            - generic [ref=e22]: Contact Support
          - generic [ref=e23] [cursor=pointer]:
            - img [ref=e24]
            - generic [ref=e26]: Latest Updates
      - img [ref=e28]
  - button "Open Next.js Dev Tools" [ref=e35] [cursor=pointer]:
    - img [ref=e36]
  - alert [ref=e39]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('home page loads', async ({ page }) => {
  4  |   await page.goto('/');
  5  |   await expect(page).toHaveTitle(/Student Result/i);
  6  | });
  7  | 
  8  | test('should add a result and redirect to dashboard', async ({ page }) => {
  9  |   // Navigate to the correct page
  10 |   await page.goto('/add-result');
  11 | 
  12 |   // Confirm the form heading is visible
  13 |   await expect(page.getByRole('heading', { name: /Add Student Record/i })).toBeVisible();
  14 | 
  15 |   // "name" is a <select> dropdown — use selectOption, not fill
  16 |   await page.selectOption('select[name="name"]', 'John');
  17 | 
  18 |   // "subject" is also a <select> dropdown
  19 |   await page.selectOption('select[name="subject"]', 'Maths');
  20 | 
  21 |   // "score" is a number <input>
  22 |   await page.fill('input[name="score"]', '85');
  23 | 
  24 |   // Click the submit button (text is "Submit Result")
  25 |   await page.click('button:has-text("Submit Result")');
  26 | 
  27 |   // On success the form redirects to /dashboard
  28 |   await expect(page).toHaveURL(/\/dashboard/);
  29 | });
  30 | 
  31 | test('should add results', async ({ page }) => {
  32 |   await page.goto('/');
> 33 |   await expect(page).toHaveTitle(/Add Result/i);
     |                      ^ Error: expect(page).toHaveTitle(expected) failed
  34 |   await page.fill('input[name="name"]', 'John Doe');
  35 | await page.fill('input[name="rollNumber"]', '123456');
  36 | await page.fill('input[name="branch"]', 'Computer Science');
  37 | await page.fill('input[name="class"]', '10');
  38 | await page.fill('input[name="year"]', '2023');
  39 | await page.fill('input[name="semester"]', '1');
  40 | await page.fill('input[name="cgpa"]', '9.0');
  41 | await page.fill('input[name="status"]', 'Pass');
  42 | await page.click('button:has-text("Add Result")');
  43 | await expect(page).toContainText('Result added successfully');
  44 | });
  45 | 
  46 | 
```