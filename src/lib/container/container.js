import { useState } from "react";
import { BadgeList } from "../badge-list/badge-list";
import { badges } from "../badges";
import { FieldsMapping } from "../fields-mapping/fields-mapping";
import { Printer } from "../printer/printer";

export const Container = ({ members, selected, fieldsMapping, dataFields }) => {
  const [badge, setBadge] = useState(null);

  const handleMappingChange = (mapping) => {
    console.log(mapping)
  }

  return (
    <div className="app-container">
      <BadgeList onBadgeSelected={(badgeName) => setBadge(badgeName)}/>
      { 
        badge
         ? <FieldsMapping 
            badgeFields={badges[badge].fields}
            dataFields={dataFields}
            onMappingChange={(m) => handleMappingChange(m)}
          />
          : "Select badge first"
      }
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