import { WarningIcon } from "@icons/svg/WarningIcon";

export const WarningDetails = ({ warnings }: { warnings: string[] }) => {
  return (
    <article className="bg-primary-light pt-4 pb-6 px-6 rounded-xl border-1 border-primary-dark mt-6">
      <div className="flex flex-col">
        <header className="flex items-center gap-2 text-center mb-4">
          <WarningIcon />
          <h2 className="text-white font-bold text-xl">
            Aclaraciones Importantes
          </h2>
        </header>
        <ul className="space-y-2">
          {warnings.map((warning, index) => (
            <li key={index} className="flex gap-3 text-light-gray">
              <span className="text-primary-custom">•</span>
              {warning}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};
