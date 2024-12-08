import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'small' | 'medium' | 'large';
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  children,
  ...rest
}) => {
  const baseStyles = 'font-medium rounded-md transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2';
  let variantStyles = '';

  switch (variant) {
    case 'primary':
      variantStyles = 'bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700 disabled:bg-blue-300 disabled:cursor-not-allowed';
      break;
    case 'secondary':
      variantStyles = 'bg-gray-200 text-gray-800 hover:bg-gray-300 active:bg-gray-400 disabled:bg-gray-100 disabled:cursor-not-allowed';
      break;
    case 'tertiary':
      variantStyles = 'bg-transparent text-blue-500 hover:text-blue-600 active:text-blue-700 disabled:text-blue-300 disabled:cursor-not-allowed';
      break;
  }

  let sizeStyles = '';

  switch (size) {
    case 'small':
      sizeStyles = 'px-3 py-2 text-sm';
      break;
    case 'medium':
      sizeStyles = 'px-4 py-2 text-base';
      break;
    case 'large':
      sizeStyles = 'px-5 py-3 text-lg';
      break;
  }

  const combinedStyles = `${baseStyles} ${variantStyles} ${sizeStyles}`;

  return (
    <button className={combinedStyles} {...rest}>
      {children}
    </button>
  );
};

export default Button;