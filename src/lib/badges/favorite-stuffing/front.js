import React from "react";
import "./badge.css";
import { favLogoBase64 } from './logosBase64';

export const Front = React.forwardRef(({ member, fieldsMapping, preview }, ref) => {
  return (
    <div className="fav-stuffing container front" ref={ref}>
      <div className="header-container">
        <div className="header"></div>
      </div>
      <div className="body">
        <div className="name bold">{member[fieldsMapping.name]}</div>
        <div className="full-name">
          {member[fieldsMapping.fullName]}
        </div>
        <div className="position">{member[fieldsMapping.position]}</div>
        <div className="eid">
          <span>{`EID\u00A0\u00A0\u00A0${
            member[fieldsMapping.eid]
          }`}</span>
        </div>
      </div>
      <div className="footer">
        <img src={favLogoBase64} alt="fs-logo"></img>
      </div>
    </div>
  );
});