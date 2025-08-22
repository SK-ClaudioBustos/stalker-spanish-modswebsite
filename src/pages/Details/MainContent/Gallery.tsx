import { LazyImage } from "@component/ui/LazyImage";
import { ImageIcon } from "@icons/svg/ImageIcon";
import { useState } from "react";

export const Gallery = ({ galleryItems }: { galleryItems: string[] }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const handleImageChange = (index: number) => setSelectedImageIndex(index);
  return (
    <article className="bg-primary-light border-primary-dark border rounded-lg p-4">
      <header className="flex items-center gap-2 text-center mb-4">
        <ImageIcon />
        <h2 className="text-white font-bold text-xl">Galería de Imágenes</h2>
      </header>
      <div>
        <div className="space-y-4">
          <div className="aspect-video rounded-lg overflow-hidden bg-primary-custom">
            <LazyImage
              imgPath={`/img/${galleryItems[selectedImageIndex]}.webp`}
              altText={`Screenshot ${selectedImageIndex + 1}`}
            />
          </div>
          <div className="grid grid-cols-6 gap-2">
            {galleryItems.map((image, index) => {
              const imgPath = `/img/${image}.webp`;
              return (
                <button
                  key={index}
                  onClick={() => handleImageChange(index)}
                  className={`aspect-video rounded overflow-hidden border-2 transition-all ${
                    selectedImageIndex === index
                      ? "border-light-gray ring-2 ring-light-gray/50"
                      : "border-primary-light hover:border-light-gray"
                  }`}
                >
                  <LazyImage
                    imgPath={imgPath}
                    altText={`Thumbnail ${index + 1}`}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </article>
  );
};
