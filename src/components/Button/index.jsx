import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-sm",
  square: "rounded-[0px]",
};
const variants = {
  fill: {
    gray_200: "bg-gray-200 text-black-900_01",
    teal_A700: "bg-teal-A700 text-white-A700",
  },
};
const sizes = {
  xs: "h-[30px] px-1.5 text-base",
  sm: "h-[50px] px-[35px] text-xs",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  variant = "fill",
  size = "sm",
  color = "teal_A700",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round", "square"]),
  size: PropTypes.oneOf(["xs", "sm"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["gray_200", "teal_A700"]),
};

export { Button };
