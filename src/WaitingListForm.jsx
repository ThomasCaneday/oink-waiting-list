import { useState } from "react";
import { addNewSignup } from "./firebase";
import Confetti from "react-confetti";

// LinkedIn Icon SVG component
const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

// Instagram Icon
const InstagramIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
);

// TikTok Icon with gradient fill
const TikTokIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="tiktokGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#69C9D0" />
        <stop offset="45%" stopColor="#69C9D0" />
        <stop offset="55%" stopColor="#EE1D52" />
        <stop offset="100%" stopColor="#EE1D52" />
      </linearGradient>
    </defs>
    <path fill="url(#tiktokGradient)" d="M13.5 3a6 6 0 0 0 6 6v2.05a8 8 0 0 1-4.2-1.23l-.01 5.18a6 6 0 1 1-6-6c.17 0 .34.01.5.03V12a3.5 3.5 0 1 0 3.01 3.47L12.81 3.5h.69Z"/>
  </svg>
);

// YouTube Icon
const YouTubeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21.8 8s-.2-1.4-.8-2c-.8-.9-1.7-.9-2.1-1C15.9 4.7 12 4.7 12 4.7h0s-3.9 0-6.9.3c-.4.1-1.3.1-2.1 1-.6.6-.8 2-.8 2S2 9.6 2 11.3v1.3c0 1.7.2 3.3.2 3.3s.2 1.4.8 2c.8.9 1.8.8 2.3.9 1.7.2 6.7.3 6.7.3s3.9 0 6.9-.3c.4-.1 1.3-.1 2.1-1 .6-.6.8-2 .8-2s.2-1.7.2-3.3v-1.3C22 9.6 21.8 8 21.8 8ZM10 14.7V9.3l5.2 2.7L10 14.7Z"/></svg>
);

// X (Twitter) Icon
const XIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.53 3h3.37l-7.36 8.4L22 21h-6.14l-4.8-6.28L5.25 21H1.88l7.89-9L2 3h6.25l4.33 5.64L17.53 3Z"/></svg>
);

export default function WaitingListForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [status, setStatus] = useState("idle");
  const [showModal, setShowModal] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

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
      await addNewSignup(formData);
      setStatus("done");
      setForm({ name: "", email: "", phone: "" });
      setShowModal(true);
      setShowConfetti(true);
      // Stop confetti after 5 seconds
      setTimeout(() => setShowConfetti(false), 5000);
    } catch (error) {
      console.error('Submission error:', error); // This will help with debugging
      setStatus("error");
    }
  };

  const shareUrl = "https://oinkcrypto.com";
  const shareText = "Join me in the future of crypto investing with Oink! Turn your spare change into crypto automatically.";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    alert("Link copied to clipboard!");
  };

  return (
    <div id="waitlist-form" className="waitlist-form">
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          numberOfPieces={500}
          gravity={0.8}
          recycle={false}
          colors={['#f7931a', '#627eea', '#00d4aa', '#ff69b4', '#ffb6c1', '#ffd700', '#ffffff']}
        />
      )}
      <h2>Join the Club</h2>
      <form onSubmit={handleSubmit}>
        {/* name */}
        <input
          className="input-field"
          name="name"
          placeholder="Full Name *"
          value={form.name}
          onChange={handleChange}
          required
        />

        {/* email */}
        <input
          className="input-field"
          type="email"
          name="email"
          placeholder="Email Address *"
          value={form.email}
          onChange={handleChange}
          required
        />

        {/* phone */}
        <input
          className="input-field"
          type="tel"
          name="phone"
          placeholder="Phone Number (optional)"
          pattern="^$|^\+?[0-9\s\-()]{7,}$"   /* allows empty or valid phone number */
          title="Enter a valid phone number"
          value={form.phone}
          onChange={handleChange}
        />

        <button disabled={status === "loading"}>
          {status === "loading" ? "Submitting…" : "Reserve Your Spot"}
        </button>

        {status === "done"  && <p className="alert-success">🎉 You're on the list!</p>}
        {status === "error" && <p className="alert-error">Something went wrong.</p>}
      </form>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>🎉 You're officially on the Oink list!</h2>
            <p>You're now closer to turning your spare change into crypto automatically! Share Oink with your friends so they don't miss out on the future of investing.</p>
            <div className="share-buttons">
              <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener noreferrer" className="share-button">
                <XIcon />
                Share on X
              </a>
              <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener noreferrer" className="share-button">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                Share on Facebook
              </a>
              <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener noreferrer" className="share-button">
                <LinkedInIcon />
                Share on LinkedIn
              </a>
              <button onClick={handleCopyLink} className="share-button copy-link">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
                Copy Link
              </button>
            </div>
            <button className="close-button" onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}