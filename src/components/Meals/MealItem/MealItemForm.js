import React from "react";
import Input from "../../UI/Input";
import "./MealItemForm.css";

export default function MealItemForm({ id }) {
  return (
    <form className="form">
      <Input
        label="Amount"
        input={{
          id: "amount_" + id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>Add</button>
    </form>
  );
}
