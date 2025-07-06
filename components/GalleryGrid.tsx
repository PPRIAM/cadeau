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
          {/* Image optimisée */}
          <Image
            src={src}
            alt={alt}
            width={600}
            height={600}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 50vw,
                   (max-width: 1024px) 33vw,
                   25vw"
            priority
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
