import React from 'react';
import { facilitiesData } from '../constants';

export default function FacilitiesSection() {
  return (
    <section id="facilities" className="facilities-section">
      <div className="facilities-header">
        <span className="facilities-pre-title">OUR SPACES</span>
        <h2 className="facilities-title">PLAY & PERFORM</h2>
      </div>

      <div className="facilities-grid">
        {facilitiesData.map((fac) => (
          <div
            key={fac.id}
            className={`facility-card ${fac.colSpan}`}
            style={{ borderRadius: fac.borderRadius }}
            id={`facility-card-${fac.id}`}
          >
            <div
              className="facility-card-bg"
              style={{ backgroundImage: `url(${fac.image})` }}
            />
            <div className="facility-card-overlay" />
            
            <div className="facility-card-content">
              <h3 className="facility-card-title">{fac.title}</h3>
              <p className="facility-card-subtitle">{fac.subtitle}</p>
            </div>

            <div className="facility-card-badge">
              {fac.badge}
            </div>

            <div className="facility-card-glow" />
          </div>
        ))}
      </div>
    </section>
  );
}
