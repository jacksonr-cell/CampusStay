import React from "react";
import { createRoot } from "react-dom/client";
import { House, Search, UserRound, GraduationCap, ArrowRight, Menu } from "lucide-react";
import "./styles.css";

function App() {
  return (
    <main className="welcome">
      <div className="image-wash" aria-hidden="true" />
      <header className="topbar">
        <a className="brand" href="/" aria-label="Campus Stay home">
          <House className="brand-icon" strokeWidth={2.5} />
          <span>Campus <b>Stay</b></span>
        </a>
        <nav className="nav-glass" aria-label="Main navigation">
          <a className="active" href="/">Home</a>
          <a href="/about">About</a>
          <a href="/features">Features</a>
          <a href="/contact">Contact</a>
        </nav>
        <div className="actions">
          <a className="search-button" href="/explore"><Search size={19} /> <span>Search</span></a>
          <a className="login-button" href="/login"><UserRound size={18} fill="currentColor" /> <span>Login</span></a>
          <button className="mobile-menu" aria-label="Open navigation"><Menu /></button>
        </div>
      </header>
      <section className="hero-copy">
        <div className="eyebrow"><GraduationCap size={17} /> <span>Student Accommodation</span><i /></div>
        <h1>Your Next Home<br /><em>Starts Here.</em></h1>
        <p>Discover comfortable and affordable student accommodation near campus.</p>
        <a className="primary-cta" href="/explore">Your Next Home <ArrowRight size={20} /></a>
      </section>
      <a className="scroll-cue" href="#about" aria-label="Scroll to learn more"><span /></a>
      <span className="image-credit">Campus Stay · Find a place that feels like home</span>
    </main>
  );
}
createRoot(document.getElementById("root")).render(<App />);
