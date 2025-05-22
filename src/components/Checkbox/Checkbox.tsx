import React from "react";
// styles
import styles from "./Checkbox.module.css";

interface CheckboxProps {
  isChecked: boolean;
  label: string;
  onChange: () => void;
}

const Checkbox = ({ isChecked, onChange, label }: CheckboxProps) => {
  return (
    <label className={styles.checkbox}>
      <input type="checkbox" checked={isChecked} onChange={onChange} />

      {label}
    </label>
  );
};

export default Checkbox;
