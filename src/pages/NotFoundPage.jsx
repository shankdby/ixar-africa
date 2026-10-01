import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="page-wrapper">
      <section className="section-container" style={{ padding: '96px 24px', textAlign: 'center' }}>
        <p style={{ fontSize: '0.9rem', letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.6 }}>
          Error 404
        </p>
        <h1 className="section-title">Page not found</h1>
        <p className="section-subtitle" style={{ maxWidth: '620px', margin: '0 auto 32px' }}>
          The page you were looking for has moved or no longer exists. The links
          below cover everything IXAR delivers in Africa.
        </p>
        <nav
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '12px 24px',
            justifyContent: 'center'
          }}
        >
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/experience">Experience</Link>
          <Link to="/careers">Jobs @ IXAR</Link>
          <Link to="/contact">Contact Us</Link>
        </nav>
      </section>
    </div>
  );
}
