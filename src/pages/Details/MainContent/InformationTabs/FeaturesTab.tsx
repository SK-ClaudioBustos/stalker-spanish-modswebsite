export const FeaturesTab = ({ features }: { features: string[] }) => {
  return (
    <div className="flex flex-col">
      <h3 className="text-white mb-4 font-bold">Características Principales</h3>
      <div className="grid md:grid-cols-2 gap-3">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-center gap-3 p-3 bg-primary-dark/50 rounded-lg"
          >
            <div className="min-h-2 min-w-2 bg-gray-400 rounded-full" />
            <span className="text-light-gray">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
