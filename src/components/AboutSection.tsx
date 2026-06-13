import React from 'react';

export default function AboutSection() {
  return (
    <section id="about" className="about-section overflow-hidden relative">
      <div className="about-container relative z-10">
        <div className="about-header">
          <span className="about-pre-title">WHO WE ARE</span>
          <h2 className="about-title">OXYGEN SPORTS ZONE</h2>
        </div>

        <div className="about-intro-box">
          <p className="about-intro-text">
            Oxygen Sports Zone is a sports facility located in Chattogram, Bangladesh, dedicated to promoting a healthy lifestyle through physical activity.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-block">
            <h3 className="about-block-title">Core Philosophy</h3>
            <p className="about-block-text">
              The organization operates on the belief that sports are essential for personal well-being. Their primary mission is to provide athletes—ranging from beginners to professionals—with the necessary resources and environment to reach their full potential.
            </p>
          </div>

          <div className="about-block">
            <h3 className="about-block-title">Facilities & Offerings</h3>
            <div className="about-list">
              <div className="about-list-item">
                <div className="about-list-dots"></div>
                <div className="about-list-content">
                  <span className="about-list-title">STATE-OF-THE-ART FACILITIES</span>
                  <span className="about-list-desc">Designed for high-performance training.</span>
                </div>
              </div>

              <div className="about-list-item">
                <div className="about-list-dots"></div>
                <div className="about-list-content">
                  <span className="about-list-title">INDOOR & OUTDOOR COURTS</span>
                  <span className="about-list-desc">Suitable for various sports disciplines.</span>
                </div>
              </div>

              <div className="about-list-item">
                <div className="about-list-dots"></div>
                <div className="about-list-content">
                  <span className="about-list-title">PLAYING FIELDS</span>
                  <span className="about-list-desc">Maintained for competitive and recreational use.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
