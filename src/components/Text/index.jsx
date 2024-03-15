import React from "react";

const sizes = {
  xs: "text-xs font-normal leading-[15px]",
  lg: "text-4xl font-light leading-[43px]",
  s: "text-sm font-normal leading-[21px]",
  xl: "text-6xl font-normal leading-[72px]",
  md: "text-base font-normal leading-[19px]",
};

const Text = ({ children, className = "", as, size = "s", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-white-A700 font-roboto ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
