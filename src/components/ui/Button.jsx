import React from 'react';

// Reusable Button atom with variant-based styling and responsive behavior
export default function Button({
  type = "button",
  label = "Continue",
  buttonVariant = "primary", // you can switch variants later
  onClick,
  image,
  className,
  ...rest
}) {
  // Base style common to all buttons - with responsive classes
  const baseStyle = "rounded-md py-2 px-12 md:px-8 md:px-8 border border-1 text-[1rem] gap-2 text-center flex items-center justify-center border-[var(--primary-color)] cursor-pointer w-full max-w-full";
  
  // Variant styles for different button appearances
  const buttonVariants = {
    primary: "bg-[var(--primary-color)] border-white text-white hover:bg-blue-900",
    secondary: "bg-gray-800 border border-white text-white font-medium hover:bg-[var(--primary-hover-light)]",
    disabled: "bg-gray-200 text-gray-400 cursor-not-allowed",
    white: "bg-white border border-[var(--primary-color)] text-[var(--primary-color)] font-medium hover:bg-[var(--primary-hover-light)]",
  };
  
  // Apply the style based on the buttonVariant or fallback to primary
  const variantStyle = buttonVariants[buttonVariant] || buttonVariants.primary;
  
  return (
    // The `disabled` attribute ensures the button is unclickable when variant is 'disabled'
    <button
      className={`${baseStyle} ${variantStyle} ${className}`}
      type={type}
      onClick={onClick}
      disabled={buttonVariant === 'disabled'}
      {...rest} // Spread the rest of the props to the button here
    >
      <span className="flex justify-center items-center">{label}</span>
      {image && <span className="w-6 flex items-center justify-center h-6">{image}</span>}
    </button>
  );
}