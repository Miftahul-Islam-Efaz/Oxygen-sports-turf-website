import { MenuItem, FacilityItem } from './types';

export const letterGeometries: Record<string, { width: number; path: string }> = {
  'A': {
    width: 110,
    path: 'M 55,0 L 110,100 L 80,100 L 71,70 L 39,70 L 30,100 L 0,100 Z M 55,25 L 63,50 L 47,50 Z'
  },
  'C': {
    width: 110,
    path: 'M 85,0 L 30,0 C 10,0 0,15 0,45 L 0,55 C 0,85 10,100 30,100 L 85,100 L 85,70 L 40,70 C 35,70 30,65 30,55 L 30,45 C 30,35 35,30 40,30 L 85,30 Z'
  },
  'D': {
    width: 110,
    path: 'M 0,0 L 70,0 C 95,0 110,15 110,40 L 110,60 C 110,85 95,100 70,100 L 0,100 Z M 30,30 L 65,30 C 75,30 80,35 80,50 C 80,65 75,70 65,70 L 30,70 Z'
  },
  'E': {
    width: 100,
    path: 'M 0,0 L 100,0 L 100,25 L 30,25 L 30,42 L 85,42 L 85,62 L 30,62 L 30,75 L 100,75 L 100,100 L 0,100 Z'
  },
  'G': {
    width: 110,
    path: 'M 110,30 L 80,30 C 80,25 75,20 60,20 C 45,20 30,30 30,50 C 30,70 45,80 60,80 C 75,80 80,75 80,60 L 60,60 L 60,40 L 110,40 L 110,100 L 80,100 C 80,100 80,100 70,100 C 30,100 0,80 0,50 C 0,20 30,0 70,0 L 110,0 Z'
  },
  'H': {
    width: 110,
    path: 'M 0,0 L 30,0 L 30,38 L 80,38 L 80,0 L 110,0 L 110,100 L 80,100 L 80,62 L 30,62 L 30,100 L 0,100 Z'
  },
  'I': {
    width: 30,
    path: 'M 0,0 L 30,0 L 30,100 L 0,100 Z'
  },
  'J': {
    width: 105,
    path: 'M 75,0 L 105,0 L 105,65 C 105,88 88,100 60,100 L 45,100 C 18,100 0,85 0,60 L 30,60 C 30,70 35,74 45,74 L 55,74 C 68,74 75,68 75,55 Z'
  },
  'M': {
    width: 140,
    path: 'M 0,25 L 35,0 L 70,35 L 105,0 L 140,25 L 140,100 L 110,100 L 110,40 L 70,75 L 30,40 L 30,100 L 0,100 Z'
  },
  'N': {
    width: 110,
    path: 'M 0,0 L 30,0 L 80,65 L 80,0 L 110,0 L 110,100 L 80,100 L 30,35 L 30,100 L 0,100 Z'
  },
  'O': {
    width: 110,
    path: 'M 30,0 L 80,0 C 100,0 110,15 110,40 L 110,60 C 110,85 100,100 80,100 L 30,100 C 10,100 0,85 0,60 L 0,40 C 0,15 10,0 30,0 Z M 40,30 L 70,30 C 75,30 80,35 80,45 L 80,55 C 80,65 75,70 70,70 L 40,70 C 35,70 30,65 30,55 L 30,45 C 30,35 35,30 40,30 Z'
  },
  'P': {
    width: 110,
    path: 'M 0,0 L 70,0 C 95,0 110,15 110,38 L 110,42 C 110,62 95,70 70,70 L 30,70 L 30,100 L 0,100 Z M 30,25 L 65,25 C 75,25 80,28 80,35 C 80,42 75,45 65,45 L 30,45 Z'
  },
  'R': {
    width: 110,
    path: 'M 0,0 L 70,0 C 95,0 110,15 110,35 C 110,50 100,60 85,62 L 110,100 L 75,100 L 53,68 L 30,68 L 30,100 L 0,100 Z M 30,24 L 65,24 C 75,24 80,26 80,32 C 80,38 75,42 65,42 L 30,42 Z'
  },
  'S': {
    width: 110,
    path: 'M 100,25 L 72,25 C 72,20 68,18 55,18 C 42,18 38,20 38,28 C 38,36 45,38 65,42 C 90,48 110,55 110,75 C 110,92 90,100 55,100 C 20,100 0,92 0,72 L 28,72 C 28,78 35,82 55,82 C 68,82 72,80 72,72 C 72,64 65,62 45,58 C 20,52 0,45 0,28 C 0,10 20,0 55,0 C 90,0 100,10 100,25 Z'
  },
  'T': {
    width: 100,
    path: 'M 0,0 L 100,0 L 100,30 L 65,30 L 65,100 L 35,100 L 35,30 L 0,30 Z'
  },
  'V': {
    width: 110,
    path: 'M 0,0 L 30,0 L 55,75 L 80,0 L 110,0 L 70,100 L 40,100 Z'
  },
  'X': {
    width: 110,
    path: 'M 0,0 L 30,0 L 55,40 L 80,0 L 110,0 L 70,50 L 110,100 L 80,100 L 55,60 L 30,100 L 0,100 L 40,50 Z'
  },
  'Y': {
    width: 110,
    path: 'M 0,0 L 30,0 L 55,38 L 80,0 L 110,0 L 70,55 L 70,100 L 40,100 L 40,55 Z'
  }
};

export const word = "OXYGENSPORTS";
export const bgImage = "https://res.cloudinary.com/dtj7qzev2/image/upload/q_auto/f_auto/v1781339130/hey_just_keeping_everything_as_202606131425_wfmjsf.jpg";

export const menuItems: MenuItem[] = [
  {
    title: "ABOUT",
    desc: "Explore high-performance sports vision, regional hubs, and operational specs.",
    image: "https://res.cloudinary.com/dtj7qzev2/image/upload/q_auto/f_auto/v1781339130/hey_just_keeping_everything_as_202606131425_wfmjsf.jpg",
    bulletColor: "#ffffff",
    bulletGlow: "rgba(255, 255, 255, 0.25)",
  },
  {
    title: "BOOKING",
    desc: "Reserve high-intensity field sessions, tracking zones, and tactical arrays.",
    image: "https://images.unsplash.com/photo-1541252260730-0412e8e2108e?auto=format&fit=crop&q=80&w=1600",
    bulletColor: "#ffffff",
    bulletGlow: "rgba(255, 255, 255, 0.25)",
  },
  {
    title: "FACILITIES",
    desc: "Unlock state-of-the-art courts, high-end turf pitches, and diagnostic fitness centers.",
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=1600",
    bulletColor: "#ffffff",
    bulletGlow: "rgba(255, 255, 255, 0.25)",
  },
  {
    title: "GALLERY",
    desc: "Witness raw cinematic captures of spatial tracking loops and athlete designs.",
    image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=1600",
    bulletColor: "#ffffff",
    bulletGlow: "rgba(255, 255, 255, 0.25)",
  },
  {
    title: "CONTACT",
    desc: "Inquire with physical analysts, engineers, and infrastructure leads.",
    image: "https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?auto=format&fit=crop&q=80&w=1600",
    bulletColor: "#ffffff",
    bulletGlow: "rgba(255, 255, 255, 0.25)",
  }
];

export const facilitiesData: FacilityItem[] = [
  {
    id: "football",
    title: "Football",
    subtitle: "High-intensity tactical turf pitch",
    image: "https://res.cloudinary.com/dtj7qzev2/image/upload/q_auto/f_auto/v1781337280/Render_a_cinematic_low-angle_shot_202606131354_wxa0ew.jpg",
    colSpan: "col-span-7",
    borderRadius: "30px 10px 40px 15px",
    badge: "PROFESSIONAL PITCH • FIFA TURF"
  },
  {
    id: "badminton",
    title: "Badminton",
    subtitle: "Olympic standard court mats",
    image: "https://res.cloudinary.com/dtj7qzev2/image/upload/q_auto/f_auto/v1781351907/Render_a_dramatic_close-up_flat-lay_202606131758_nbef7i.jpg",
    colSpan: "col-span-5",
    borderRadius: "10px 50px 15px 30px",
    badge: "OLYMPIC STANDARD • WOODEN COURT"
  },
  {
    id: "swimming-pool",
    title: "Swimming Pool",
    subtitle: "Heated multi-lane training pool",
    image: "https://res.cloudinary.com/dtj7qzev2/image/upload/q_auto/f_auto/v1781337332/Render_a_cinematic_wide_shot_202606131355_pu7khn.jpg",
    colSpan: "col-span-4",
    borderRadius: "40px 15px 30px 50px",
    badge: "HEATED OLYMPIC • 8 LANES"
  },
  {
    id: "cricket",
    title: "Cricket",
    subtitle: "Premium grass turf cricket pitch",
    image: "https://res.cloudinary.com/dtj7qzev2/image/upload/q_auto/f_auto/v1781351967/Render_a_cinematic_wide_shot_202606131759_egumcm.jpg",
    colSpan: "col-span-8",
    borderRadius: "20px 40px 50px 20px",
    badge: "NATURAL TURF WICKET • PRO ACADEMY"
  },
  {
    id: "basketball",
    title: "Basketball",
    subtitle: "Professional indoor arena flooring",
    image: "https://res.cloudinary.com/dtj7qzev2/image/upload/q_auto/f_auto/v1781351967/Render_a_cinematic_wide_shot_202606131759_egumcm.jpg",
    colSpan: "col-span-6",
    borderRadius: "35px 25px 35px 25px",
    badge: "FIBRA COURT • PRO ARENA"
  },
  {
    id: "indoor-others",
    title: "Indoor Others",
    subtitle: "Flexible high-performance setups",
    image: "https://res.cloudinary.com/dtj7qzev2/image/upload/q_auto/f_auto/v1781337418/Render_a_cinematic_wide_interior_202606131356_kth7cp.jpg",
    colSpan: "col-span-6",
    borderRadius: "15px 35px 15px 35px",
    badge: "HIGH-PERFORMANCE MATRIX ZONE"
  },
  {
    id: "indoor-programme",
    title: "Indoor Programme",
    subtitle: "Holistic fitness & diagnostic circuits",
    image: "https://res.cloudinary.com/dtj7qzev2/image/upload/q_auto/f_auto/v1781337437/Render_a_dramatic_editorial_shot_202606131357_rkozs8.jpg",
    colSpan: "col-span-5",
    borderRadius: "50px 20px 40px 30px",
    badge: "FITNESS & HYROX CIRCUIT"
  },
  {
    id: "outdoor-programme",
    title: "Outdoor Programme",
    subtitle: "Conditioning & speed-tracking loops",
    image: "https://res.cloudinary.com/dtj7qzev2/image/upload/q_auto/f_auto/v1781352133/Render_a_cinematic_wide_shot_202606131802_khzjpc.jpg",
    colSpan: "col-span-7",
    borderRadius: "20px 50px 30px 40px",
    badge: "TRACK & PERFORMANCE AREA"
  },
  {
    id: "padel",
    title: "Padel",
    subtitle: "State-of-the-art glass cage court",
    image: "https://res.cloudinary.com/dtj7qzev2/image/upload/q_auto/f_auto/v1781352206/Render_a_dramatic_low-angle_shot_202606131803_m3exjj.jpg",
    colSpan: "col-span-8",
    borderRadius: "30px 40px 20px 50px",
    badge: "PANORAMIC GLASS • PRO COURT"
  },
  {
    id: "f4-cricket",
    title: "F4 Cricket",
    subtitle: "High-cadence bowling & nets analysis",
    image: "https://res.cloudinary.com/dtj7qzev2/image/upload/q_auto/f_auto/v1781337360/Render_a_hyper-realistic_close-up_of_202606131355_q4m2dk.jpg",
    colSpan: "col-span-4",
    borderRadius: "40px 20px 50px 30px",
    badge: "ACCELERATED NETS • PRO ANALYTICS"
  }
];

export const selectableGames = [
  "Football",
  "Badminton",
  "Swimming Pool",
  "Cricket",
  "Basketball",
  "Padel",
  "F4 Cricket"
];
