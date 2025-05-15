import { CSSProperties } from "react";
import { DiscordIcon } from "@icons/DiscordIcon";
import { FacebookIcon } from "@icons/FacebookIcon";

const GROUPS_LINKS = [
  {
    socialMedia: "facebook",
    href: "https://www.facebook.com/groups/266806543834616/",
    groupName: "S.T.A.L.K.E.R. & METRO & CHERNOBYLITE - Latinoamérica & España",
  },
  {
    socialMedia: "facebook",
    href: "https://www.facebook.com/groups/809236792516871/",
    groupName: "S.T.A.L.K.E.R Español",
  },
  {
    socialMedia: "discord",
    href: "https://discord.gg/HJMvJJtF",
    groupName: "Rokkies Camp",
  },
  {
    socialMedia: "discord",
    href: "https://discord.gg/yrvGEHn7",
    groupName: "StalkerSpanish",
  },
  {
    socialMedia: "discord",
    href: "https://discord.gg/FHGUBp9R",
    groupName: "StalkerSpain",
  },
  {
    socialMedia: "discord",
    href: "https://discord.gg/77eqahfU",
    groupName: "Campamento S.T.A.L.K.E.R.",
  },
];

export const SeccionGrupos = () => {
  return (
    <div className="container">
      <h4>
        ¡Síganlos, apóyenlos, quiéranse y sobre todo cada aporte que hagan
        cuenta!
      </h4>
      <div className="groups-list">
        {GROUPS_LINKS.map((item, index) => (
          <div
            key={index}
            className="group-item"
            style={
              {
                "--bg-color":
                  item.socialMedia === "discord" ? "#494e8b" : "#295eb4",
              } as CSSProperties
            }
          >
            {item.socialMedia === "discord" ? (
              <DiscordIcon />
            ) : (
              <FacebookIcon />
            )}
            <a href={item.href} target="_blank" rel="noopener noreferrer">
              {item.groupName}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
