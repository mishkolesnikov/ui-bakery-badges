import { useState } from "react";

export const Badge = ({ members, selected, badgeRefs, fieldsMapping, badge }) => {

  let [avatarFormat, setAvatarFormat] = useState('portrait');

  const changeFormat = (format) => {
    setAvatarFormat(format);
  }

  const badges = members.map((member, index) => (
    <div className="badge-container" key={member[fieldsMapping.uid]}>
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
      <div className="back">
        <span className="heading">Back</span>
        <div className="badge-side-container">
          <badge.back
            member={members[index]}
            fieldsMapping={fieldsMapping}
            ref={badgeRefs[index].back}/>
        </div>
      </div>
    </div>
  ));

  const preview =
      selected !== undefined ? (
        <div>
          Preview
          <button onClick={() => changeFormat(avatarFormat === 'portrait' ? 'landscape' : 'portrait')}>
            Try Recrop Avatar
          </button>
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
            <div className="back">
              <span className="heading">Back</span>
              <div className="badge-side-container">
                <badge.back
                  member={selected} fieldsMapping={fieldsMapping} preview />
              </div>
            </div>
          </div>
        </div>
      ) : (
        'Please click on one of the elements to see the preview'
      );
  
      return (
        <div className="badge">
          <div className="preview">{preview}</div>
          <div className="to-print">{badges}</div>
        </div>
      )
}