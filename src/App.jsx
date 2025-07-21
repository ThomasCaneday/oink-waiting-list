import WaitingListForm from "./WaitingListForm";
import "./index.css"; // must stay

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
            <p className="bio">
              Zevin Attisha is the Chief Executive Officer of Oink, where he leads the company’s strategic direction, vision, and growth initiatives. A Presidential Scholar and Division I student-athlete at the University of San Diego, Zevin brings a disciplined and entrepreneurial mindset shaped by both academic excellence and real-world business experience. As an Acquisition Analyst for his family’s investment fund, he has gained deep exposure to financial modeling, deal evaluation, and capital allocation. The son of small business owners, Zevin comes from a multi-generational line of entrepreneurs and is a proud first-generation college student. At Oink, he combines his passion for innovation with a mission to expand access to modern financial tools.
            </p>
          </div>
          <div className="team-member">
            <img src="/headshot.jpeg" alt="Thomas Caneday" className="team-photo" />
            <h3>Thomas Caneday</h3>
            <p className="role">CTO</p>
            <p className="bio">
              Thomas Caneday is the Chief Technology Officer of Oink, where he oversees the development and execution of the company’s financial technology infrastructure. He holds a Bachelor's degree in Computer Science from the University of San Diego and is currently pursuing a Master of Science in Computer Science at the Georgia Institute of Technology. With a strong foundation in full-stack development, distributed systems, and API architecture, Thomas has led the creation of scalable, secure, and user-centric financial products. At Oink, he drives the company’s technical vision, product strategy, and innovation roadmap.
            </p>
          </div>
          <div className="team-member">
            <img src="/andre-headshot.jpeg" alt="Andre Suaid" className="team-photo" />
            <h3>Andre Suaid</h3>
            <p className="role">CFO</p>
            <p className="bio">
              Andre Suaid is an accomplished trilingual honors student at the University of San Diego, where he was awarded the prestigious $100,000 Alcalá Scholarship in recognition of his academic excellence and leadership. Fluent in English, Spanish, and Portuguese, he brings a global outlook shaped by his experience living across the United States as well as internationally in Brazil and Chile. Andre has been recognized as a finalist in both the Fowler Business Challenge and the USD TECh Competition. He is set to join BNP Paribas in New York as a Sales and Trading Analyst Intern. As Chief Financial Officer at Oink, Andre oversees financial planning, capital strategy, and investment readiness.
            </p>
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