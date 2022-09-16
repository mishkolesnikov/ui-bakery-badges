import { useEffect, useState } from 'react';
import "./fields-mapping.css";

export const FieldsMapping = ({ badgeFields, dataFields, fieldsMapping, onMappingChange }) => {

  const [collapsed, setCollapsed] = useState(badgeFields.every(bf => dataFields.indexOf(bf) !== -1));

  useEffect(() => {
    const fieldsToPreselect = badgeFields.filter((bf) => dataFields.indexOf(bf) !== -1 && !fieldsMapping[bf]);
    fieldsToPreselect.forEach(mf => onMappingChange(mf, mf));
  }, [dataFields, badgeFields, onMappingChange, fieldsMapping]);

  const containerClasses = collapsed ? "fields-mapping-container collapsed" : "fields-mapping-container";

  return collapsed
    ? (
      <div className={containerClasses}>
        <div className="card-header">
          <button className='icon-button' onClick={() => setCollapsed(false)}>&gt;&gt;</button>
        </div>
        <i className="fields-mapping-title">Fields Mapping</i>
      </div>
      )
    : (
      <div className={containerClasses}>
        <div className="card-header">
          Fields Mapping
          <button className='icon-button' onClick={() => setCollapsed(true)}>&lt;&lt;</button>
        </div>
        <div className="fields">
          {
            badgeFields.map(field => (
              <div className="row" key={field}>
                <label><span className="label">{field}</span>
                  <select className="control" value={fieldsMapping[field]} onChange={(event) => onMappingChange(field, event.target.value)}>
                    <option hidden value={undefined}> -- select an option -- </option>
                    {
                      dataFields.map(field => (
                        <option value={field} key={field}>{field}</option>
                      ))
                    }
                  </select>
                </label>
              </div>)
            )
          }
        </div>
          
      </div>
    )
}
