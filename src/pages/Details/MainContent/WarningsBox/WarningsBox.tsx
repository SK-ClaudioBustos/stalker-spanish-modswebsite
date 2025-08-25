import { useDetailsContext } from "@context/details.context";
import { WarningDetails } from "./WarningDetails";

export const WarningsBox = () => {
  const { aclaraciones } = useDetailsContext();
  return (
    <>
      {aclaraciones !== undefined && (
        <WarningDetails warnings={aclaraciones} />
      )}
    </>
  );
};
