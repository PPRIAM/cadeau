// components/GalleryGrid.tsx
import Image from 'next/image';

type GalleryGridProps = {
  images: { src: string; alt: string }[];
};

export default function GalleryGrid({ images }: GalleryGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map(({ src, alt }) => (
        <div
          key={src}
          className="relative overflow-hidden rounded-xl shadow-md group"
        >
          // components/GalleryGrid.tsx
<Image
  src={src}
  alt={alt}
  width={600}
  height={600}
  /* seulement 57 – 80 en unoptimized */
  unoptimized={() => {
    const n = parseInt(src.match(/\d+/)?.[0] || '0', 10);
    return n >= 57 && n <= 80;
  }()}
  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
/>

          {/* Légende discrète au survol */}
          <span className="absolute bottom-0 left-0 w-full bg-black/40 text-white text-sm text-center py-1 opacity-0 group-hover:opacity-100 transition-opacity">
            {alt}
          </span>
        </div>
      ))}
    </div>
  );
}
