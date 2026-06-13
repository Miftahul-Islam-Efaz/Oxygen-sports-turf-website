import React from 'react';
import { selectableGames } from '../constants';

interface BookingFooterProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  selectedGame: string;
  setSelectedGame: (game: string) => void;
  selectedDate: string;
  setSelectedDate: (date: string) => void;
  activeDropdown: "game" | "date" | null;
  setActiveDropdown: (val: "game" | "date" | null) => void;
  bookingStatus: "searching" | "booked" | null;
  setBookingStatus: (status: "searching" | "booked" | null) => void;
  setHoveredIdx: (idx: number) => void;
}

export default function BookingFooter({
  isMenuOpen,
  setIsMenuOpen,
  selectedGame,
  setSelectedGame,
  selectedDate,
  setSelectedDate,
  activeDropdown,
  setActiveDropdown,
  bookingStatus,
  setBookingStatus,
  setHoveredIdx
}: BookingFooterProps) {

  const formatDateString = (dateStr: string) => {
    const parts = dateStr.split('-');
    if (parts.length !== 3) return dateStr;
    const day = parts[2];
    return `June ${parseInt(day, 10)}`;
  };

  const handleSearchBooking = () => {
    setBookingStatus("searching");
    setTimeout(() => {
      setBookingStatus("booked");
    }, 1500);
  };

  return (
    <footer className="bottom-layout" id="main-footer" style={{ zIndex: isMenuOpen ? 100 : 10 }}>
      {/* Custom Interactive Premium Booking Widget */}
      <div className={`booking-widget-card ${isMenuOpen ? 'menu-active' : ''}`} id="info-box-left">
        <div className="booking-widget-controls">
          {/* Pika Game Button Group (click-to-show games list) */}
          <div className="booking-control-group relative">
            <button 
              className="booking-btn-select" 
              id="btn-pika-game" 
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setActiveDropdown(activeDropdown === 'game' ? null : 'game');
              }}
            >
              <span className="booking-label">GAME</span>
              <span className="booking-value">{selectedGame}</span>
            </button>
            
            {activeDropdown === 'game' && (
              <div 
                className="premium-dropdown games-dropdown" 
                id="popup-games-list"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="dropdown-glow-top"></div>
                <p className="dropdown-header">AVAILABLE CODES</p>
                <div className="games-grid">
                  {selectableGames.map((game) => (
                    <div 
                      key={game} 
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedGame(game);
                        setActiveDropdown(null);
                      }} 
                      className={`game-item-option ${selectedGame === game ? 'selected' : ''}`}
                    >
                      <span className="option-indicator"></span>
                      <span className="option-name">{game}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Inter-button divider bar */}
          <div className="booking-inter-divider"></div>

          {/* Pick a Date Button Group (click-to-show custom calendar grid) */}
          <div className="booking-control-group relative">
            <button 
              className="booking-btn-select" 
              id="btn-pick-date" 
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setActiveDropdown(activeDropdown === 'date' ? null : 'date');
              }}
            >
              <span className="booking-label">DATE</span>
              <span className="booking-value">{formatDateString(selectedDate)}</span>
            </button>

            {activeDropdown === 'date' && (
              <div 
                className="premium-dropdown calendar-dropdown" 
                id="popup-calendar"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="dropdown-glow-top"></div>
                <div className="calendar-header-row">
                  <span className="calendar-month-year">JUNE 2026</span>
                  <span className="calendar-subtitle">OPERATIVE TARGET</span>
                </div>
                <div className="calendar-weekdays">
                  <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>
                </div>
                <div className="calendar-days-grid">
                  {Array.from({ length: 30 }, (_, i) => i + 1).map((day) => {
                    const dateStr = `2026-06-${day.toString().padStart(2, '0')}`;
                    const isSelected = selectedDate === dateStr;
                    return (
                      <button
                        key={day}
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedDate(dateStr);
                          setActiveDropdown(null);
                        }}
                        className={`calendar-day-btn ${isSelected ? 'selected' : ''}`}
                      >
                        {day}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Search Action Trigger */}
          <button 
            className="booking-btn-search" 
            id="btn-booking-search"
            onClick={handleSearchBooking}
            aria-label="Search Bookings"
            type="button"
          >
            <svg viewBox="0 0 24 24" className="search-btn-icon">
              <path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" fill="currentColor"/>
            </svg>
          </button>
        </div>

        {/* In-container Booking Search notifications/confirmation */}
        {bookingStatus && (
          <div className={`booking-status-feedback-bar ${bookingStatus}`} id="booking-feedback">
            {bookingStatus === 'searching' && (
              <span className="feedback-text animate-pulse">ALIGNED SENSORS TO {selectedGame.toUpperCase()} SPEED-TRACK ON {formatDateString(selectedDate).toUpperCase()}...</span>
            )}
            {bookingStatus === 'booked' && (
              <div className="flex justify-between items-center w-full">
                <span className="feedback-text text-[#faf7f2] font-semibold">✓ SLOT CONFIRMED: {selectedGame.toUpperCase()} ON {formatDateString(selectedDate).toUpperCase()}!</span>
                <button className="dismiss-toast-btn" onClick={() => setBookingStatus(null)} type="button">CLOSE</button>
              </div>
            )}
          </div>
        )}
      </div>

      <button 
        className={`booking-menu-btn ${isMenuOpen ? 'open' : ''}`} 
        id="carousel-control-right"
        onClick={() => {
          setIsMenuOpen(!isMenuOpen);
          if (!isMenuOpen) {
            setHoveredIdx(0);
          }
        }}
        aria-label="Toggle Menu"
        type="button"
      >
        <div className="menu-btn-content">
          <span className="menu-btn-label">{isMenuOpen ? "CLOSE" : "MENU"}</span>
          <div className="menu-btn-icon-wrapper">
            <span className="menu-btn-line"></span>
            <span className="menu-btn-line"></span>
            <span className="menu-btn-line"></span>
          </div>
        </div>
      </button>
    </footer>
  );
}
