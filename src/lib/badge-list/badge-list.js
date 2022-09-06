import { badges } from "../badges";
import "./badge-list.css";

export const BadgeList = ({onBadgeSelected}) => {
  return (
    <div className="badges-list-contaner">
      <div className="card-header">
        Available Badges
      </div>
      <div className="badges-list">
        {
          Object.entries(badges).map(([badgeName, badge]) => (
            <div className="badge-element" key={badgeName} onClick={() => onBadgeSelected(badgeName)}>
              {badgeName}
            </div>
          ))
        }
      </div>
    </div>
  )
}