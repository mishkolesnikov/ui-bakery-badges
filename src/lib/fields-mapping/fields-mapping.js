export const FieldsMapping = ({ badgeFields, dataFields, onMappingChange }) => {
  return (
    <div className="fiels-mapping-container">
      { 
        badgeFields.map(field => (
          <div className="row" key={field}>
            <label>{field}
              <select>
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
  )
}