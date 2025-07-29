import WaitingListForm from "./WaitingListForm";
import "./index.css";

// LinkedIn Icon SVG component
const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
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
          <div className="step">
            <div className="step-icon">💳</div>
            <h3>Spend normally</h3>
            <p>Use your linked card for everyday purchases like coffee, groceries, and more.</p>
          </div>
          <div className="step">
            <div className="step-icon">🔄</div>
            <h3>We round up</h3>
            <p>We automatically round up your purchases to the nearest dollar and collect the spare change.</p>
          </div>
          <div className="step">
            <div className="step-icon">📈</div>
            <h3>Passive crypto</h3>
            <p>Your spare change is automatically invested into a diversified crypto portfolio.</p>
          </div>
        </div>
      </section>

      <section className="brand-story">
        <h2>Who We Are</h2>
        <p className="mission">
          We're crypto builders and enthusiasts lowering the barrier to digital wealth. 
          Investing should be simple, stress-free, and built for this generation.
        </p>
        <div className="values-grid">
          <div className="value">
            <h3>Accessibility</h3>
            <p>Making crypto investing accessible to everyone, regardless of experience.</p>
          </div>
          <div className="value">
            <h3>Transparency</h3>
            <p>Clear, honest communication about fees, risks, and how your money works.</p>
          </div>
          <div className="value">
            <h3>Ownership</h3>
            <p>Your crypto, your keys, your future. We believe in true digital ownership.</p>
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
            <p>Join our waitlist and you'll be among the first to know when we launch. Once live, simply connect your bank account, customize your round-up preferences, and start investing automatically.</p>
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