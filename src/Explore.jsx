
import React, { useState } from "react";
import {
  House,
  MapPin,
  SlidersHorizontal,
  BedDouble,
  Wifi,
  ShieldCheck,
  Car,
  Wind,
  ChevronDown,
  ArrowUpDown,
  Filter,
} from "lucide-react";

export default function Explore() {
  const [location, setLocation] = useState("");
  const [roomType, setRoomType] = useState("Any room type");
  const [maxPrice, setMaxPrice] = useState("");
  const [amenities, setAmenities] = useState([]);
  const [availability, setAvailability] = useState("Any availability");
  const [sortBy, setSortBy] = useState("Newest");

  const toggleAmenity = (name) => {
    setAmenities((currentAmenities) =>
      currentAmenities.includes(name)
        ? currentAmenities.filter((amenity) => amenity !== name)
        : [...currentAmenities, name]
    );
  };

  const resetFilters = () => {
    setLocation("");
    setRoomType("Any room type");
    setMaxPrice("");
    setAmenities([]);
    setAvailability("Any availability");
    setSortBy("Newest");
  };

  return (
    <main className="explore-page">
      <header className="explore-header">
        <a className="explore-brand" href="/">
          <House size={29} />
          <span>
            Campus <b>Stay</b>
          </span>
        </a>

        <nav className="explore-nav">
          <a href="/">Home</a>
          <a className="selected" href="/explore">
            Explore
          </a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>

        <a href="/login" className="explore-login">
          Login
        </a>
      </header>

      <section className="explore-heading">
        <div>
          <span className="section-eyebrow">FIND YOUR SPACE</span>
          <h1>Explore Accommodation</h1>
          <p>Find a comfortable place to call home while you study.</p>
        </div>
      </section>

      <section className="explore-layout">
        <aside className="filter-sidebar">
          <div className="filter-title">
            <h2>
              <SlidersHorizontal size={19} /> Filters
            </h2>
            <button type="button" onClick={resetFilters}>
              Clear all
            </button>
          </div>

          <div className="filter-group">
            <label>Location</label>
            <div className="filter-input">
              <MapPin size={17} />
              <input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter location"
              />
            </div>
          </div>

          <div className="filter-group">
            <label>Maximum monthly price (KSh)</label>
            <input
              className="plain-input"
              type="number"
              min="0"
              placeholder="Enter maximum price"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
          </div>

          <div className="filter-group">
            <label>Room type</label>
            <select value={roomType} onChange={(e) => setRoomType(e.target.value)}>
              <option>Any room type</option>
              <option>Single room</option>
              <option>Bedsitter</option>
              <option>Studio</option>
              <option>One bedroom</option>
            </select>
          </div>

          <div className="filter-group">
            <label>Availability</label>
            <select value={availability} onChange={(e) => setAvailability(e.target.value)}>
              <option>Any availability</option>
              <option>Available now</option>
              <option>Available soon</option>
            </select>
          </div>

          <div className="filter-group">
            <label>Amenities</label>
            <div className="amenity-options">
              {[
                ["Wi-Fi", Wifi],
                ["Security", ShieldCheck],
                ["Parking", Car],
                ["Air conditioning", Wind],
              ].map(([name, Icon]) => (
                <label className="amenity-option" key={name}>
                  <input
                    type="checkbox"
                    checked={amenities.includes(name)}
                    onChange={() => toggleAmenity(name)}
                  />
                  <Icon size={17} />
                  {name}
                </label>
              ))}
            </div>
          </div>

          <button type="button" className="apply-filters" onClick={() => {}}>
            <Filter size={17} /> Apply filters
          </button>
        </aside>

        <div className="property-results">
          <div className="results-toolbar">
            <div>
              <h2>Available accommodation</h2>
              <p>Verified listings will appear here.</p>
            </div>
            <label className="sort-button">
              <ArrowUpDown size={16} />
              <span className="sr-only">Sort listings</span>
              <select value={sortBy} onChange={(event) => setSortBy(event.target.value)}>
                <option>Newest</option>
                <option>Price: Low to high</option>
                <option>Price: High to low</option>
              </select>
              <ChevronDown size={15} aria-hidden="true" />
            </label>
          </div>

          <div className="empty-properties">
            <div className="empty-icon">
              <BedDouble size={34} />
            </div>
            <h3>No verified listings yet</h3>
            <p>
              We&apos;re preparing accommodation listings for students. Check back when
              verified properties become available.
            </p>
            <button type="button" onClick={resetFilters}>
              Clear search filters
            </button>
          </div>
        </div>
      </section>

      <footer className="explore-footer">
        <span>Campus Stay</span>
        <span>Find a place that feels like home.</span>
      </footer>
    </main>
  );
}
