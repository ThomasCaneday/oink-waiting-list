import { useState } from "react";
import { addSignup } from "./firebase";

export default function WaitingListForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await addSignup(form);
      setStatus("done");
      setForm({ name: "", email: "", phone: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* name */}
      <input
        className="input-field"
        name="name"
        placeholder="Your name"
        value={form.name}
        onChange={handleChange}
        required
      />

      {/* email */}
      <input
        className="input-field"
        type="email"
        name="email"
        placeholder="Email address"
        value={form.email}
        onChange={handleChange}
        required
      />

      {/* phone */}
      <input
        className="input-field"
        type="tel"
        name="phone"
        placeholder="Phone number"
        pattern="^\+?[0-9\s\-()]{7,}$"   /* basic validation */
        title="Enter a valid phone number"
        value={form.phone}
        onChange={handleChange}
        required
      />

      <button disabled={status === "loading"}>
        {status === "loading" ? "Submitting…" : "Get Early Access"}
      </button>

      {status === "done"  && <p className="alert-success">🎉 You're on the list!</p>}
      {status === "error" && <p className="alert-error">Something went wrong.</p>}
    </form>
  );
}