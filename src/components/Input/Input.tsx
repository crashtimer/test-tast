import React from "react";
import cx from "classnames";
// styles
import styles from "./Input.module.css";

interface InputProps {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const Input = ({ placeholder, value, onChange, className }: InputProps) => {
  return (
    <input
      className={cx([styles.input, className])}
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
