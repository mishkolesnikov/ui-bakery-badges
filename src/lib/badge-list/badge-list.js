import { badges } from "../badges";
import "./badge-list.css";

export const BadgeList = ({badge, onBadgeSelected}) => {

  const badgeItemClasses = (badgeName) => {
    return badge === badgeName ? 'badge-element selected' : 'badge-element';
  }

  return (
    <div className="badges-list-contaner">
      <div className="card-header">
        Available Badges
      </div>
      <div className="badges-list">
        {
          Object.entries(badges).map(([badgeName, badge]) => (
            <div className={badgeItemClasses(badgeName)} key={badgeName} onClick={() => onBadgeSelected(badgeName)}>
              {badge.title}
            </div>
          ))
        }
      </div>
    </div>
  )
}