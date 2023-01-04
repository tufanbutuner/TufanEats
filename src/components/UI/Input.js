import "./Input.css";

export default function Input({ label, input }) {
  return (
    <div className="input">
      <label htmlFor={input.id}>{label}</label>
      <input {...input} />
    </div>
  );
}
