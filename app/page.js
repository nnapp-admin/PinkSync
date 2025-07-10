'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [activeFAQ, setActiveFAQ] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    whatsappNumber: '',
    ageGroup: '',
    cityLocation: '',
    forWhom: '',
  });
  const [submitMessage, setSubmitMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false); // New state for loading

  const handleFAQToggle = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Start loading
    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      setSubmitMessage(
        data.success
          ? '🎉 Thank you! You’re on the list! We’ll notify you with a sprinkle of magic! ✨'
          : 'Oops! Something went wrong. Please try again.'
      );
      if (data.success) {
        setFormData({
          fullName: '',
          whatsappNumber: '',
          ageGroup: '',
          cityLocation: '',
          forWhom: '',
        });
        // Modal stays open to show message; no auto-close
      }
    } catch (error) {
      setSubmitMessage('Oops! Something went wrong. Please try again.');
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  return (
    <>
      {/* Navigation */}
      <nav>
        <div className="container">
          <div className="nav-content">
            <div className="logo">
              <Image src="/assets/Logo.png" alt="PinkSync Logo" width={32} height={32} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
              <span style={{ color: '#ff1a8c' }}>Pink</span><span style={{ color: '#ffffff' }}>Sync</span>
            </div>
            <ul className="nav-links">
              <li><a href="#about">About</a></li>
              <li><a href="#tech">Tech</a></li>
              <li><a href="#faq">FAQs</a></li>
              <li><a href="#buy">Buy</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Because Every Second Counts</h1>
              <p>Meet the locket that alerts your circle and shares your location — instantly, accurately, for 36 hours.</p>
              <a href="#buy" className="cta-button" onClick={(e) => { e.preventDefault(); setShowForm(true); }}>Notify Me on Launch</a>
            </div>
            <div className="hero-visual">
              <div className="pulse-ring"></div>
              <div className="locket-3d"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="about">
        <div className="container">
          <h2 className="section-title">Stay Safe, Stay Visible</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🛰️</div>
              <h3>36-Hour Live Location</h3>
              <p>Continuous real-time tracking with extended battery life for complete peace of mind.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📶</div>
              <h3>Embedded SIM</h3>
              <p>Works independently without needing your phone or internet connection.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👆</div>
              <h3>Emergency SOS Tap</h3>
              <p>Simple double-tap activation sends instant alerts to your trusted contacts.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💎</div>
              <h3>Stylish & Unobtrusive</h3>
              <p>Elegant design that complements any outfit while keeping you protected.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3>Wear the Locket</h3>
              <p>Simply wear it as a stylish accessory - no setup required.</p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h3>Tap in Emergency</h3>
              <p>Double-tap the locket to instantly trigger the SOS alert.</p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h3>Location Shared</h3>
              <p>Your location is instantly sent to your selected emergency contacts.</p>
            </div>
            <div className="step-card">
              <div className="step-number">4</div>
              <h3>36-Hour Tracking</h3>
              <p>Contacts can track your location in real-time for up to 36 hours.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="use-cases">
        <div className="container">
          <h2 className="section-title">Real Protection for Real Life</h2>
          <div className="use-cases-grid">
            <div className="use-case-card">
              <div className="use-case-icon">👩</div>
              <h3>Walking Alone at Night</h3>
              <p>Feel secure knowing help is just a tap away when you're out late.</p>
            </div>
            <div className="use-case-card">
              <div className="use-case-icon">👵</div>
              <h3>Elderly Living Alone</h3>
              <p>Ensure loved ones can respond quickly in case of an emergency.</p>
            </div>
            <div className="use-case-card">
              <div className="use-case-icon">🎒</div>
              <h3>Child Commuting</h3>
              <p>Track your child's journey to school or activities with peace of mind.</p>
            </div>
            <div className="use-case-card">
              <div className="use-case-icon">🧗</div>
              <h3>Solo Traveler</h3>
              <p>Stay connected even in remote areas with global SIM support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech & Trust */}
      <section className="tech-trust" id="tech">
        <div className="container">
          <h2 className="section-title">Advanced Technology, Trusted Protection</h2>
          <div className="tech-content">
            <div className="tech-visual">
              <div className="circuit-pattern"></div>
              <div className="locket-3d"></div>
            </div>
            <ul className="tech-features">
              <li>Military-grade GPS chip for precise location tracking</li>
              <li>Works in tunnels and dense urban environments</li>
              <li>Global SIM support for worldwide connectivity</li>
              <li>128-bit encrypted sharing for maximum security</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq" id="faq">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-item">
            <button className="faq-question" onClick={() => handleFAQToggle(0)}>
              What if there's no internet?<span>+</span>
            </button>
            <div className={`faq-answer ${activeFAQ === 0 ? 'active' : ''}`}>
              The locket uses an embedded SIM for connectivity, so it works without internet on the wearer's end.
            </div>
          </div>
          <div className="faq-item">
            <button className="faq-question" onClick={() => handleFAQToggle(1)}>
              Can I change the emergency contact list?<span>+</span>
            </button>
            <div className={`faq-answer ${activeFAQ === 1 ? 'active' : ''}`}>
              Yes, you can update your emergency contacts anytime via our secure online portal.
            </div>
          </div>
          <div className="faq-item">
            <button className="faq-question" onClick={() => handleFAQToggle(2)}>
              What’s the battery life?<span>+</span>
            </button>
            <div className={`faq-answer ${activeFAQ === 2 ? 'active' : ''}`}>
              The locket provides 36 hours of continuous tracking on a single charge.
            </div>
          </div>
          <div className="faq-item">
            <button className="faq-question" onClick={() => handleFAQToggle(3)}>
              Is it waterproof?<span>+</span>
            </button>
            <div className={`faq-answer ${activeFAQ === 3 ? 'active' : ''}`}>
              Yes, the locket is IP68-rated, making it fully waterproof and dust-resistant.
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta" id="buy">
        <div className="container">
          <div className="final-cta-content">
            <h2>Your Loved One’s Safety is One Tap Away</h2>
            <p>Protect what matters most with PinkSync Locket.</p>
            <div className="cta-buttons">
              <a href="#buy" className="cta-button" onClick={(e) => { e.preventDefault(); setShowForm(true); }}>Preorder Now</a>
              <a href="#buy" className="cta-button cta-secondary" onClick={(e) => { e.preventDefault(); setShowForm(true); }}>Join Waitlist</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>
                <Image src="/assets/Logo.png" alt="PinkSync Logo" width={24} height={24} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                <span style={{ color: '#ff1a8c' }}>Pink</span><span style={{ color: '#ffffff' }}>Sync</span>
              </h3>
              <p>Empowering safety with cutting-edge technology.</p>
            </div>
            <div className="footer-section">
              <h3>Links</h3>
              <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#tech">Tech</a></li>
                <li><a href="#faq">FAQs</a></li>
                <li><a href="#buy">Buy</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Contact</h3>
              <ul>
                <li><a href="mailto:support@pinksync.com">cassini.corporation@gmail.com</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2025 PinkSync. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Form Modal */}
      {showForm && (
        <div className="modal-overlay">
          <div className={`modal-content glass ${submitMessage && !isLoading ? 'success' : ''}`}>
            <button className="close-button" onClick={() => setShowForm(false)}>
              ×
            </button>
            <h2 className="modal-title">Join Waitlist or Preorder</h2>
            {submitMessage && !isLoading ? (
              <div className="success-message">
                <p className="message">{submitMessage}</p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="modal-form">
                {isLoading ? (
                  <div className="loading-container">
                    <div className="loading-spinner"></div>
                  </div>
                ) : (
                  <>
                    <div className="form-group">
                      <label htmlFor="fullName">Full Name</label>
                      <input
                        type="text"
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="whatsappNumber">WhatsApp Number</label>
                      <input
                        type="tel"
                        id="whatsappNumber"
                        value={formData.whatsappNumber}
                        onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                        placeholder="e.g., +91 123 456 7890"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="ageGroup">Age Group</label>
                      <select
                        id="ageGroup"
                        value={formData.ageGroup}
                        onChange={(e) => setFormData({ ...formData, ageGroup: e.target.value })}
                        required
                      >
                        <option value="">Select Age Group</option>
                        <option value="Under 13">Under 13</option>
                        <option value="13-18">13-18</option>
                        <option value="18-24">18-24</option>
                        <option value="25-34">25-34</option>
                        <option value="35-44">35-44</option>
                        <option value="45+">45+</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="cityLocation">City / Location</label>
                      <input
                        type="text"
                        id="cityLocation"
                        value={formData.cityLocation}
                        onChange={(e) => setFormData({ ...formData, cityLocation: e.target.value })}
                        placeholder="Enter your city or location"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Who are you signing up for?</label>
                      <div className="radio-group">
                        {['Myself', 'My daughter', 'My sister', 'A friend', 'Other'].map((option) => (
                          <label key={option}>
                            <input
                              type="radio"
                              name="forWhom"
                              value={option}
                              checked={formData.forWhom === option}
                              onChange={(e) => setFormData({ ...formData, forWhom: e.target.value })}
                            />
                            {option}
                          </label>
                        ))}
                      </div>
                    </div>
                    <button type="submit" className="submit-button" disabled={isLoading}>
                      Submit
                    </button>
                  </>
                )}
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}