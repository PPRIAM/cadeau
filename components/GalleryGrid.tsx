// components/GalleryGrid.tsx
import Image from 'next/image';

type GalleryGridProps = {
  images: { src: string; alt: string }[];
};

export default function GalleryGrid({ images }: GalleryGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6 gap-3 sm:gap-4">
      {images.map(({ src, alt }) => {
        // ↳ extrait le numéro 01-81 du nom de fichier
        const n = parseInt(src.match(/\d+/)?.[0] ?? '0', 10);

        return (
          <div key={src} className="relative overflow-hidden rounded-lg shadow group">
            <Image
              src={src}
              alt={alt}
              width={600}
              height={600}
              /* unoptimized SEULEMENT pour 57 – 80 */
              unoptimized={n >= 57 && n <= 80}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 640px) 50vw,
                     (max-width: 768px) 33vw,
                     (max-width: 1024px) 25vw,
                     (max-width: 1536px) 20vw,
                     16vw"
              priority
            />
            <span className="absolute bottom-0 left-0 w-full bg-black/40 text-white text-xs sm:text-sm text-center py-1 opacity-0 group-hover:opacity-100 transition-opacity">
              {alt}
            </span>
          </div>
        );
      })}
    </div>
  );
}
