import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export default function Footer() {
  // Smooth scroll helper
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const footerRef = useRef<HTMLDivElement>(null);
  
  // Track window size to adapt parallax numbers for mobile seamlessly
  const [isMobile, setIsMobile] = React.useState(false);
  
  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // =========================================================================
  // ⚽ FOOTBALL PARALLAX & POSITIONING CONTROLS
  // Modify these values directly to control the animation and resting position:
  // =========================================================================
  const startY = isMobile ? 520 : 820;        // Start position in pixels below (Higher = comes from deeper below for more parallax)
  const endY = isMobile ? 220 : 350;          // Final resting position in pixels (Increasing this shifts the football DOWN)
  const startRotate = -280;  // Initial rotation in degrees when out of view (Negative = rolls clockwise as it scrolls into view)
  const endRotate = 0;       // Final rotation at full scroll (0 = perfectly upright)
  // =========================================================================

  // Track scroll position of the footer component in the viewport
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"]
  });

  // Calculate parallax transform coordinates
  const y = useTransform(scrollYProgress, [0, 1], [startY, endY]);
  const rotate = useTransform(scrollYProgress, [0, 1], [startRotate, endRotate]);

  return (
    <>
      {/* Import Antonio and Plus Jakarta Sans */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Antonio:wght@700&family=Plus+Jakarta+Sans:wght@300;400;500;600&display=swap');
        
        .oxy-footer {
          background-color: #000000 !important;
          color: #ffffff !important;
          padding: 60px 4% 50px 4% !important;
          font-family: 'Plus Jakarta Sans', sans-serif !important;
          width: 100% !important;
          box-sizing: border-box !important;
          position: relative !important;
          overflow: visible !important;
        }

        .oxy-footer * {
          box-sizing: border-box !important;
        }

        .oxy-footer-container {
          width: 100% !important;
          margin: 0 auto !important;
          display: flex !important;
          flex-direction: column !important;
          gap: 0px !important;
          position: relative !important;
          overflow: visible !important;
        }

        /* Container that lets the SVG scale naturally and compensates for side bearings */
        .oxy-footer-logo-wrap {
          width: 102% !important;
          margin-left: -1% !important;
          overflow: visible !important;
          padding: 0 !important;
          margin: 0 !important; /* Kept clean so translateY is your master control */
          
          /* ========================================================================= */
          /* 🚀 INDEPENDENT LOGO TEXT MOVEMENT CONTROL                                 */
          /* To move the text up or down INDEPENDENTLY of the football and grid below, */
          /* change the translateY pixel value here:                                  */
          /*   - Positives (e.g. 30px) shifts the text DOWN                           */
          /*   - Negatives (e.g. -30px) shifts the text UP                             */
          /* ========================================================================= */
          transform: translateY(110px) !important; 
        }

        @media (min-width: 768px) {
          .oxy-footer-logo-wrap {
            transform: translateY(280px) !important;
          }
        }

        .oxy-footer-grid {
          display: grid !important;
          grid-template-columns: 1fr !important;
          gap: 40px !important;
          margin-top: 260px !important; /* Mobile space */
        }

        @media (min-width: 768px) {
          .oxy-footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 80px !important;
            margin-top: 310px !important; /* Increased to make space for the 40% wider/taller football */
          }
        }

        .oxy-footer-left {
          display: flex !important;
          flex-direction: column !important;
          justify-content: space-between !important;
          align-items: flex-start !important;
          gap: 32px !important;
        }

        .oxy-footer-desc {
          color: #ffffff !important;
          font-size: 15px !important;
          font-weight: 300 !important;
          line-height: 1.5 !important;
          letter-spacing: 0.01em !important;
          margin: 0 !important;
        }

        .oxy-footer-links-list {
          display: flex !important;
          flex-direction: column !important;
          align-items: flex-start !important;
          gap: 12px !important;
        }

        /* Clean resets for buttons and anchors to prevent browser defaults */
        .oxy-footer-link {
          background: transparent !important;
          border: none !important;
          border-bottom: 1px solid rgba(255, 255, 255, 0.85) !important;
          color: #ffffff !important;
          padding: 0 0 1px 0 !important;
          margin: 0 !important;
          font-family: inherit !important;
          font-size: 15px !important;
          font-weight: 400 !important;
          text-decoration: none !important;
          cursor: pointer !important;
          display: inline-flex !important;
          align-items: center !important;
          gap: 6px !important;
          transition: opacity 0.2s ease !important;
          outline: none !important;
          line-height: 1.2 !important;
        }

        .oxy-footer-link:hover {
          opacity: 0.7 !important;
        }

        .oxy-footer-link .arrow {
          display: inline-block !important;
          transition: transform 0.2s ease !important;
          font-size: 14px !important;
        }

        .oxy-footer-link:hover .arrow {
          transform: translate(1px, -1px) !important;
        }

        .oxy-footer-right {
          display: flex !important;
          flex-direction: column !important;
          justify-content: space-between !important;
          align-items: flex-end !important;
          text-align: right !important;
          gap: 32px !important;
        }

        .oxy-footer-right-links {
          display: flex !important;
          flex-direction: column !important;
          align-items: flex-end !important;
          gap: 12px !important;
          width: 100% !important;
        }

        .oxy-footer-copyright {
          color: #737373 !important;
          font-size: 13px !important;
          font-weight: 300 !important;
          line-height: 1.4 !important;
          letter-spacing: 0.01em !important;
          margin: 0 !important;
          user-select: none !important;
        }
      `}} />

      <footer className="oxy-footer" ref={footerRef}>
        <div className="oxy-footer-container">
          
          {/* Giant Brand Header with Centered Parallax Rotating Football */}
          <div className="relative w-full overflow-visible flex justify-center py-4">
            
            {/* SVG Header for Perfect Edge-to-Edge Alignment */}
            <div className="oxy-footer-logo-wrap">
              <svg 
                viewBox="0 0 1000 270" 
                className="w-full h-auto overflow-visible select-none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <text 
                  x="0" 
                  y="260" 
                  textLength="1000" 
                  lengthAdjust="spacingAndGlyphs" 
                  fontFamily="'Antonio', sans-serif" 
                  fontWeight="700" 
                  fontSize="140" 
                  fill="#ffffff"
                  transform="scale(1, 1.8)"
                  transformOrigin="50% 260"
                  style={{ userSelect: 'none' }}
                >
                  OXYGEN-SPORTS
                </text>
              </svg>
            </div>

            {/* Parallax Rotating Football Centered Over the Logo */}
            <motion.div
              style={{ y, rotate, transformOrigin: 'center center' }}
              className="absolute left-1/2 -translate-x-1/2 bottom-[-200px] md:bottom-[-260px] w-[105vw] md:w-[67vw] max-w-[742px] aspect-square z-10 pointer-events-none select-none flex items-center justify-center overflow-visible"
            >
              <img 
                src="https://res.cloudinary.com/dtj7qzev2/image/upload/q_auto/f_auto/v1781356407/Make_football_background_black_202606131912_wlyqda.png"
                className="w-full h-full object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.95)]"
                alt="Rotating Football"
                referrerPolicy="no-referrer"
              />
            </motion.div>

          </div>

          {/* Bottom Columns Grid */}
          <div className="oxy-footer-grid">
            
            {/* Left Side: Description & Action Links */}
            <div className="oxy-footer-left">
              <div className="max-w-sm">
                <p className="oxy-footer-desc">
                  Professional coaching and<br />
                  modern training programs<br />
                  designed to help athletes grow<br />
                  stronger and perform better.
                </p>
              </div>

              {/* Left Action Links */}
              <div className="oxy-footer-links-list">
                <button 
                  onClick={() => handleScroll('hero-section')}
                  className="oxy-footer-link"
                >
                  <span>Quick Links</span>
                  <span className="arrow">↗</span>
                </button>

                <button 
                  onClick={() => handleScroll('facilities')}
                  className="oxy-footer-link"
                >
                  <span>Facilities</span>
                  <span className="arrow">↗</span>
                </button>

                <button 
                  onClick={() => handleScroll('about')}
                  className="oxy-footer-link"
                >
                  <span>Support Links</span>
                  <span className="arrow">↗</span>
                </button>
              </div>
            </div>

            {/* Right Side: Right Links & Copyright */}
            <div className="oxy-footer-right">
              {/* Contacts/Info Links */}
              <div className="oxy-footer-right-links">
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="oxy-footer-link"
                >
                  <span>Address</span>
                  <span className="arrow">↗</span>
                </a>

                <a 
                  href="tel:+880123456789"
                  className="oxy-footer-link"
                >
                  <span>Phone</span>
                  <span className="arrow">↗</span>
                </a>

                <a 
                  href="mailto:info@oxyarena.com"
                  className="oxy-footer-link"
                >
                  <span>Email</span>
                  <span className="arrow">↗</span>
                </a>
              </div>

              {/* Copyright Info */}
              <div className="oxy-footer-copyright">
                <p>© 2026 OxyArena Sports Center.</p>
                <p>All Rights Reserved.</p>
              </div>
            </div>

          </div>
        </div>
      </footer>
    </>
  );
}
