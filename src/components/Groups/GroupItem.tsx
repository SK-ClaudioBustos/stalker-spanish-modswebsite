import { CSSProperties } from "react";
import { DiscordIcon } from "@icons/DiscordIcon";
import { FacebookIcon } from "@icons/FacebookIcon";
import { Group } from "@tipos/groups";

export const GroupItem = ({ item }: { item: Group }) => {
  const style = {
    "--bg-color": item.socialMedia === "discord" ? "#494e8b" : "#295eb4",
  } as CSSProperties;
  return (
    <div
      className="bg-(--bg-color) text-white rounded-lg flex gap-0.5 py-1 px-2"
      style={style}
    >
      {item.socialMedia === "discord" ? (
        <DiscordIcon  />
      ) : (
        <FacebookIcon />
      )}
      <a
        className="text-base"
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {item.groupName}
      </a>
    </div>
  );
};
