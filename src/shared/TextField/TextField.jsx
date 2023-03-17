import css from '../TextField/textField.module.css';
import { useMemo } from "react";
import { nanoid } from "nanoid";

export const TextField = ({ label, handleChange, ...props }) => {
const id = useMemo(()=> nanoid(), [])

    return (
      <div className={css.block}>
        <label htmlFor={id}>
          {label}
        </label>
        <input
          id={id}
          onChange={handleChange}
          {...props}
          className={css.input}
        />
      </div>
    );
}