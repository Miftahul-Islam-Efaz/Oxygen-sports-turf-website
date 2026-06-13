import React, { useState } from 'react';
import { letterGeometries, word, bgImage, menuItems } from './constants';
import AboutSection from './components/AboutSection';
import FacilitiesSection from './components/FacilitiesSection';
import MenuOverlay from './components/MenuOverlay';
import BookingFooter from './components/BookingFooter';
import BookingSection from './components/BookingSection';
import GallerySection from './components/GallerySection';
import FooterSection from './components/FooterSection';

export default function App() {
  const [pulse, setPulse] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState<number>(0);

  // Booking option state
  const [selectedGame, setSelectedGame] = useState("Football");
  const [selectedDate, setSelectedDate] = useState("2026-06-18");
  const [activeDropdown, setActiveDropdown] = useState<"game" | "date" | null>(null);
  const [bookingStatus, setBookingStatus] = useState<"searching" | "booked" | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Close drop-downs when clicking outside
  React.useEffect(() => {
    const handleOutsideClick = () => {
      setActiveDropdown(null);
    };
    window.addEventListener("click", handleOutsideClick);
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  // Track window scroll offset to compress and stick navbar
  React.useEffect(() => {
    const handleScrollState = () => {
      if (window.scrollY > 120) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScrollState, { passive: true });
    handleScrollState(); // run once on mount
    return () => {
      window.removeEventListener("scroll", handleScrollState);
    };
  }, []);

  // Handle scroll lock during Menu Overlay state
  React.useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("no-scroll");
      document.documentElement.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
      document.documentElement.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
      document.documentElement.classList.remove("no-scroll");
    };
  }, [isMenuOpen]);

  // Layout geometry calculations
  const gap = 15;
  let currentX = 0;
  const letterPositions = [];

  for (let i = 0; i < word.length; i++) {
    const char = word[i].toUpperCase();
    const geom = letterGeometries[char] || letterGeometries['I'];
    letterPositions.push({
      char,
      xOffset: currentX,
      width: geom.width,
      path: geom.path
    });
    currentX += geom.width + gap;
  }

  const totalWidth = currentX - gap;

  // Warp calculations
  const top_side = 0;
  const bottom_side = isMobile ? 750 : 295;
  const bottom_center = isMobile ? 320 : 120;
  const cx = totalWidth / 2;

  const curve_top = () => top_side;

  const curve_bottom = (x: number) => {
    const dx = (x - cx) / cx;
    return bottom_center + (bottom_side - bottom_center) * (dx * dx);
  };

  const warpY = (x: number, y: number) => {
    const yn = y / 100;
    const y_top = curve_top();
    const y_bottom = curve_bottom(x);
    return y_top + yn * (y_bottom - y_top);
  };

  const warpPath = (pathStr: string, xOffset: number) => {
    const tokens = pathStr.match(/[MLCZ]|[-+]?\d*\.?\d+/g) || [];
    let i = 0;
    let warpedTokens = [];
    let currentCmd = '';

    while (i < tokens.length) {
      const token = tokens[i];
      if (['M', 'L', 'C', 'Z'].includes(token)) {
        currentCmd = token;
        warpedTokens.push(token);
        i++;
      } else {
        if (currentCmd === 'M' || currentCmd === 'L') {
          const x = parseFloat(tokens[i]);
          const y = parseFloat(tokens[i+1]);
          const px = xOffset + x;
          const wy = warpY(px, y);
          warpedTokens.push(`${px.toFixed(2)},${wy.toFixed(2)}`);
          i += 2;
        } else if (currentCmd === 'C') {
          const x1 = parseFloat(tokens[i]);
          const y1 = parseFloat(tokens[i+1]);
          const x2 = parseFloat(tokens[i+2]);
          const y2 = parseFloat(tokens[i+3]);
          const x = parseFloat(tokens[i+4]);
          const y = parseFloat(tokens[i+5]);

          const px1 = xOffset + x1;
          const wy1 = warpY(px1, y1);
          const px2 = xOffset + x2;
          const wy2 = warpY(px2, y2);
          const px = xOffset + x;
          const wy = warpY(px, y);

          warpedTokens.push(`${px1.toFixed(2)},${wy1.toFixed(2)} ${px2.toFixed(2)},${wy2.toFixed(2)} ${px.toFixed(2)},${wy.toFixed(2)}`);
          i += 6;
        } else {
          warpedTokens.push(token);
          i++;
        }
      }
    }
    return warpedTokens.join(' ');
  };

  const handleControlClick = () => {
    setPulse(true);
    setTimeout(() => setPulse(false), 500);
  };

  // Click handler that can anchor smoothly down to sections if clicked on top nav items
  const handleTopNavClick = (idx: number, title: string) => {
    if (title === "FACILITIES") {
      setIsMenuOpen(false);
      const el = document.getElementById("facilities");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else if (title === "ABOUT") {
      setIsMenuOpen(false);
      const el = document.getElementById("about");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else if (title === "BOOKING" || title === "BOOK NOW") {
      setIsMenuOpen(false);
      const el = document.getElementById("booking");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else if (title === "GALLERY") {
      setIsMenuOpen(false);
      const el = document.getElementById("gallery");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      setHoveredIdx(idx);
      setIsMenuOpen(true);
    }
  };

  // Slice first three items dynamically as requested
  const topNavItems = menuItems.slice(0, 3);

  return (
    <div className="bg-black min-h-screen">
      {/* Floating minimalist premium header shown ONLY when scrolled */}
      <header className={`top-nav-fixed ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open-hide' : ''}`} id="floating-header">
        <div className="nav-items-wrapper">
          {topNavItems.map((item, idx) => (
            <React.Fragment key={idx}>
              {idx > 0 && <div className="nav-line"></div>}
              <span 
                className="nav-item" 
                onClick={() => handleTopNavClick(idx, item.title)}
              >
                {item.title}
              </span>
            </React.Fragment>
          ))}
        </div>

        {/* Elegant Scrolled Hamburger Menu button */}
        <button 
          className={`scrolled-hamburger-btn ${isMenuOpen ? 'open' : ''}`}
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
            setHoveredIdx(0);
          }}
          aria-label="Toggle Menu"
          type="button"
        >
          <div className="hamburger-box">
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </div>
        </button>
      </header>

      <section id="hero-section" className="hero-container relative">
        <MenuOverlay
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
          hoveredIdx={hoveredIdx}
          onHoverIdxChange={setHoveredIdx}
          onActionClick={handleControlClick}
        />

        {/* Hero background view */}
        <div className="background-slide active" style={{ backgroundImage: `url(${bgImage})` }}></div>
        <div className="background-overlay"></div>

        {/* Main Connected Header Navigation (Static inside Hero Container to preserve layout) */}
        <header className={`top-nav ${isMenuOpen ? 'menu-open-hide' : ''}`} id="main-header">
          {topNavItems.map((item, idx) => (
            <React.Fragment key={idx}>
              {idx > 0 && <div className="nav-line"></div>}
              <span 
                className="nav-item" 
                onClick={() => handleTopNavClick(idx, item.title)}
              >
                {item.title}
              </span>
            </React.Fragment>
          ))}
        </header>

        {/* Hero Brand Header Area */}
        <main className="hero-main" id="hero-main-content">
          <div id="svg-text-container" className="svg-text-container">
            <svg viewBox={`0 0 ${totalWidth} ${isMobile ? 760 : 300}`} xmlns="http://www.w3.org/2000/svg" className={pulse ? "fade-in-text" : ""}>
              {letterPositions.map((pos, idx) => (
                <path
                  key={idx}
                  d={warpPath(pos.path, pos.xOffset)}
                  className="svg-letter-path"
                  fillRule="evenodd"
                />
              ))}
            </svg>
          </div>
        </main>

        <BookingFooter
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          selectedGame={selectedGame}
          setSelectedGame={setSelectedGame}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          activeDropdown={activeDropdown}
          setActiveDropdown={setActiveDropdown}
          bookingStatus={bookingStatus}
          setBookingStatus={setBookingStatus}
          setHoveredIdx={setHoveredIdx}
        />
      </section>

      <FacilitiesSection />

      <AboutSection />

      <BookingSection />

      <GallerySection />

      {/* Dedicated visual spacer to move the footer section down and provide premium negative space */}
      <div id="gallery-footer-spacer" className="h-24 sm:h-36 md:h-48 bg-black flex items-center justify-center pointer-events-none">
        <div className="w-[1px] h-16 bg-gradient-to-b from-neutral-800 to-transparent" />
      </div>

      <FooterSection />
    </div>
  );
}
