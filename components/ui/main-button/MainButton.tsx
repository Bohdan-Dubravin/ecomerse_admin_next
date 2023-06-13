import React from "react";
import styles from "./button.module.css";
import { twMerge } from "tailwind-merge";

type Props = {
  children: React.ReactNode;
  type?: "button" | "submit";
  className?: string;
};

const MainButton = ({ children, type = "button", className }: Props) => {
  const c = twMerge(styles.button, className);
  return (
    <button type={type} className={c}>
      {children}
    </button>
  );
};
export default MainButton;
