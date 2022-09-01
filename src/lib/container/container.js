import { useState } from "react";
import { BadgeList } from "../badge-list/badge-list";
import { badges } from "../badges";
import { Printer } from "../printer/printer";

export const Container = ({ members, selected, fieldsMapping }) => {
  const [badge, setBadge] = useState(null);

  return (
    <div className="app-container">
      <BadgeList onBadgeSelected={(badgeName) => setBadge(badgeName)}/>
      {
        badge 
        ? <Printer
            members={members}
            selected={selected}
            fieldsMapping={fieldsMapping}
            badge={badges[badge]}
          />
        : 'Select badge first'
      }
    </div>
  );
}