import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style of the button */
  variant?: ButtonVariant;
  /** Size of the button */
  size?: ButtonSize;
  /** Shows a loading spinner and disables interaction */
  isLoading?: boolean;
  /** Icon rendered to the left of the label */
  leftIcon?: React.ReactNode;
  /** Icon rendered to the right of the label */
  rightIcon?: React.ReactNode;
  /** Makes the button span the full width of its container */
  fullWidth?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:   'bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-500',
  secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus-visible:ring-gray-400',
  danger:    'bg-red-600  text-white hover:bg-red-700  focus-visible:ring-red-500',
  ghost:     'bg-transparent text-blue-600 hover:bg-blue-50 focus-visible:ring-blue-400',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-sm gap-1.5',
  md: 'px-4 py-2   text-base gap-2',
  lg: 'px-6 py-3   text-lg  gap-2.5',
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      fullWidth = false,
      disabled,
      className = '',
      type = 'button',
      ...rest
    },
    ref,
  ) => {
    const isDisabled = disabled || isLoading;

    return (
      <button
        ref={ref}
        type={type}
        disabled={isDisabled}
        aria-busy={isLoading || undefined}
        className={[
          // base
          'inline-flex items-center justify-center rounded-md font-medium',
          'transition-colors duration-150',
          'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
          // variant + size
          variantStyles[variant],
          sizeStyles[size],
          // states
          isDisabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
          fullWidth ? 'w-full' : '',
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        {...rest}
      >
        {isLoading ? (
          <span
            role="status"
            aria-label="Loading"
            className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
          />
        ) : (
          leftIcon && <span className="shrink-0">{leftIcon}</span>
        )}

        {children && <span>{children}</span>}

        {!isLoading && rightIcon && (
          <span className="shrink-0">{rightIcon}</span>
        )}
      </button>
    );
  },
);

Button.displayName = 'Button';

export default Button;
