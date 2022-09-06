import React from "react";
import "./badge.css";
import { favLogoBase64 } from './logosBase64';
import { field } from "../../helpers";
import { fields } from './fields';

export const Front = React.forwardRef(({ member, fieldsMapping, preview }, ref) => {
  return (
    <div className="fav-stuffing container front" ref={ref}>
      <div className="header-container">
        <div className="header"></div>
      </div>
      <div className="body">
        <div className="name bold">{ field(member, fieldsMapping, fields.name) }</div>
        <div className="full-name">
          { field(member, fieldsMapping, fields.fullName) }
        </div>
        <div className="position">{field(member, fieldsMapping, fields.position) }</div>
        <div className="eid">
          <span>{`EID\u00A0\u00A0\u00A0${
            field(member, fieldsMapping, fields.eid)
          }`}</span>
        </div>
      </div>
      <div className="footer">
        <img src={favLogoBase64} alt="fs-logo"></img>
      </div>
    </div>
  );
});