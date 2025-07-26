import React from 'react';
import Header from './components/Header';

function HowItWorks() {
  return (
    <div className="how-it-works-page">
      <Header />

      <section className="hero-small">
        <h1>How Oink Works</h1>
        <p>Turn your everyday purchases into crypto investments, automatically.</p>
      </section>

      <section className="features">
        <div className="feature-grid">
          <div className="feature">
            <h3>1. Connect Your Account 🔒</h3>
            <p>Link your debit card securely. We use bank-level encryption to keep your data safe.</p>
          </div>
          <div className="feature">
            <h3>2. Set Your Threshold ⚙️</h3>
            <p>Choose your investment threshold - from as low as $10 to as high as you want. You're in control of when your round-ups get invested.</p>
          </div>
          <div className="feature">
            <h3>3. Shop As Usual ☕️</h3>
            <p>Keep using your card as you normally would. Oink simply calculates the spare change from each purchase.</p>
          </div>
          <div className="feature">
            <h3>4. We Round Up 💰</h3>
            <p>For each purchase, we round up to the nearest dollar. Spend $3.50, and we'll set aside 50¢.</p>
          </div>
          <div className="feature">
            <h3>5. Auto-Invest in Crypto 🚀</h3>
            <p>Once your round-ups reach your chosen threshold, we automatically invest them in your selected cryptocurrencies.</p>
          </div>
        </div>
      </section>

      <section className="partners">
        <h2>Powered By Industry Leaders 🤝</h2>
        <div className="partner-grid">
          <div className="partner-item">
            <h3>Coinbase Integration 💱</h3>
            <p>We've partnered with Coinbase, America's most trusted cryptocurrency exchange. With over 100M verified users and $130B+ in quarterly trading volume, Coinbase provides institutional-grade security and reliability for all your crypto investments.</p>
          </div>
          <div className="partner-item">
            <h3>Plaid Security 🛡️</h3>
            <p>Your financial security is our top priority. That's why we use Plaid, the same technology trusted by companies like Venmo and American Express, to securely connect your bank account. Plaid never stores your login information and uses bank-level encryption.</p>
          </div>
        </div>
      </section>

      <section className="crypto-growth">
        <h2>The Power of Small Investments 📈</h2>
        <div className="growth-grid">
          <div className="growth-item">
            <h3>Bitcoin (BTC)</h3>
            <p>From $0.08 in 2010</p>
            <p className="highlight">To $123,000+ in 2025</p>
            <p className="growth-rate">A $1 investment would be worth over $1.5 million</p>
            <div className="chart-container btc">
              <svg viewBox="0 0 300 100" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="btc-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="var(--pink-500)" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="var(--pink-500)" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
                <path
                  d="M 0,100 Q 50,100 100,90 Q 150,80 200,40 Q 250,10 300,0"
                  fill="none"
                  stroke="var(--pink-500)"
                  strokeWidth="2"
                />
                <path
                  d="M 0,100 Q 50,100 100,90 Q 150,80 200,40 Q 250,10 300,0 L 300,100 L 0,100"
                  fill="url(#btc-gradient)"
                />
              </svg>
            </div>
          </div>
          <div className="growth-item">
            <h3>Ethereum (ETH)</h3>
            <p>From $0.67 in 2015</p>
            <p className="highlight">To $4,000+ in 2025</p>
            <p className="growth-rate">A $1 investment would be worth over $5,970</p>
            <div className="chart-container eth">
              <svg viewBox="0 0 300 100" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="eth-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="var(--pink-500)" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="var(--pink-500)" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
                <path
                  d="M 0,100 Q 75,100 150,70 Q 225,40 300,20"
                  fill="none"
                  stroke="var(--pink-500)"
                  strokeWidth="2"
                />
                <path
                  d="M 0,100 Q 75,100 150,70 Q 225,40 300,20 L 300,100 L 0,100"
                  fill="url(#eth-gradient)"
                />
              </svg>
            </div>
          </div>
          <div className="growth-item">
            <h3>Solana (SOL)</h3>
            <p>From $0.22 in 2020</p>
            <p className="highlight">To $250+ in 2025</p>
            <p className="growth-rate">A $1 investment would be worth over $1,136</p>
            <div className="chart-container sol">
              <svg viewBox="0 0 300 100" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="sol-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="var(--pink-500)" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="var(--pink-500)" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
                <path
                  d="M 0,100 Q 100,100 200,50 Q 250,25 300,10"
                  fill="none"
                  stroke="var(--pink-500)"
                  strokeWidth="2"
                />
                <path
                  d="M 0,100 Q 100,100 200,50 Q 250,25 300,10 L 300,100 L 0,100"
                  fill="url(#sol-gradient)"
                />
              </svg>
            </div>
          </div>
        </div>
        <p className="disclaimer">* Historical prices shown for educational purposes. Past performance doesn't guarantee future results.</p>
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

export default HowItWorks;
