
import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  House, Search, UserRound, GraduationCap,
  ArrowRight, Menu
} from "lucide-react";
import Explore from "./Explore";
import "./styles.css";

function Welcome() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="welcome">
      <div className="image-wash" aria-hidden="true" />

      <header className="topbar">
        <a className="brand" href="/">
          <House className="brand-icon" strokeWidth={2.5} />
          <span>Campus <b>Stay</b></span>
        </a>

        <nav className={`nav-glass ${menuOpen ? "mobile-open" : ""}`} aria-label="Primary navigation">
          <a className="active" href="/">Home</a>
          <a href="/about">About</a>
          <a href="/features">Features</a>
          <a href="/contact">Contact</a>
        </nav>

        <div className="actions">
          <a className="search-button" href="/explore">
            <Search size={19} /> <span>Search</span>
          </a>
          <a className="login-button" href="/login">
            <UserRound size={18} /> <span>Login</span>
          </a>
          <button
            className="mobile-menu"
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <Menu />
          </button>
        </div>
      </header>

      <section className="hero-copy">
        <div className="eyebrow">
          <GraduationCap size={17} />
          <span>Student Accommodation</span><i />
        </div>

        <h1>Your Next Home<br /><em>Starts Here.</em></h1>

        <p>
          Discover comfortable and affordable student accommodation near campus.
        </p>

        <a className="primary-cta" href="/explore">
          Your Next Home <ArrowRight size={20} />
        </a>
      </section>

      <a className="scroll-cue" href="#about">
        <span />
      </a>

      <span className="image-credit">
        Campus Stay · Find a place that feels like home
      </span>
    </main>
  );
}

function SimpleHeader({ title }) {
  return (
    <header className="simple-header">
      <a className="simple-brand" href="/">
        <House size={27} />
        <span>Campus <b>Stay</b></span>
      </a>
      <nav aria-label={title}>
        <a href="/">Home</a>
        <a href="/explore">Explore</a>
      </nav>
    </header>
  );
}

function ContentPage({ title, eyebrow, children }) {
  return (
    <main className="content-page">
      <SimpleHeader title={title} />
      <section className="content-shell">
        <span className="section-eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        {children}
      </section>
    </main>
  );
}

function LoginPage() {
  const [accountType, setAccountType] = useState("Student");
  const [mode, setMode] = useState("Login");
  const [message, setMessage] = useState("");

  return (
    <main className="content-page">
      <SimpleHeader title="Account access" />
      <section className="auth-shell">
        <div className="auth-card">
          <span className="section-eyebrow">{accountType.toUpperCase()} ACCOUNT</span>
          <h1>{mode}</h1>
          <p>Authentication will become available when the Campus Stay API is connected.</p>

          <div className="auth-tabs" role="tablist" aria-label="Account type">
            {["Student", "Landlord"].map((type) => (
              <button
                type="button"
                role="tab"
                aria-selected={accountType === type}
                className={accountType === type ? "active" : ""}
                onClick={() => setAccountType(type)}
                key={type}
              >
                {type}
              </button>
            ))}
          </div>

          <form onSubmit={(event) => {
            event.preventDefault();
            setMessage("This form is ready for API connection; no account action was sent.");
          }}>
            {mode === "Register" && (
              <label>
                Full name
                <input name="name" type="text" autoComplete="name" required />
              </label>
            )}
            <label>
              Email address
              <input name="email" type="email" autoComplete="email" required />
            </label>
            <label>
              Password
              <input name="password" type="password" minLength={8} autoComplete={mode === "Login" ? "current-password" : "new-password"} required />
            </label>
            <button className="auth-submit" type="submit">{mode}</button>
          </form>

          {message && <p className="form-message" role="status">{message}</p>}
          <button
            type="button"
            className="mode-switch"
            onClick={() => {
              setMode((current) => current === "Login" ? "Register" : "Login");
              setMessage("");
            }}
          >
            {mode === "Login" ? "Create an account" : "Already have an account? Log in"}
          </button>
        </div>
      </section>
    </main>
  );
}

function PropertyPage() {
  return (
    <ContentPage title="Property unavailable" eyebrow="PROPERTY DETAILS">
      <div className="not-connected">
        <h2>No verified property was provided.</h2>
        <p>
          Property photographs, pricing, landlord information and application actions require
          a verified listing from the Campus Stay API.
        </p>
        <a className="text-action" href="/explore">Browse available accommodation</a>
      </div>
    </ContentPage>
  );
}

function App() {
  const [path, setPath] = useState(window.location.pathname.replace(/\/+$/, "") || "/");

  useEffect(() => {
    const updatePath = () => setPath(window.location.pathname.replace(/\/+$/, "") || "/");
    window.addEventListener("popstate", updatePath);
    return () => window.removeEventListener("popstate", updatePath);
  }, []);

  if (path === "/explore") return <Explore />;
  if (path === "/login" || path === "/register") return <LoginPage />;
  if (path === "/property") return <PropertyPage />;
  if (path === "/about") {
    return (
      <ContentPage title="About Campus Stay" eyebrow="WHO WE ARE">
        <p className="content-lede">Campus Stay is being developed to help students find accommodation near campus through clear, verified listings.</p>
      </ContentPage>
    );
  }
  if (path === "/features") {
    return (
      <ContentPage title="Student and landlord tools" eyebrow="PLATFORM FEATURES">
        <div className="feature-grid">
          <article><h2>Students</h2><p>Browse accommodation, review property details and submit applications when listings are connected.</p></article>
          <article><h2>Landlords</h2><p>Create listings, manage availability and review applications when property management is connected.</p></article>
        </div>
      </ContentPage>
    );
  }
  if (path === "/contact") {
    return (
      <ContentPage title="Contact" eyebrow="GET IN TOUCH">
        <p className="content-lede">A verified support contact will be published before the platform receives student or landlord enquiries.</p>
      </ContentPage>
    );
  }
  return <Welcome />;
}

createRoot(document.getElementById("root")).render(<App />);