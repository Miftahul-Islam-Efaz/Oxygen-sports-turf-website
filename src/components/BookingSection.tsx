import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calendar, 
  Activity, 
  Clock, 
  Sliders, 
  Check, 
  ChevronRight, 
  Cpu, 
  Zap, 
  MapPin, 
  ShieldCheck, 
  Sparkles,
  RefreshCw,
  Info
} from 'lucide-react';

// Sport options matched with icons and dynamic fields
interface SportConfig {
  name: string;
  fields: string[];
  icon: React.ComponentType<{ className?: string }>;
  description: string;
}

const SPORTS_CONFIGS: SportConfig[] = [
  {
    name: "Football",
    description: "Elite FIFA-grade turf pitches and high-intensity tactical fields.",
    icon: Activity,
    fields: ["Arena F1 - Main Championship Pitch", "Arena F2 - Training Facility", "Mini-Cage Tactical Field 01"]
  },
  {
    name: "Badminton",
    description: "Multi-layered shock absorption wooden courts with Olympic mats.",
    icon: Sliders,
    fields: ["Court B1 - Championship Mat", "Court B2 - Olympic Timber Floor", "Court B3 - Training Surface"]
  },
  {
    name: "Swimming pool",
    description: "8-lane heated performance training facility with crystal clarity.",
    icon: Zap,
    fields: ["Lane 01 - Advanced Speed Lane", "Lane 02 - Intermediate Aerobic Lane", "Deep Diving Training Ring"]
  },
  {
    name: "Cricket",
    description: "Pristine grass match wickets and physical speed-bowling lanes.",
    icon: Sliders,
    fields: ["Main Grass Match Oval 1", "Tactile Clay Practice Pitch S1", "Speed-bowling Training Net A"]
  },
  {
    name: "Basketball",
    description: "FIBA standard spring-cushioned indoor hardwood courts.",
    icon: Cpu,
    fields: ["Full-Court Pro Hardwood Arena", "East-Side Half-Court shootouts", "Tactical Skills Practice Lane"]
  },
  {
    name: "Indoor Others",
    description: "Multi-functional sports zones adaptable for various disciplines.",
    icon: Sliders,
    fields: ["Multi-Sport Arena Hub Alpha", "Performance Training Deck Beta"]
  },
  {
    name: "Indoor Programme",
    description: "Specialized diagnostics and physical performance programs.",
    icon: Sliders,
    fields: ["Cardio Diagnostics lab A", "Pilates Gravity Frame Studio", "High-Intensity HYROX Grid"]
  },
  {
    name: "Outdoor Programme",
    description: "High-cadence tracking loops, conditioning and speed tracks.",
    icon: MapPin,
    fields: ["100m Laser Speed Track", "Sand Pit Plyometric Zone", "Calisthenics Endurance Rig"]
  },
  {
    name: "F4 Cricket",
    description: "Advanced cricket analysis with high-speed virtual simulators.",
    icon: Cpu,
    fields: ["Simulator Bay F4-01 Pro", "Simulator Bay F4-02 Pro", "Bowling-analysis Spin Net F5"]
  },
  {
    name: "Padel",
    description: "Panoramic tempered glass cages for fast-paced modern padel.",
    icon: Sliders,
    fields: ["Panoramic Padel Arena 01", "Tempered-Glass Padel Court 02"]
  }
];

const HOUR_TYPES = [
  { id: "peak", name: "Peak Hour", desc: "Premium high-velocity slots" },
  { id: "offpeak", name: "Off-Peak Hour", desc: "Relaxed mid-day time ranges" },
  { id: "day", name: "Day Slot", desc: "Natural ambient sunlight" },
  { id: "night", name: "Night Slot", desc: "Tactical stadium spotlighting" }
];

const DURATIONS = [
  "1.0 Hour (08:00 AM - 09:00 AM)",
  "1.0 Hour (10:00 AM - 11:00 AM)",
  "1.5 Hours (11:30 AM - 01:00 PM)",
  "1.5 Hours (04:00 PM - 05:30 PM)",
  "2.0 Hours (06:00 PM - 08:00 PM)",
  "2.0 Hours (08:00 PM - 10:00 PM)",
  "3.0 Hours Extended (07:00 PM - 10:00 PM)"
];

export default function BookingSection() {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [selectedDate, setSelectedDate] = useState<string>("2026-06-18");
  const [selectedSport, setSelectedSport] = useState<string>("Football");
  const [selectedHourType, setSelectedHourType] = useState<string>("peak");
  const [selectedField, setSelectedField] = useState<string>("");
  const [selectedDuration, setSelectedDuration] = useState<string>(DURATIONS[4]);
  
  // Handle booking action statuses
  const [transmissionState, setTransmissionState] = useState<"idle" | "processing" | "success" | "error">("idle");
  const [receiptCode, setReceiptCode] = useState<string>("");

  // Get active fields based on selected sport
  const currentSportConfig = SPORTS_CONFIGS.find(cfg => cfg.name === selectedSport) || SPORTS_CONFIGS[0];
  const availableFieldsForSport = currentSportConfig.fields;

  // Auto-set field when sport shifts
  useEffect(() => {
    setSelectedField(availableFieldsForSport[0]);
  }, [selectedSport]);

  const handleDaySelect = (dayNum: number) => {
    const formattedStr = `2026-06-${dayNum.toString().padStart(2, '0')}`;
    setSelectedDate(formattedStr);
    // Smooth scroll transition triggers state progression
    setActiveStep(2);
  };

  const executeTransmit = () => {
    if (!selectedField) return;
    setTransmissionState("processing");
    
    // Premium processing delays modeling server response
    setTimeout(() => {
      const generatedCode = `OXY-TX-${Math.floor(100000 + Math.random() * 900000)}`;
      setReceiptCode(generatedCode);
      setTransmissionState("success");
    }, 2800);
  };

  const getFormattedDateLong = (dateStr: string) => {
    const parts = dateStr.split('-');
    if (parts.length !== 3) return dateStr;
    const day = parseInt(parts[2], 10);
    return `Thursday, June ${day}, 2026`;
  };

  const getDayOnly = (dateStr: string) => {
    const parts = dateStr.split('-');
    return parts[2] ? parseInt(parts[2], 10) : 18;
  };

  const resetFlow = () => {
    setTransmissionState("idle");
    setActiveStep(1);
  };

  return (
    <section id="booking" className="booking-section-custom">
      {/* Background glass glows & cyber grid using premium classes */}
      <div className="booking-sec-bg-grid" />
      <div className="booking-sec-glow" />

      <div className="booking-sec-container text-white">
        {/* Elite Glass Header Block */}
        <div className="booking-sec-header text-center md:text-left">
          <span className="booking-sec-pretitle">
            RESERVE SLOT
          </span>
          <h2 className="booking-sec-title">
            BOOKING
          </h2>
          <p className="booking-sec-desc">
            Configure target sports arenas, select certified high-cadence playing schedules, and lock spatial tracking zones securely. No mock data.
          </p>
        </div>

        {/* Unified Interactive Control Deck Grid */}
        <div className="booking-grid-layout">
          
          {/* LEFT: Multi-Step Interactive Glass Workstation */}
          <div className="booking-steps-col">
            
            {/* STEP 1: Date Calendar Selection Block */}
            <div className={`booking-step-fold ${activeStep === 1 ? 'active' : ''}`}>
              {/* Header bar */}
              <button 
                type="button"
                onClick={() => setActiveStep(1)} 
                className="booking-step-header-btn animate-fadeIn"
              >
                <div className="booking-step-header-left">
                  <div className="booking-step-num">1</div>
                  <div className="booking-step-meta">
                    <span className="booking-step-sub">CALENDAR DECK</span>
                    <h3 className="booking-step-name">CHOOSE TARGET DATE</h3>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  {selectedDate && activeStep > 1 && (
                    <span className="booking-step-badge">
                      JUNE {getDayOnly(selectedDate)}
                    </span>
                  )}
                  <Calendar className="w-4 h-4 text-white/40" />
                </div>
              </button>

              <AnimatePresence initial={false}>
                {activeStep === 1 && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="booking-step-content border-t border-white/5 bg-neutral-900/20 backdrop-blur-sm">
                      <div className="booking-calendar-head">
                        <span>JUNE 2026</span>
                        <span className="text-[10px] border border-white/20 px-2 py-0.5 rounded">GMT +06 // KHULSHI, BD</span>
                      </div>
                      
                      <div className="booking-calendar-weekdays">
                        <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>
                      </div>

                      {/* Calendar Grid 1-30 June 2026 starts on Monday */}
                      <div className="booking-calendar-grid">
                        {Array.from({ length: 30 }, (_, idx) => {
                          const day = idx + 1;
                          const mappedDateStr = `2026-06-${day.toString().padStart(2, '0')}`;
                          const isSelected = selectedDate === mappedDateStr;
                          
                          return (
                            <button
                              key={day}
                              type="button"
                              onClick={() => handleDaySelect(day)}
                              className={`booking-day-btn ${isSelected ? 'selected' : ''}`}
                            >
                              <span>{day}</span>
                              {day === 18 && !isSelected && (
                                <span className="booking-day-active-dot" />
                              )}
                            </button>
                          );
                        })}
                      </div>
                      
                      <div className="mt-4 flex items-center gap-2 font-mono text-[10px] text-white/40">
                        <Info className="w-3.5 h-3.5" />
                        <span>Tactile slots recalibrated hourly. Click a date to commit.</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>


            {/* STEP 2: Sports Category Selection Grid */}
            <div className={`booking-step-fold ${activeStep === 2 ? 'active' : ''}`}>
              <button 
                type="button"
                onClick={() => setActiveStep(2)} 
                className="booking-step-header-btn"
              >
                <div className="booking-step-header-left">
                  <div className="booking-step-num">2</div>
                  <div className="booking-step-meta">
                    <span className="booking-step-sub">CATEGORY MATRIX</span>
                    <h3 className="booking-step-name">SPORTS DISCIPLINE</h3>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  {selectedSport && activeStep > 2 && (
                    <span className="booking-step-badge">
                      {selectedSport}
                    </span>
                  )}
                  <Activity className="w-4 h-4 text-white/40" />
                </div>
              </button>

              <AnimatePresence initial={false}>
                {activeStep === 2 && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="booking-step-content border-t border-white/5 bg-neutral-900/20 backdrop-blur-sm">
                      <div className="booking-sports-grid">
                        {SPORTS_CONFIGS.map((sport) => {
                          const isSelected = selectedSport === sport.name;
                          const SportIcon = sport.icon;
                          
                          return (
                            <button
                              key={sport.name}
                              type="button"
                              onClick={() => {
                                setSelectedSport(sport.name);
                                setActiveStep(3);
                              }}
                              className={`booking-sport-card ${isSelected ? 'selected' : ''}`}
                            >
                              <div className="booking-sport-top">
                                <span className="booking-sport-icon">
                                  <SportIcon className="w-4 h-4 text-white" />
                                </span>
                                {isSelected && (
                                  <span className="booking-sport-check">
                                    <Check className="w-3 h-3 stroke-[3]" />
                                  </span>
                                )}
                              </div>
                              
                              <div>
                                <h4 className="booking-sport-name">{sport.name}</h4>
                                <p className="booking-sport-desc">{sport.description}</p>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>


            {/* STEP 3: Hour Type Selection */}
            <div className={`booking-step-fold ${activeStep === 3 ? 'active' : ''}`}>
              <button 
                type="button"
                onClick={() => setActiveStep(3)} 
                className="booking-step-header-btn"
              >
                <div className="booking-step-header-left">
                  <div className="booking-step-num">3</div>
                  <div className="booking-step-meta">
                    <span className="booking-step-sub">SCHEDULING CALIBRATION</span>
                    <h3 className="booking-step-name">HOUR TYPE & INTENSITY</h3>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  {selectedHourType && activeStep > 3 && (
                    <span className="booking-step-badge">
                      {HOUR_TYPES.find(h => h.id === selectedHourType)?.name}
                    </span>
                  )}
                  <Clock className="w-4 h-4 text-white/40" />
                </div>
              </button>

              <AnimatePresence initial={false}>
                {activeStep === 3 && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="booking-step-content border-t border-white/5 bg-neutral-900/20 backdrop-blur-sm">
                      <div className="booking-list-flex">
                        {HOUR_TYPES.map((type) => {
                          const isSelected = selectedHourType === type.id;
                          return (
                            <button
                              key={type.id}
                              type="button"
                              onClick={() => {
                                setSelectedHourType(type.id);
                                setActiveStep(4);
                              }}
                              className={`booking-list-item-btn ${isSelected ? 'selected' : ''}`}
                            >
                              <div className="booking-list-item-left">
                                <div className="booking-item-select-indicator">
                                  {isSelected && <div className="booking-item-select-indicator-inner" />}
                                </div>
                                <span className="booking-item-label">{type.name}</span>
                              </div>
                              <span className="booking-item-desc">{type.desc}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>


            {/* STEP 4: Zone Coordinates */}
            <div className={`booking-step-fold ${activeStep === 4 ? 'active' : ''}`}>
              <button 
                type="button"
                onClick={() => setActiveStep(4)} 
                className="booking-step-header-btn"
              >
                <div className="booking-step-header-left">
                  <div className="booking-step-num">4</div>
                  <div className="booking-step-meta">
                    <span className="booking-step-sub">ZONE COORDINATES</span>
                    <h3 className="booking-step-name">CHOOSE FIELD OR COURT AREA</h3>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  {selectedField && activeStep > 4 && (
                    <span className="booking-step-badge max-w-[200px] truncate">
                      {selectedField.split(' - ')[0]}
                    </span>
                  )}
                  <MapPin className="w-4 h-4 text-white/40" />
                </div>
              </button>

              <AnimatePresence initial={false}>
                {activeStep === 4 && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="booking-step-content border-t border-white/5 bg-neutral-900/20 backdrop-blur-sm">
                      <p className="font-mono text-[10px] tracking-widest text-[#ffffff]/40 mb-4 uppercase">
                        CERTIFIED PLAYING AREAS FOR {selectedSport.toUpperCase()}
                      </p>
                      
                      <div className="booking-list-flex">
                        {availableFieldsForSport.map((field) => {
                          const isSelected = selectedField === field;
                          return (
                            <button
                              key={field}
                              type="button"
                              onClick={() => {
                                setSelectedField(field);
                                setActiveStep(5);
                              }}
                              className={`booking-list-item-btn ${isSelected ? 'selected' : ''}`}
                            >
                              <div className="booking-list-item-left">
                                <div className="booking-item-select-indicator">
                                  {isSelected && <div className="booking-item-select-indicator-inner" />}
                                </div>
                                <span className="booking-item-label">{field}</span>
                              </div>
                              <span className="booking-item-desc">ACTIVE SENSORS ON</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>


            {/* STEP 5: Temporal Window */}
            <div className={`booking-step-fold ${activeStep === 5 ? 'active' : ''}`}>
              <button 
                type="button"
                onClick={() => setActiveStep(5)} 
                className="booking-step-header-btn"
              >
                <div className="booking-step-header-left">
                  <div className="booking-step-num">5</div>
                  <div className="booking-step-meta">
                    <span className="booking-step-sub">TEMPORAL WINDOW</span>
                    <h3 className="booking-step-name">CHOOSE SLOT DURATION</h3>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  {selectedDuration && activeStep > 5 && (
                    <span className="booking-step-badge">
                      {selectedDuration.split(' (')[0]}
                    </span>
                  )}
                  <Clock className="w-4 h-4 text-white/40" />
                </div>
              </button>

              <AnimatePresence initial={false}>
                {activeStep === 5 && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="booking-step-content border-t border-white/5 bg-neutral-900/20 backdrop-blur-sm">
                      <p className="font-mono text-[10px] tracking-widest text-[#ffffff]/40 mb-4 uppercase">
                        AVAILABLE SCHEDULING CHUNKS ({HOUR_TYPES.find(h => h.id === selectedHourType)?.name.toUpperCase()})
                      </p>
                      
                      <div className="booking-list-flex">
                        {DURATIONS.map((dur) => {
                          const isSelected = selectedDuration === dur;
                          return (
                            <button
                              key={dur}
                              type="button"
                              onClick={() => setSelectedDuration(dur)}
                              className={`booking-list-item-btn ${isSelected ? 'selected' : ''}`}
                            >
                              <div className="booking-list-item-left">
                                <div className="booking-item-select-indicator">
                                  {isSelected && <div className="booking-item-select-indicator-inner" />}
                                </div>
                                <span className="booking-item-label">{dur}</span>
                              </div>
                              <span className="booking-item-desc">VACANT</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>

          {/* RIGHT: High-Contrast Glass Slot Terminal Board */}
          <div className="lg:sticky lg:top-24">
            
            <div className="booking-terminal-board">
              <div className="booking-terminal-padd">
                
                {/* Board header */}
                <div className="booking-receipt-header">
                  <div className="booking-receipt-header-left">
                    <span className="booking-receipt-pulse" />
                    <span className="booking-receipt-meta">TARGET RECIEPT STUB</span>
                  </div>
                  <div className="booking-receipt-id">SECURE SLOT // OXY-7</div>
                </div>

                {transmissionState === "success" ? (
                  /* HIGH FIDELITY SUCCESS TICKET RECORD */
                  <div className="booking-ticket-success">
                    <div className="booking-success-badge">
                      <ShieldCheck className="w-8 h-8 text-white" />
                    </div>
                    
                    <span className="booking-sec-pretitle text-center !text-[11px] !mb-1">RESERVATION CONFIRMED</span>
                    <h4 className="booking-sec-title text-center !text-2xl !mb-5">ARENA LOCKED</h4>
                    
                    {/* Simulated elegant ticket cut lines */}
                    <div className="booking-ticket-dash" />
                    
                    <div className="booking-ticket-table space-y-3">
                      <div className="booking-ticket-table-row">
                        <span>RECEIPT ID:</span>
                        <span>{receiptCode}</span>
                      </div>
                      <div className="booking-ticket-table-row">
                        <span>DISCIPLINE:</span>
                        <span>{selectedSport}</span>
                      </div>
                      <div className="booking-ticket-table-row">
                        <span>TARGET FIELD:</span>
                        <span>{selectedField}</span>
                      </div>
                      <div className="booking-ticket-table-row">
                        <span>DATE:</span>
                        <span>{selectedDate}</span>
                      </div>
                      <div className="booking-ticket-table-row">
                        <span>SCHEDULING:</span>
                        <span>{selectedDuration}</span>
                      </div>
                    </div>

                    <div className="booking-ticket-dash" />

                    {/* QR Code Graphic element */}
                    <div className="booking-barcode-deck">
                      <div className="booking-barcode-simulated">
                        {/* Elegant vector-simulated barcode elements */}
                        {Array.from({ length: 25 }).map((_, i) => (
                          <div 
                            key={i} 
                            className="booking-barcode-slice" 
                            style={{ 
                              opacity: Math.sin(i * 12.3) > 0 ? 1 : 0.1, 
                              borderRadius: '1px' 
                            }} 
                          />
                        ))}
                      </div>
                    </div>

                    <p className="booking-receipt-footer-text text-center px-4 mb-4">
                      Present this secure token barcode at Chatogram, Oxygen Sports Zone physical reception to unlock target gateway sensors.
                    </p>

                    <button
                      type="button"
                      onClick={resetFlow}
                      className="booking-transmit-btn"
                    >
                      BOOK ANOTHER ARENA
                    </button>
                  </div>
                ) : (
                  /* TERMINAL CONTROL SUMMARY PANELS */
                  <div>
                    <div className="booking-receipt-slots">
                      
                      {/* Sport Row */}
                      <div className="booking-receipt-slot-row">
                        <div>
                          <span className="booking-receipt-slot-lbl font-sans">DISCIPLINE MATRIX</span>
                          <span className="booking-receipt-slot-val font-sans">{selectedSport}</span>
                        </div>
                        <Activity className="w-4 h-4 text-white/40" />
                      </div>

                      {/* Date Row */}
                      <div className="booking-receipt-slot-row">
                        <div>
                          <span className="booking-receipt-slot-lbl font-sans">DATE SPECIFICATION</span>
                          <span className="booking-receipt-slot-val font-sans">{getFormattedDateLong(selectedDate)}</span>
                        </div>
                        <Calendar className="w-4 h-4 text-white/40" />
                      </div>

                      {/* Hour Type & Area coordinate Row */}
                      <div className="grid grid-cols-2 gap-3">
                        <div className="booking-receipt-slot-row">
                          <div>
                            <span className="booking-receipt-slot-lbl font-sans text-xs">INTENSITY</span>
                            <span className="booking-receipt-slot-val font-sans text-xs block truncate">
                              {HOUR_TYPES.find(h => h.id === selectedHourType)?.name}
                            </span>
                          </div>
                        </div>
                        <div className="booking-receipt-slot-row">
                          <div>
                            <span className="booking-receipt-slot-lbl font-sans text-xs">COORDINATES</span>
                            <span className="booking-receipt-slot-val font-sans text-xs block truncate" title={selectedField}>
                              {selectedField ? selectedField.split(' - ')[0] : 'SELECT FIELD'}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Duration row */}
                      <div className="booking-receipt-slot-row">
                        <div>
                          <span className="booking-receipt-slot-lbl font-sans">DURATION SLOT</span>
                          <span className="booking-receipt-slot-val font-sans text-xs block truncate">{selectedDuration}</span>
                        </div>
                        <Clock className="w-4 h-4 text-white/40" />
                      </div>

                    </div>

                    <div className="my-6 border-t border-white/10" />

                    {transmissionState === "processing" ? (
                      /* HIGH-END DATA SCANNER SIMULATOR */
                      <div className="booking-scanner-flex">
                        <RefreshCw className="w-10 h-10 booking-scanner-spinner" />
                        <p className="booking-scanner-lead animate-pulse">
                          ESTABLISHING HYPER-SECURE SOCKETS...
                        </p>
                        <p className="booking-scanner-sub">
                          SYNCHRONIZING SCHEDULER MATRIX & PHYSICAL NETS
                        </p>
                      </div>
                    ) : (
                      /* TRANSMIT ORDER LAUNCH GATEWAY */
                      <div>
                        <button
                          type="button"
                          onClick={executeTransmit}
                          disabled={!selectedField}
                          className="booking-transmit-btn"
                        >
                          <Sparkles className="w-4 h-4" />
                          TRANSMIT RESERVATION
                        </button>
                        
                        <div className="booking-receipt-footer">
                          <Info className="w-3.5 h-3.5 text-white/30 mt-0.5 flex-shrink-0" />
                          <p className="booking-receipt-footer-text font-sans text-[11px]">
                            Upon transmitting, slot data locks on local sports zone database channels. All systems will confirm automatically via security checksums.
                          </p>
                        </div>
                      </div>
                    )}

                  </div>
                )}

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
