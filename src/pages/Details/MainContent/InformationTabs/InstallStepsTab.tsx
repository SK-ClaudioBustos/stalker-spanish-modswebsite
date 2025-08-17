export const InstallStepsTab = ({
  installSteps,
}: {
  installSteps: string[] | undefined;
}) => {
  return (
    <div className="flex flex-col">
      <h3 className="text-white mb-4 font-bold">Descripción Completa</h3>
      <ol className="space-y-4">
        {installSteps === undefined ? (
          <p>No hay pasos de instalación.</p>
        ) : (
          installSteps.map((step, index) => (
            <li key={index} className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-primary-custom text-white rounded-full flex items-center justify-center font-semibold">
                {index + 1}
              </div>
              <span className="text-light-gray pt-1">{step}</span>
            </li>
          ))
        )}
      </ol>
    </div>
  );
};
