import { Image } from "@icons/svg/Image";
import { useState } from "react";

export const Gallery = ({ galleryItems }: { galleryItems: string[] }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const handleImageChange = (index: number) => setSelectedImageIndex(index);
  return (
    <article className="bg-primary-light border-primary-dark border rounded-lg p-4">
      <header className="flex items-center gap-2 text-center mb-4">
        <Image />
        <h2 className="text-white font-bold text-xl">Galería de Imágenes</h2>
      </header>
      <div>
        <div className="space-y-4">
          <div className="aspect-video rounded-lg overflow-hidden bg-primary-custom">
            <img
              src={galleryItems[selectedImageIndex]}
              alt={`Screenshot ${selectedImageIndex + 1}`}
              className="w-full h-full object-cover"
              decoding="async"
              loading="lazy"
            />
          </div>
          <div className="grid grid-cols-6 gap-2">
            {galleryItems.map((image, index) => (
              <button
                key={index}
                onClick={() => handleImageChange(index)}
                className={`aspect-video rounded overflow-hidden border-2 transition-all ${
                  selectedImageIndex === index
                    ? "border-light-gray ring-2 ring-light-gray/50"
                    : "border-primary-light hover:border-light-gray"
                }`}
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                  decoding="async"
                  loading="lazy"
                  fetchPriority="low"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};
