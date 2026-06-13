import React from 'react';
import { menuItems } from '../constants';

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  hoveredIdx: number;
  onHoverIdxChange: (idx: number) => void;
  onActionClick: () => void;
}

export default function MenuOverlay({
  isOpen,
  onClose,
  hoveredIdx,
  onHoverIdxChange,
  onActionClick
}: MenuOverlayProps) {
  return (
    <div className={`menu-overlay ${isOpen ? 'open' : ''}`}>
      {/* Ambient Dark Mesh Overlay & Previews Container */}
      <div className="menu-previews">
        {menuItems.map((item, idx) => (
          <div
            key={idx}
            className={`menu-preview-image ${hoveredIdx === idx ? 'active' : ''}`}
            style={{ backgroundImage: `url(${item.image})` }}
          />
        ))}
      </div>

      {/* Menu content wrapper */}
      <div className="menu-content">
        <nav className="menu-list">
          {menuItems.map((item, idx) => (
            <div
              key={idx}
              className="menu-link-wrapper"
              style={{ '--stagger-idx': idx } as React.CSSProperties}
              onMouseEnter={() => onHoverIdxChange(idx)}
            >
              {/* Dynamic Elite White Bullet with minimal subtle glow */}
              <span
                className="menu-bullet"
                style={hoveredIdx === idx ? {
                  backgroundColor: "#ffffff",
                  borderColor: "#ffffff",
                  boxShadow: `0 0 12px 2px rgba(255, 255, 255, 0.35)`
                } : undefined}
              />

              {/* Title */}
              <span 
                className="menu-link-title"
                onClick={() => {
                  onClose();
                  if (item.title === "FACILITIES") {
                    setTimeout(() => {
                      const el = document.getElementById("facilities");
                      if (el) {
                        el.scrollIntoView({ behavior: "smooth" });
                      }
                    }, 250);
                  } else if (item.title === "ABOUT") {
                    setTimeout(() => {
                      const el = document.getElementById("about");
                      if (el) {
                        el.scrollIntoView({ behavior: "smooth" });
                      }
                    }, 250);
                  } else if (item.title === "BOOK NOW" || item.title === "BOOKING") {
                    setTimeout(() => {
                      const el = document.getElementById("booking");
                      if (el) {
                        el.scrollIntoView({ behavior: "smooth" });
                      }
                    }, 250);
                  } else if (item.title === "GALLERY") {
                    setTimeout(() => {
                      const el = document.getElementById("gallery");
                      if (el) {
                        el.scrollIntoView({ behavior: "smooth" });
                      }
                    }, 250);
                  } else {
                    onActionClick();
                  }
                }}
                style={hoveredIdx === idx ? { color: '#faf7f2' } : undefined}
              >
                {item.title}
              </span>

              {/* Divider Line */}
              <div className="menu-link-divider" />

              {/* Description */}
              <p className="menu-link-desc">
                {item.desc}
              </p>
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}
