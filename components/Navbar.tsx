"use client";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <a href="#" className="logo">
        CODE<span>ARA</span>
      </a>

      {/* Desktop */}
      <div className="nav-links desktop">
        <a href="#services">Services</a>
        <a href="#work">Work</a>
        <a href="#process">Process</a>
        <a href="#contact" className="nav-cta">Get Started</a>
      </div>

      {/* Mobile Button */}
      <button className="menu-btn" onClick={() => setOpen(!open)}>
        ☰
      </button>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${open ? "open" : ""}`}>
        <a href="#services" onClick={() => setOpen(false)}>Services</a>
        <a href="#work" onClick={() => setOpen(false)}>Work</a>
        <a href="#process" onClick={() => setOpen(false)}>Process</a>
        <a href="#contact" className="nav-cta" onClick={() => setOpen(false)}>
          Get Started
        </a>
      </div>
    </nav>
  );
}