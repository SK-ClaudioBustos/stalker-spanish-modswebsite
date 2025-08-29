export const LazyImage = ({
  imgPath,
  altText,
}: {
  imgPath: string;
  altText: string;
}) => {
  return (
    <div className="w-full h-full">
      <img
        className={`w-full h-full object-cover`}
        src={imgPath}
        alt={altText}
        fetchPriority="low"
        decoding="async"
        loading="lazy"
      />
    </div>
  );
};
