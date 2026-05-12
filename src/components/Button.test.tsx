import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Button from './Button'; // ✅ correct: same directory

// ─── Rendering ────────────────────────────────────────────────────────────────

describe('Button – rendering', () => {
  it('renders children text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: /click me/i })).toBeDefined();
  });

  it('renders with default type="button"', () => {
    render(<Button>Submit</Button>);
    expect(screen.getByRole('button').getAttribute('type')).toBe('button');
  });

  it('renders with type="submit" when specified', () => {
    render(<Button type="submit">Submit</Button>);
    expect(screen.getByRole('button').getAttribute('type')).toBe('submit');
  });

  it('renders a left icon alongside text', () => {
    render(<Button leftIcon={<span data-testid="left-icon">←</span>}>Go</Button>);
    expect(screen.getByTestId('left-icon')).toBeDefined();
    expect(screen.getByText('Go')).toBeDefined();
  });

  it('renders a right icon alongside text', () => {
    render(<Button rightIcon={<span data-testid="right-icon">→</span>}>Next</Button>);
    expect(screen.getByTestId('right-icon')).toBeDefined();
  });
});

// ─── Variants ─────────────────────────────────────────────────────────────────

describe('Button – variants', () => {
  const variants = ['primary', 'secondary', 'danger', 'ghost'] as const;

  variants.forEach((variant) => {
    it(`applies the "${variant}" variant class`, () => {
      render(<Button variant={variant}>Label</Button>);
      const btn = screen.getByRole('button');
      expect(btn).toBeDefined();
    });
  });
});

// ─── Sizes ────────────────────────────────────────────────────────────────────

describe('Button – sizes', () => {
  const sizes = ['sm', 'md', 'lg'] as const;

  sizes.forEach((size) => {
    it(`renders with size="${size}"`, () => {
      render(<Button size={size}>Label</Button>);
      expect(screen.getByRole('button')).toBeDefined();
    });
  });
});

// ─── Disabled state ───────────────────────────────────────────────────────────

describe('Button – disabled', () => {
  it('is disabled when the disabled prop is passed', () => {
    render(<Button disabled>Can&apos;t click</Button>);
    const btn = screen.getByRole('button') as HTMLButtonElement;
    expect(btn.disabled).toBe(true);
  });

  it('does not fire onClick when disabled', () => {
    const handler = vi.fn();
    render(<Button disabled onClick={handler}>Can&apos;t click</Button>);
    fireEvent.click(screen.getByRole('button'));
    expect(handler).not.toHaveBeenCalled();
  });
});

// ─── Loading state ────────────────────────────────────────────────────────────

describe('Button – loading', () => {
  it('shows a loading spinner when isLoading is true', () => {
    render(<Button isLoading>Save</Button>);
    expect(screen.getByRole('status')).toBeDefined();
  });

  it('hides left icon while loading', () => {
    render(
      <Button isLoading leftIcon={<span data-testid="left-icon">←</span>}>
        Save
      </Button>,
    );
    expect(screen.queryByTestId('left-icon')).toBeNull();
  });

  it('disables the button while loading', () => {
    render(<Button isLoading>Saving…</Button>);
    const btn = screen.getByRole('button') as HTMLButtonElement;
    expect(btn.disabled).toBe(true);
  });

  it('sets aria-busy="true" while loading', () => {
    render(<Button isLoading>Saving…</Button>);
    expect(screen.getByRole('button').getAttribute('aria-busy')).toBe('true');
  });
});

// ─── Interactions ─────────────────────────────────────────────────────────────

describe('Button – interactions', () => {
  it('calls onClick when clicked', () => {
    const handler = vi.fn();
    render(<Button onClick={handler}>Press</Button>);
    fireEvent.click(screen.getByRole('button'));
    expect(handler).toHaveBeenCalledTimes(1);
  });

  it('spreads extra HTML attributes onto the button element', () => {
    render(<Button data-testid="my-btn" aria-label="Custom label">X</Button>);
    expect(screen.getByTestId('my-btn').getAttribute('aria-label')).toBe('Custom label');
  });

  it('applies fullWidth class when fullWidth prop is set', () => {
    render(<Button fullWidth>Full</Button>);
    const btn = screen.getByRole('button');
    expect(btn.className).toContain('w-full');
  });
});
