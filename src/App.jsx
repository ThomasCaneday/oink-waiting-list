import WaitingListForm from "./WaitingListForm";
import "./index.css";

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

// TikTok Icon (mono, uses currentColor) for footer
const TikTokIconMono = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.5 3a6 6 0 0 0 6 6v2.05a8 8 0 0 1-4.2-1.23l-.01 5.18a6 6 0 1 1-6-6c.17 0 .34.01.5.03V12a3.5 3.5 0 1 0 3.01 3.47L12.81 3.5h.69Z"/>
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

export default function App() {
  return (
    <div className="landing-page">
      <header className="site-header">
        <div className="header-content">
          <div className="logo">
            <img src="/oink_pig_logo_correct_pink.jpeg" alt="Oink logo" className="logo-img" />
            <span className="logo-text">Oink</span>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Crypto for All.</h1>
            <h2>Oink turns your spare change into crypto automatically.</h2>
            <div className="hero-socials" aria-label="Oink social media links">
              <a href="https://www.instagram.com/oinkcrypto/" target="_blank" rel="noopener noreferrer" aria-label="Oink on Instagram" className="social-icon instagram"><InstagramIcon /></a>
              <a href="https://www.tiktok.com/@oinkcrypto" target="_blank" rel="noopener noreferrer" aria-label="Oink on TikTok" className="social-icon tiktok"><TikTokIcon /></a>
              <a href="https://www.youtube.com/channel/UCKgSti6686Z0Nu9n41aww0Q" target="_blank" rel="noopener noreferrer" aria-label="Oink on YouTube" className="social-icon youtube"><YouTubeIcon /></a>
              <a href="https://x.com/Oink_wallet" target="_blank" rel="noopener noreferrer" aria-label="Oink on X" className="social-icon x"><XIcon /></a>
              <a href="https://www.linkedin.com/company/oinkcrypto/" target="_blank" rel="noopener noreferrer" aria-label="Oink on LinkedIn" className="social-icon linkedin"><LinkedInIcon /></a>
            </div>
            <div className="cta-buttons">
              <button className="button primary" onClick={() => document.getElementById('waitlist-form').scrollIntoView({ behavior: 'smooth' })}>
                Join the Waitlist&nbsp;
                <svg className="arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M1 8h12m0 0L8.5 3.5M13 8l-4.5 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
          <WaitingListForm />
        </div>
      </section>

      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps-grid">
          {/* <div className="step">
            <div className="step-icon">📝</div>
            <h3>Create Your Account</h3>
            <p>Sign up in minutes with your name, email, and a secure password. No crypto knowledge needed.</p>
          </div> */}
          <div className="step">
            <div className="step-icon">🏦</div>
            <h3>Connect Your Bank</h3>
            <p>Securely link your everyday spending account so Oink can round up your purchases.</p>
          </div>
          <div className="step">
            <div className="step-icon">🔑</div>
            <h3>Set Up Coinbase</h3>
            <p>We guide you to create or connect a Coinbase account - this is where your crypto is safely held.</p>
          </div>
          <div className="step">
            <div className="step-icon">⚙️</div>
            <h3>Choose Your Settings</h3>
            <p>Select your round-up frequency, your threshold for when to invest, and which cryptocurrency (like Bitcoin or Ethereum) you'd like to buy.</p>
          </div>
          <div className="step">
            <div className="step-icon">💳</div>
            <h3>Spend Normally</h3>
            <p>Everyday purchases like coffee or groceries get rounded up. Once your spare change adds up to your threshold, Oink automatically invests it for you.</p>
          </div>
        </div>
      </section>

      <section className="brand-story">
        <h2>Who We Are</h2>
        <p className="mission">
          We're just like you. We were interested in crypto, but didn't know how to get started. 
          That's why we built Oink - to make investing simple, stress-free, and safe. 
          Our mission is to lower the barrier to digital wealth for everyone.
        </p>
        <div className="values-grid">
          <div className="value">
            <h3>Simplicity</h3>
            <p>No fancy jargon - just a clean path to automate responsible investments into crypto.</p>
          </div>
          <div className="value">
            <h3>Safety</h3>
            <p>Your money and information are protected through bank-level security and regulated partners.</p>
          </div>
          <div className="value">
            <h3>Education</h3>
            <p>We provide short, easy-to-understand explainers so you always know what's happening with your money.</p>
          </div>
        </div>
      </section>

      <section className="team">
        <div className="team-content">
          <h2>Meet the Founders</h2>
          <div className="team-grid">
            <div className="team-member">
            <img src="/zevin-headshot.jpeg" alt="Zevin Attisha" className="team-photo" />
            <h3>Zevin Attisha</h3>
            <p className="role">CEO</p>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/zevin-attisha-6772b2277/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Zevin Attisha LinkedIn">
                <LinkedInIcon />
              </a>
            </div>
          </div>
          <div className="team-member">
            <img src="/headshot.jpeg" alt="Thomas Caneday" className="team-photo" />
            <h3>Thomas Caneday</h3>
            <p className="role">CTO</p>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/thomas-caneday-323973259/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Thomas Caneday LinkedIn">
                <LinkedInIcon />
              </a>
            </div>
          </div>
          <div className="team-member">
            <img src="/andre-headshot.jpeg" alt="Andre Suaid" className="team-photo" />
            <h3>Andre Suaid</h3>
            <p className="role">CFO</p>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/andresuaid/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Andre Suaid LinkedIn">
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
      </section>

      <section className="testimonial">
        <div className="quote-block">
          "Crypto investing was something I was always interested in. But the space is pretty intimidating. 
          And the options were crazy. Oink lowers those barriers to entry. Crypto for all!"
        </div>
      </section>

      <section className="faq">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-grid">
          <div className="faq-item">
            <h3>Is my money safe with Oink?</h3>
            <p>Yes! We use bank-level security and encryption. Your personal and financial information is protected by the same security standards used by major financial institutions.</p>
          </div>
          <div className="faq-item">
            <h3>Which cryptocurrencies can I invest in?</h3>
            <p>We offer a curated selection of established cryptocurrencies including Bitcoin, Ethereum, and other major tokens. You can customize your portfolio based on your preferences.</p>
          </div>
          <div className="faq-item">
            <h3>How much does it cost?</h3>
            <p>Oink charges a small monthly subscription fee. There are no hidden fees or surprise charges. Detailed pricing will be announced before launch.</p>
          </div>
          <div className="faq-item">
            <h3>How do I get started?</h3>
            <p>Join our waitlist and be the first to know when we launch. Once live, simply connect your bank account, customize your round-up preferences, and start investing automatically.</p>
          </div>
          <div className="faq-item">
            <h3>Can I withdraw my investments anytime?</h3>
            <p>Yes, you have full control over your investments. You can withdraw your crypto or cash out to your bank account at any time, with no lockup periods.</p>
          </div>
          <div className="faq-item">
            <h3>What happens if I want to stop using Oink?</h3>
            <p>You can cancel your subscription at any time. Your existing crypto investments remain yours, and you can withdraw them whenever you want. There are no cancellation fees or penalties.</p>
          </div>
        </div>
      </section>

      <section className="cta-footer">
        <h2>Be part of the future of passive crypto investing</h2>
        <h4>Join hundreds of others building their wealth, one purchase at a time.</h4>
        <div className="cta-buttons">
          <button className="button primary" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            Join Now
          </button>
          <a href="https://instagram.com/oinkcrypto" target="_blank" rel="noopener noreferrer" className="button secondary">
            Follow Us on Instagram
          </a>
        </div>
        <div className="footer-socials" aria-label="Oink social media links">
          <a href="https://www.instagram.com/oinkcrypto/" target="_blank" rel="noopener noreferrer" aria-label="Oink on Instagram" className="social-icon"><InstagramIcon /></a>
          <a href="https://www.tiktok.com/@oinkcrypto" target="_blank" rel="noopener noreferrer" aria-label="Oink on TikTok" className="social-icon"><TikTokIconMono /></a>
            <a href="https://www.youtube.com/channel/UCKgSti6686Z0Nu9n41aww0Q" target="_blank" rel="noopener noreferrer" aria-label="Oink on YouTube" className="social-icon"><YouTubeIcon /></a>
          <a href="https://x.com/Oink_wallet" target="_blank" rel="noopener noreferrer" aria-label="Oink on X" className="social-icon"><XIcon /></a>
          <a href="https://www.linkedin.com/company/oinkcrypto/" target="_blank" rel="noopener noreferrer" aria-label="Oink on LinkedIn" className="social-icon"><LinkedInIcon /></a>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-content">
          <div className="footer-logo">
            <img src="/oink_pig_logo_correct_pink.jpeg" alt="Oink logo" className="footer-logo-img" />
            <span>Oink</span>
          </div>
          <p className="footer-copyright">© {new Date().getFullYear()} Oink. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}