import { Link } from "@tanstack/react-router";
import { BackArrow } from "@icons/svg/BackArrow";

export const BackButton = () => {
  return (
    <Link
      className="flex gap-1"
      to="/"
      title="Volver al inicio de la página"
      aria-label="Volver al inicio de la página"
    >
      <BackArrow />
      <span>Volver al inicio</span>
    </Link>
  );
};
