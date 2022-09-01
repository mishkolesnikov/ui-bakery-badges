import { Printer } from './lib';
import { badges } from './lib';
import { data } from './data';
import React from 'react';

export const App = () => {

  ////////////////////// cert-membership
  const fieldsMapping = {
    uid: 'ID',
    avatarUrl: 'HEADSHOT_URL',
    position: 'POSITION',
    firstName: 'ISSUED_TO_FIRST_NAME_MERIT',
    lastName: 'ISSUED_TO_LAST_NAME_MERIT',
    memberNumber: 'ID',
    qrCode: 'QR_URL',
    expiration: 'EXPIRATION_DATE',
  };

  const badge = badges.certMembership;

  ////////////////////// favorite-stuffing
  // const fieldsMapping = {
  //   uid: 'EMPLOYEE_ID',
  //   eid: 'EMPLOYEE_ID',
  //   name: 'ISSUED_TO_FIRST_NAME_MERIT',
  //   fullName: 'name',
  //   qrCode: 'QR_URL',
  //   position: 'POSITION',
  // };

  // const badge = badges.favStuffing;

  return (
    <Printer
      members={data.members}
      selected={data.selected}
      fieldsMapping={fieldsMapping}
      badge={badge}
    />
  )
}

export default App;
