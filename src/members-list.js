import "./members-list.css";

export const MembersList = ({ data, onMemberSelected, onPreviewSelected }) => {
  return (
    <div className="members-list">
      {data.map((member, index) => (
        <div className='member' key={index}>
          <input type="checkbox" className="checkbox" onChange={(v) => onMemberSelected(v.target.checked, member.row_number_id)}></input>
          <div className='member-name' onClick={() => onPreviewSelected(member)}>{member.firstName}</div>
        </div>
      ))}
    </div>
  )
}