import { BackArrow } from "@icons/svg/BackArrow";
import { useRouter } from "@tanstack/react-router";

export const BackButton = () => {
  const router = useRouter();
  const handleGoBack = () => {
    router.history.back();
  };
  return (
    <button
      className="flex gap-1 hover:cursor-pointer"
      onClick={handleGoBack}
      title="Volver una pagina atrás"
      aria-label="Volver una pagina atrás"
      type="button"
    >
      <BackArrow />
      <span>Volver</span>
    </button>
  );
};
