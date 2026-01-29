import EyeIcon from "../../../../../assets/dashboard/shared/users_list_dropdown_eye.svg?react";
import BlackListIcon from "../../../../../assets/dashboard/shared/users_list_dropdown_blacklist_user.svg?react";
import ActiveUserIcon from "../../../../../assets/dashboard/shared/users_list_dropdown_active_user.svg?react";
import "../../../../../styles/table-item-actions.scss";

interface Props {
  onViewDetails: () => void;
  onBlacklist: () => void;
  onActivate: () => void;
}

export default function TableItemActionsCard({
  onViewDetails,
  onBlacklist,
  onActivate,
}: Props) {
  return (
    <div className="table-item-actions">
      <button onClick={onViewDetails}>
        <EyeIcon />
        <span>View Details</span>
      </button>

      <button onClick={onBlacklist}>
        <BlackListIcon />
        <span>Blacklist User</span>
      </button>

      <button onClick={onActivate}>
        <ActiveUserIcon />
        <span>Activate User</span>
      </button>
    </div>
  );
}
