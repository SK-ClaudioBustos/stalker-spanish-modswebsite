import { useEffect, useState } from "react";

export const LazyImage = ({
  imgPath,
  altText,
}: {
  imgPath: string;
  altText: string;
}) => {
  const [loading, setLoading] = useState(true);
  const [image, setImage] = useState("");

  useEffect(() => {
    const getImage = async () => {
      await import(
        /* @vite-ignore */
        `/img/${imgPath}/portada.webp`
      ).then((image) => {
        setImage(image.default);
        setLoading(false);
      });
    };
    getImage();
  });

  if (loading) {
    return (
      <div className="w-full h-full">
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
        >
          <path
            d="M12 6.864v1.333m0 7.606v1.333M17.136 12h-1.333m-7.606 0H6.864m8.768 3.632l-.943-.943M9.311 9.311l-.943-.943m0 7.264l.943-.943m5.378-5.378l.943-.943"
            className="path-svg"
          />
        </svg>
      </div>
    );
  }

  return (
    <img
      className="aspect-2/3 object-cover w-50"
      src={image}
      alt={altText}
      fetchPriority="low"
      decoding="async"
      loading="lazy"
    />
  );
};
