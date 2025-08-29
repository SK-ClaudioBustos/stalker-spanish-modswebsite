import { getImageUrl } from "src/utils/image-util";
export const LazyImage = ({
  imgPath,
  altText,
}: {
  imgPath: string;
  altText: string;
}) => {
  const imgSrc = getImageUrl(imgPath);
  return (
    <div className="w-full h-full">
      <img
        className={`w-full h-full object-cover`}
        src={imgSrc}
        alt={altText}
        fetchPriority="low"
        decoding="async"
        loading="lazy"
      />
    </div>
  );
};
