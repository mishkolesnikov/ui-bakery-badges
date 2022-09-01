import React from "react";
import "./badge.css";
import { ncaLogoBase64, certLogoBase64 } from './logosBase64';

export const Front = React.forwardRef(({ member, avatarFormat, fieldsMapping, preview, onFormatChange}, ref) => {
  const [avatarClasses, setAvatarClasses] = React.useState(
    'avatar ' + avatarFormat
  );

  const [avatarLoading, setAvatarLoading] = React.useState(true);

  const avatarUrl = member[fieldsMapping.avatarUrl];

  React.useEffect(() => {
    setAvatarClasses('avatar ' + avatarFormat);
  }, [avatarFormat]);

  React.useEffect(() => {
    setAvatarLoading(true);
  }, [avatarUrl]);

  const imageOnLoadHandler = (event) => {
    setAvatarLoading(false);
    if (event.target.height / event.target.width < 1) {
      onFormatChange('landscape');
    } else {
      onFormatChange('portrait');
    }
  };

  const avatar = !preview ? (
    <div className={avatarClasses}>
      <img
        src={avatarUrl}
        className="img"
        onLoad={imageOnLoadHandler}
        alt="avatar"
      ></img>
    </div>
  ) : (
    <div className={avatarClasses}>
      <div
        className="loader"
        style={avatarLoading ? {} : { display: 'none' }}
      >
        Loading...
      </div>
      <img
        style={avatarLoading ? { display: 'none' } : {}}
        src={member[fieldsMapping.avatarUrl]}
        className="img"
        onLoad={imageOnLoadHandler}
        alt="avatar"
      ></img>
    </div>
  );
  return (
    <div className="cert-membership container" ref={ref}>
      <div className="header-1 bold">National CERT Association</div>
      <div className="header-2 bold">
        {member[fieldsMapping.position] || '\u00A0'}
      </div>
      <div className="body">
        <div className="side">
          {member[fieldsMapping.expiration]
            ? 'Valid until ' + member[fieldsMapping.expiration]
            : '\u00A0'}
        </div>
        <div className="center">
          <div className="avatar-row">{avatar}</div>
          <div className="name bold">
            <div className="value">
              {member[fieldsMapping.firstName]}
            </div>
            <div className="value last-name">
              {member[fieldsMapping.lastName]}
            </div>
          </div>
          <div className="logos">
            <img
              className="nca-logo"
              src={ncaLogoBase64}
              alt="nca-logo"
            ></img>
            <img
              className="cert-logo"
              src={certLogoBase64}
              alt="cert-logo"
            ></img>
          </div>
          <div className="info bold">
            This card is valid for National CERT Association related events
            and activities only
          </div>
        </div>
      </div>
      <div className="footer-1 bold">
        {member[fieldsMapping.memberNumber]
          ? getMemberType(member[fieldsMapping.memberNumber].slice(1))
          : '\u00A0'}
      </div>
      <div className="footer-2 bold">
        {member[fieldsMapping.memberNumber] || '\u00A0'}
      </div>
    </div>
  );
});

const getMemberType = (memberNumber) => {
  return memberNumber < 1000 ? 'Charter Member' : 'General Member';
};
