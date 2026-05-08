import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import Home from './page';

test('Home page renders correctly', () => {
  render(<Home />);
  
  // Check if the main title is present
  const title = screen.getByText(/Student Result/i);
  expect(title).toBeDefined();
  
  // Check if the login link is present
  const loginLink = screen.getByRole('link', { name: /go to login/i });
  expect(loginLink).toBeDefined();
  expect(loginLink.getAttribute('href')).toBe('/login');
});
