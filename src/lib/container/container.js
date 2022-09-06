import { useState } from "react";
import { BadgeList } from "../badge-list/badge-list";
import { badges } from "../badges";
import { FieldsMapping } from "../fields-mapping/fields-mapping";
import { Printer } from "../printer/printer";
import "./container.css";

export const Container = ({ members, selected, dataFields }) => {
  const [badge, setBadge] = useState(null);

  const handleMappingChange = (field, value) => {
    const mapping = Object.assign({}, fieldsMapping, { [field]: value });
    setFieldsMapping(mapping);
  }

  const [fieldsMapping, setFieldsMapping] = useState({});

  return (
    <div className="app-container">
      <BadgeList badge={badge} onBadgeSelected={(badgeName) => setBadge(badgeName)}/>
      { 
        badge
         ? <FieldsMapping 
            badgeFields={badges[badge].fields}
            dataFields={dataFields}
            fieldsMapping={fieldsMapping}
            onMappingChange={(field, value) => handleMappingChange(field, value)}
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