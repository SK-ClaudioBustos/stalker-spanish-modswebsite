import { BackButton } from "@component/ui/BackButton";

export const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-4 text-primary-dark">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-8">Página no encontrada</p>
      <BackButton />
    </div>
  );
};
