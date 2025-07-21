import WaitingListForm from "./WaitingListForm";
import "./index.css"; // must stay

export default function App() {
  return (
    <div className="landing-page">
      <section className="hero">
        <div className="hero-content">
          <h1>Invest Your Spare Change in Crypto</h1>
          <h2>The smartest way to start your crypto journey, one small step at a time 🐷</h2>
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
        <h2>What is Oink?</h2>
        <p>
          Oink is a revolutionary platform that makes crypto investing accessible to everyone.
          We round up your everyday purchases and automatically invest the spare change into
          your chosen cryptocurrencies. Start building your crypto portfolio without changing
          your daily habits.
        </p>
      </section>

      <section className="team">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <img src="/zevin.jpg" alt="Zevin Attisha" className="team-photo" />
            <h3>Zevin Attisha</h3>
            <p className="role">CEO</p>
          </div>
          <div className="team-member">
            <img src="/thomas.jpg" alt="Thomas Caneday" className="team-photo" />
            <h3>Thomas Caneday</h3>
            <p className="role">CTO</p>
          </div>
          <div className="team-member">
            <img src="/andre.jpg" alt="Andre Suaid" className="team-photo" />
            <h3>Andre Suaid</h3>
            <p className="role">CFO</p>
          </div>
        </div>
      </section>

      <section id="waitlist" className="waitlist-section">
        <h2>Join the Waitlist</h2>
        <WaitingListForm />
      </section>
    </div>
  );
}