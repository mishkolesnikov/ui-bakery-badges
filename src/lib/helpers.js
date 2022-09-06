export const field = (member, fieldsMapping, fieldName) => {
  if (fieldsMapping[fieldName] == null) {
    return `{${fieldName}}`;
  }
  
  if (member[fieldsMapping[fieldName]] == null) {
    return '\u00A0';
  }

  return member[fieldsMapping[fieldName]];
}