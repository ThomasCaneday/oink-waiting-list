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
      // Clean up the data before sending
      const formData = {
        name: form.name.trim(),
        email: form.email.trim(),
        ...(form.phone.trim() ? { phone: form.phone.trim() } : {}) // Only include phone if it's not empty
      };
      await addSignup(formData);
      setStatus("done");
      setForm({ name: "", email: "", phone: "" });
    } catch (error) {
      console.error('Submission error:', error); // This will help with debugging
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
        placeholder="Phone number (optional)"
        pattern="^$|^\+?[0-9\s\-()]{7,}$"   /* allows empty or valid phone number */
        title="Enter a valid phone number"
        value={form.phone}
        onChange={handleChange}
      />

      <button disabled={status === "loading"}>
        {status === "loading" ? "Submitting…" : "Get Early Access"}
      </button>

      {status === "done"  && <p className="alert-success">🎉 You're on the list!</p>}
      {status === "error" && <p className="alert-error">Something went wrong.</p>}
    </form>
  );
}