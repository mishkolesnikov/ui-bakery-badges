import "./members-list.css";

export const MembersList = ({ data, onMemberSelected, onPreviewSelected, fieldsMapping }) => {
  return (
    <div className="members-list">
      {data.map((member, index) => (
        <div className='member' key={index}>
          <input type="checkbox" className="checkbox" onChange={(v) => onMemberSelected(v.target.checked, member[fieldsMapping.uid])}></input>
          <div className='member-name' onClick={() => onPreviewSelected(member)}>{member[fieldsMapping.firstName]}</div>
        </div>
      ))}
    </div>
  )
}