
import { data } from './data';
import React, { useState } from 'react';
import { MembersList } from './members-list';
import { Container } from './lib';
import './App.css'

export const App = () => {
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
        onPreviewSelected={(member) => handleMemberClick(member)}
        onMemberSelected={(isToPrint, memberId) => handleToPrintChange(isToPrint, memberId)}
      />
      <Container
        members={memberIdsToPrint.map(id => data.members.find(m => m.row_number_id === id))}
        dataFields={data.members && data.members.length > 0 ? Object.keys(data.members[0]) : []}
        selected={selected}
      />
    </div>
  )
}

export default App;
