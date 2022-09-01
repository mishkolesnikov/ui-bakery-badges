import React from "react";
import { meritLogoBase64 } from "./logosBase64";
import { QRCode } from '../../qrcode';

const qrCodes = {};
export const Back = React.forwardRef(({ member, fieldsMapping, preview }, ref) => {
  const qrId = preview
  ? `qr-code-preview`
  : `qr-code-${member[fieldsMapping.uid]}`;

  const qrCode = member[fieldsMapping.qrCode];

  React.useEffect(() => {
    setTimeout(() => {
      const el = document.getElementById(qrId);
      if (qrCodes[qrId] && qrCodes[qrId]._el === el) {
        qrCodes[qrId].clear();
        qrCodes[qrId].makeCode(qrCode);
      } else {
        qrCodes[qrId] = new QRCode(document.getElementById(qrId), {
          text: qrCode,
          height: 230,
          width: 230,
        });
      }
    });
  }, [qrCode, qrId]);

  return (
    <div className="fav-stuffing container back" ref={ref}>
      <div className="back-content">
        <div className="back-info">
          If found, email <b className="bold">help@merits.com</b>
        </div>
        <div className="qr-code-container">
          <div className="qr-code" id={qrId}></div>
          <img
            className="merit-logo"
            src={meritLogoBase64}
            alt="merit-logo"
          ></img>
        </div>
      </div>
    </div>
  );
});