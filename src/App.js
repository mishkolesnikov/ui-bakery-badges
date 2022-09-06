
import { data } from './data';
import React, { useState } from 'react';
import { MembersList } from './members-list';
import { Container } from './lib';
import './App.css'

export const App = () => {

  ////////////////////// cert-membership
  // const fieldsMapping = {
  //   uid: 'ID',
  //   avatarUrl: 'HEADSHOT_URL',
  //   position: 'POSITION',
  //   firstName: 'ISSUED_TO_FIRST_NAME_MERIT',
  //   lastName: 'ISSUED_TO_LAST_NAME_MERIT',
  //   memberNumber: 'ID',
  //   qrCode: 'QR_URL',
  //   expiration: 'EXPIRATION_DATE',
  // };

  //////////////////// favorite-stuffing
  const fieldsMapping = {
    uid: 'EMPLOYEE_ID',
    eid: 'EMPLOYEE_ID',
    name: 'ISSUED_TO_FIRST_NAME_MERIT',
    fullName: 'name',
    qrCode: 'QR_URL',
    position: 'POSITION',
  };

  // const badge = badges.favStuffing;
  const [selected, setSelected] = useState(null);
  const [memberIdsToPrint, setMemberIdsToPrint] = useState([]);

  const handleMemberClick = (member) => {
    setSelected(member);
  }

  const handleToPrintChange = (isToPrint, memberId) => {
    const newValue = isToPrint ? memberIdsToPrint.concat(memberId) : memberIdsToPrint.filter(id => id !== memberId);
    setMemberIdsToPrint(newValue);
  }

  return (
    <div>
      <MembersList 
        data={data.members}
        fieldsMapping={fieldsMapping}
        onPreviewSelected={(member) => handleMemberClick(member)}
        onMemberSelected={(isToPrint, memberId) => handleToPrintChange(isToPrint, memberId)}
      />
      <Container
        members={memberIdsToPrint.map(id => data.members.find(m => m[fieldsMapping.uid] === id))}
        dataFields={Object.keys(data.members[0])}
        selected={selected}
      />
    </div>
  )
}

export default App;
