export const DescriptionTab = ({ description }: { description: string }) => {
  return (
      <div className="flex flex-col">
        <h3 className="text-white mb-4 font-bold">Descripción Completa</h3>
        <p className="text-light-gray w-full text-justify">
          {description}
        </p>
      </div>
  );
};
