import { useState } from "react";

export const Badge = ({ members, selected, badgeRefs, fieldsMapping, badge }) => {

  let [avatarFormat, setAvatarFormat] = useState('portrait');

  const changeFormat = (format) => {
    setAvatarFormat(format);
  }
  
  const badges = members.length > 0 
  ? members.map((member, index) => (
    <div className="badge-container" key={index}>
      <div className="front">
        <span className="heading">Front</span>
        <div className="badge-side-container">
          <badge.front
            member={members[index]}
            avatarFormat={avatarFormat}
            fieldsMapping={fieldsMapping}
            ref={badgeRefs[index].front}
            onFormatChange={() => {}}/>
        </div>
      </div>
      {badge.back && <div className="back">
        <span className="heading">Back</span>
        <div className="badge-side-container">
          <badge.back
            member={members[index]}
            fieldsMapping={fieldsMapping}
            ref={badgeRefs[index].back}/>
        </div>
      </div>}
    </div>
  ))
  : null;

  const preview =
      selected != null ? (
        <div>
          <div className="badge-container">
            <div className="front">
              <span className="heading">Front</span>
              <div className="badge-side-container">
                <badge.front
                  member={selected}
                  avatarFormat={avatarFormat}
                  fieldsMapping={fieldsMapping}
                  onFormatChange={(v) => changeFormat(v)}
                  preview/>
              </div>
            </div>
            {badge.back && <div className="back">
              <span className="heading">Back</span>
              <div className="badge-side-container">
                <badge.back
                  member={selected} fieldsMapping={fieldsMapping} preview />
              </div>
            </div>}
          </div>
          { !badge.noAvatar &&
              <button onClick={() => changeFormat(avatarFormat === 'portrait' ? 'landscape' : 'portrait')}>
                Recrop Avatar
              </button>
          }
        </div>
      ) : (
        'Please click on one of the elements to see the preview'
      );
  
      return (
        <div className="badge-contaner">
          {/* <div className="card-header">
            Badge
          </div> */}
          <div className="badge">
            <div className="preview">{preview}</div>
            <div className="to-print">{badges}</div>
          </div>
        </div>
      )
}