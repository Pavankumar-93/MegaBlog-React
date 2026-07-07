import React from "react";

function Button({
  children,
  type = "button",
  bgColor = "bg-red-500",
  textColour = "text-white",
  className = "",
  ...props
}) {
  return (
    <button
      className={`px-4 py-2 rounded-lg ${className}, ${textColour}, `}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
