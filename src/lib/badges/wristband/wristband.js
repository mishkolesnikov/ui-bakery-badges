import { forwardRef, useEffect } from "react";
import { fields } from "./fields";
import { field } from "../../helpers";
import { QRCode } from '../../qrcode';
import { meritLogoBase64 } from "../favorite-stuffing/logosBase64";
import "./wristband.css";


const qrCodes = {};

export const WristBand = forwardRef(({ member, fieldsMapping, preview }, ref) => {
  const qrId = preview
  ? `qr-code-preview`
  : `qr-code-${member[fieldsMapping[fields.uid]]}`;

  const qrCode = member[fieldsMapping[fields.qrCode]];

  useEffect(() => {
    if (fieldsMapping[fields.qrCode]) {
      const el = document.getElementById(qrId);
      if (qrCodes[qrId] && qrCodes[qrId]._el === el) {
        qrCodes[qrId].clear();
        qrCodes[qrId].makeCode(qrCode);
      } else {
        qrCodes[qrId] = new QRCode(document.getElementById(qrId), {
          text: qrCode,
          height: 285,
          width: 285,
        });
      };
    }
  }, [qrCode, qrId, fieldsMapping]);

  return (
    <div className="container wristband" ref={ref}>
      <div id={qrId} className="qr-code"></div>
      <img
        src={meritLogoBase64}
        alt="merit-logo"
        className="merit-logo"
      ></img>
      <div className="text initials">{field(member, fieldsMapping, fields.initials)}</div>
      <div className="text user-id">{field(member, fieldsMapping, fields.id)}</div>
    </div>
  );
});