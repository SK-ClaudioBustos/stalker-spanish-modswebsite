import { GROUPS_LINKS } from "@data/grupos";
import { GroupItem } from "@component/Groups/GroupItem";

export const SeccionGrupos = () => {
  return (
    <div className="w-fit">
      <h4 className="text-center underline mb-2">
        ¡Síganlos, apóyenlos, quiéranse y sobre todo cada aporte que hagan
        cuenta!
      </h4>
      <div className="flex flex-wrap gap-2 justify-center mt-4 mx-auto mb-0">
        {GROUPS_LINKS.map((item, index) => (
          <GroupItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};
