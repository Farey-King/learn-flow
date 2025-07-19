import React from 'react';

/**
 * Reusable Input component with variant-based styling.
 * Accepts custom style through `inputVariant` prop.
 */
export default function Input({
  type = 'text',
  placeholder = 'Enter information',
  value,
  onChange,
  className,
  inputVariant = 'default', // you can switch variants later
  ...rest
}) {
  // Base input styles common to all variants
  const baseStyle = 'w-full text-gray-800 py-3 px-2 text-sm focus:outline-none placeholder:text-[.8rem]';

  // Variant styles for different input appearances
  const inputVariants = {
    underline: 'border-b-2 pl-14 border-[#002D62] focus:border-[#002D62]',
    default:   'bg-[#F7F7F7] shadow border-gray-300 focus:ring-blue-500',
  };

  // Apply the appropriate variant or fallback to baseStyle
  const variantStyle = inputVariants[inputVariant] || inputVariants.default;

  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`${baseStyle} ${variantStyle} ${className}`}
      {...rest} // Spread any additional props
    />
  );
}
