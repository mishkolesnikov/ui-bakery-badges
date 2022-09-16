import React from "react";
import { meritLogoBase64 } from "./logosBase64";
import { QRCode } from '../../qrcode';
import { fields } from './fields';

const qrCodes = {};

export const Back = React.forwardRef(({ member, fieldsMapping, preview }, ref) => {
  const qrId = preview
    ? `qr-code-preview`
    : `qr-code-${member[fieldsMapping[fields.uid]]}`;

  const qrCode = member[fieldsMapping[fields.qrCode]];

  React.useEffect(() => {
    if (fieldsMapping[fields.qrCode]) {
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
      };
    }
  }, [qrCode, qrId, fieldsMapping]);

  return (
    <div className="cert-membership container back" ref={ref}>
      <div className="back-info-1 bold">
        <p>
          Scanning the member QR code will return any FEMA CERT credentialing
          typing and NCA Credentials that the member has achieved.
        </p>
      </div>
      <div className="qr-code" id={qrId}>
        { !fieldsMapping[fields.qrCode] && <p className='qr-code-placeholder'>{`{${fields.qrCode}}`}</p>}
      </div>
      <div className="back-info-2 bold">
        <p>Download the Merit App to scan this member’s ID QR Code.</p>
        <p>Search “Merit” on the App store and Android Shop</p>
      </div>
      <div className="logo-footer">
        <img
          src={meritLogoBase64}
          alt="merit-logo"
          className="merit-logo"
        ></img>
      </div>
    </div>
  );
});
