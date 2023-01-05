import { forwardRef } from "react";
import "./Input.css";

const Input = forwardRef(function Input({ label, input }, ref) {
  return (
    <div className="input">
      <label htmlFor={input.id}>{label}</label>
      <input ref={ref} {...input} />
    </div>
  );
});

export default Input;
