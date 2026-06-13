import React from 'react';
import DomeGallery from './DomeGallery';

const GALLERY_IMAGES = [
  { src: 'https://admin.oxygensports.com.bd/UpImages/Main_e819c20a-78dd-4f9c-a682-0ace5aade554.jpg', alt: 'Oxygen Arena View 1' },
  { src: 'https://admin.oxygensports.com.bd/UpImages/Main_05c77756-a4e9-4da5-a495-aaebfaf81558.jpg', alt: 'Oxygen Arena View 2' },
  { src: 'https://admin.oxygensports.com.bd/UpImages/Main_41961ec4-4fa7-4d67-a83a-c168c4f05e07.jpg', alt: 'Oxygen Arena View 3' },
  { src: 'https://admin.oxygensports.com.bd/UpImages/Main_282747c4-3de9-4eb0-9f2d-230a8afcf812.jpg', alt: 'Oxygen Arena View 4' },
  { src: 'https://admin.oxygensports.com.bd/UpImages/Main_60af7f3b-b42a-4aca-b1b2-a4b06386c68d.jpg', alt: 'Oxygen Arena View 5' },
  { src: 'https://admin.oxygensports.com.bd/UpImages/Main_80790fbe-1239-4898-a43f-70bbbbb52297.jpg', alt: 'Oxygen Arena View 6' },
  { src: 'https://admin.oxygensports.com.bd/UpImages/Main_4855beac-0db2-4a99-bace-cc867f149621.jpg', alt: 'Oxygen Arena View 7' },
  { src: 'https://admin.oxygensports.com.bd/UpImages/Main_2245f850-6ff3-4ff8-a5a4-d0dc6c4a96ba.jpg', alt: 'Oxygen Arena View 8' },
  { src: 'https://admin.oxygensports.com.bd/UpImages/Main_bb509bb2-f458-47d6-b96a-2017b3bf67e6.jpg', alt: 'Oxygen Arena View 9' },
  { src: 'https://admin.oxygensports.com.bd/UpImages/Main_af987ede-878e-4e7c-b8eb-c73438b11579.jpg', alt: 'Oxygen Arena View 10' },
  { src: 'https://admin.oxygensports.com.bd/UpImages/Main_c0595958-c6a6-48fa-bf0a-6709fd54cdf0.jpg', alt: 'Oxygen Arena View 11' }
];

export default function GallerySection() {
  return (
    <section id="gallery" className="relative w-full h-screen bg-black overflow-hidden border-t border-white/5">
      {/* Background glass glows */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-25">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-white/5 blur-[130px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-neutral-700/10 blur-[110px]" />
      </div>

      {/* Centered Gallery Header Overlay */}
      <div className="absolute top-6 left-0 right-0 z-20 text-center pointer-events-none">
        <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-bold tracking-[0.25em] text-white select-none drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
          Gallery
        </h2>
      </div>

      {/* Immersive Full Screen 3D Dome Workspace */}
      <div className="relative w-full h-full z-10">
        <DomeGallery 
          images={GALLERY_IMAGES}
          grayscale={false}
          openedImageWidth="420px" 
          openedImageHeight="420px" 
          overlayBlurColor="#000000"
          maxVerticalRotationDeg={10}
          dragSensitivity={18}
          dragDampening={1.6}
          imageBorderRadius="24px"
          openedImageBorderRadius="32px"
        />
      </div>
    </section>
  );
}

