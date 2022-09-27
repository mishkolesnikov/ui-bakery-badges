import { forwardRef, useEffect } from "react";
import { meritLogoBase64 } from "../favorite-stuffing/logosBase64";
import { QRCode } from '../../qrcode';
import { fields } from './fields';

const qrCodes = {};

export const Back = forwardRef(({ member, fieldsMapping, preview }, ref) => {
  const date = getFormattedDate();
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
          height: 230,
          width: 230,
        });
      };
    }
  }, [qrCode, qrId, fieldsMapping]);

  return (
    <div className="container back surfside" ref={ref}>
      <div className="text-container">
        <div className="line-1">Authorized access to</div>
        <div className="line-2">Shelter Access</div>
        <div className="line-3">Scan QR Code to verify current status</div>
      </div>
      <div className="timestamp">{date}</div>
      <div id={qrId} className="qr-code"></div>
      <img
        src={meritLogoBase64}
        alt="merit-logo"
        className="merit-logo"
      ></img>
    </div>
  );
});

const getFormattedDate = () => {
  const now = new Date();
  return (
    addLeadingZero(now.getDate().toString()) +
    '-' +
    addLeadingZero((now.getMonth() + 1).toString()) +
    '-' +
    now.getFullYear().toString() +
    ' (' +
    addLeadingZero(now.getHours().toString()) +
    ':' +
    addLeadingZero(now.getMinutes().toString()) +
    ')'
  );
}

const addLeadingZero = (string) => string.length === 2 ? string : `0${string}`;