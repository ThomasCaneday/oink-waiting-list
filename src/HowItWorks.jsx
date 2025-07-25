import React from 'react';

export default function HowItWorks() {
  return (
    <div className="how-it-works-page">
      <header className="site-header">
        <div className="header-content">
          <div className="logo">
            <img src="/oink_pig_logo_correct_pink.jpeg" alt="Oink logo" className="logo-img" />
            <span className="logo-text">Oink</span>
          </div>
          <nav className="nav-links">
            <a href="/" className="nav-link">Home</a>
          </nav>
        </div>
      </header>

      <section className="hero-small">
        <h1>How Oink Works</h1>
        <p>Turn your everyday purchases into crypto investments, automatically.</p>
      </section>

      <section className="features">
        <div className="feature-grid">
          <div className="feature">
            <h3>1. Connect Your Account</h3>
            <p>Link your debit card securely. We use bank-level encryption to keep your data safe.</p>
          </div>
          <div className="feature">
            <h3>2. Shop As Usual</h3>
            <p>Keep using your card as you normally would. Oink simply calculates the spare change from each purchase.</p>
          </div>
          <div className="feature">
            <h3>3. We Round Up</h3>
            <p>For each purchase, we round up to the nearest dollar. Spend $3.50, and we'll set aside 50¢.</p>
          </div>
          <div className="feature">
            <h3>4. Set Your Threshold</h3>
            <p>Choose your investment threshold - from as low as $10 to as high as you want. You're in control of when your round-ups get invested.</p>
          </div>
          <div className="feature">
            <h3>5. Auto-Invest in Crypto</h3>
            <p>Once your round-ups reach your chosen threshold, we automatically invest them in your selected cryptocurrencies.</p>
          </div>
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
            <h3>Can I withdraw my investments?</h3>
            <p>Yes, you can withdraw your crypto investments at any time. Standard network fees and processing times apply.</p>
          </div>
          <div className="faq-item">
            <h3>How much does it cost?</h3>
            <p>Oink charges a small monthly subscription fee. There are no hidden fees or surprise charges. Detailed pricing will be announced before launch.</p>
          </div>
          <div className="faq-item">
            <h3>Is crypto investing risky?</h3>
            <p>Like any investment, cryptocurrency carries risks. However, our round-up approach means you're investing small amounts gradually, reducing the impact of market volatility.</p>
          </div>
          <div className="faq-item">
            <h3>Do I need crypto knowledge?</h3>
            <p>No! Oink is designed for beginners. We handle the technical details while you focus on building your portfolio through everyday purchases.</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to Start Your Crypto Journey?</h2>
        <p>Join hundreds of others already on the Oink waitlist.</p>
        <a href="/" className="button primary">Back to Waitlist</a>
      </section>
    </div>
  );
}
