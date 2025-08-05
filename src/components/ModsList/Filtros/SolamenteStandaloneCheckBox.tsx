export const SolamenteStandaloneCheckBox = () => {
  return (
    <div className="flex items-center gap-2">
      <label
        htmlFor="is_standalone"
        aria-label="Mostrar solamente los mods que sean standalone"
        className="text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        Solamente Mods Standalone
      </label>
      <input
        id="is_standalone"
        type="checkbox"
        className="size-4 text-gray-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-gray-400"
      />
    </div>
  );
};
