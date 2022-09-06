import "./fields-mapping.css";

export const FieldsMapping = ({ badgeFields, dataFields, fieldsMapping, onMappingChange }) => {
  return (
    <div className="fields-mapping-container">
      <div className="card-header">
        Fields Mapping
      </div>
      <div className="fiels">
        {
          badgeFields.map(field => (
            <div className="row" key={field}>
              <label><span class="label">{field}</span>
                <select class="control" value={fieldsMapping[field]} onChange={(event) => onMappingChange(field, event.target.value)}>
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