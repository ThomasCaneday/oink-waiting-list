import { useState } from "react";
import { addSignup } from "./firebase";

export default function WaitingListForm() {
  const [form, setForm] = useState({ name: "", email: "" });
  const [status, setStatus] = useState("idle");   // idle | loading | done | error

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await addSignup(form);
      setStatus("done");
      setForm({ name: "", email: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section className="w-full max-w-md mx-auto p-6">
      {/* <h1 className="text-2xl font-bold mb-4 text-center">
        Join the Waiting List
      </h1> */}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          className="input-field"
          name="name"
          placeholder="Your name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          className="input-field"
          type="email"
          name="email"
          placeholder="Email address"
          value={form.email}
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded"
        >
          {status === "loading" ? "Submitting…" : "Get Early Access"}
        </button>

        {status === "done" && (
          <p className="text-green-600 text-center">🎉 You're on the list!</p>
        )}
        {status === "error" && (
          <p className="text-red-600 text-center">
            Something went wrong. Try again?
          </p>
        )}
      </form>
    </section>
  );
}