import { useEffect, forwardRef, useState } from 'react';
import { fields } from './fields';
import "./badge.css";
import { ScaledText } from '../../text-scale';

export const Front = forwardRef(({ member, avatarFormat, fieldsMapping, preview, onFormatChange}, ref) => {

  const [avatarClasses, setAvatarClasses] = useState(
    'avatar ' + avatarFormat
  );
  const badgeClass = `body ${getBadgeColor(member[fieldsMapping[fields.category]])}`;

  useEffect(() => {
    setAvatarClasses('avatar ' + avatarFormat);
  }, [avatarFormat]);

  const imageOnLoadHandler = (event) => {
    if (event.target.height / event.target.width < 1) {
      onFormatChange('landscape');
    } else {
      onFormatChange('portrait');
    }
  };

  return (
    <div className="container surfside" ref={ref}>
      <div className="header"></div>
      <div className={badgeClass}>
        <div className="avatar-row">
          <div className={avatarClasses}>
            <img
              alt="avatar"
              src={member[fieldsMapping[fields.avatar]]}
              className="img"
              onLoad={imageOnLoadHandler}
            ></img>
          </div>
          <div className="position">
            <div className="label">Position</div>
              <div className="value">
                  {member[fieldsMapping[fields.position]]}
              </div>
          </div>
        </div>
        <div className="name">
          <div className="label">Name</div>
          <div className="value last-name parent">
            <ScaledText text={member[fieldsMapping[fields.lastName]] || ''}>
            </ScaledText>
          </div>
          <div className="value">{member[fieldsMapping[fields.firstName]]}</div>
        </div>
        <div className="organization">
          <div className="label">Organization</div>
          <div className="value">{member[fieldsMapping[fields.organization]]}</div>
        </div>
      </div>
      <div className="footer">
        <ScaledText text={member[fieldsMapping[fields.category]]}></ScaledText></div>
    </div>
  );
});

const colorsCategoryMap = {
  Volunteer: 'green',
  'US&R': 'yellow',
  Press: 'cyan',
  Medical: 'pink',
  'Law Enforcement': 'blue',
  IMT: 'grey',
  'Fire Rescue': 'red',
  Federal: 'violet',
  'Elected Official': 'orange',
  Administrative: 'white',
};

const getBadgeColor = (value) => colorsCategoryMap[value]