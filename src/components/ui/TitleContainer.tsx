export const TitleContainer = ({
  alt,
  imgSrc,
}: {
  alt: string;
  imgSrc: string;
}) => {
  return (
    <div className="title-container">
      <img
        src={imgSrc}
        alt={alt}
      />
    </div>
  );
};
