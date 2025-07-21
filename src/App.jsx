import WaitingListForm from "./WaitingListForm";
import "./index.css"; // must stay

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
          <h1>The future of crypto is almost here. Are you in?</h1>
          <h2>We're rounding up your spare change and auto-investing it into crypto. No stress. No spreadsheets. No finance-bro jargon. <br></br>Just limitless growth with every transaction.</h2>
          <div className="cta-buttons">
            <button className="button primary" onClick={() => document.getElementById('waitlist').scrollIntoView({ behavior: 'smooth' })}>
              Join Waitlist
            </button>
            <a href="https://instagram.com/oinkcrypto" target="_blank" rel="noopener noreferrer" className="button secondary">
              Follow Us on Instagram
            </a>
          </div>
        </div>
      </section>

      <section className="about">
        <h2>Be the first to experience Oink</h2>
        <p>Join our growing waitlist for Oink Beta.</p>
        <div className="quote-block">
          "Crypto investing was something I was always interested in. But the space is pretty intimidating. And the options were crazy. Oink lowers those barriers to entry. Crypto for all!"
        </div>
      </section>

            <section className="team">
        <h2>Meet Our Team</h2>
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
      </section>

      <section id="waitlist" className="waitlist-section">
        <h2>Join the Waitlist</h2>
        <WaitingListForm />
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