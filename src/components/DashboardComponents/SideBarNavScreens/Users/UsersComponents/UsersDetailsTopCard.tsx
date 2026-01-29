import ProfileImagePlaceHolder from "../../../../../assets/dashboard/user_profile_image_placeholder.svg?react";
import BackNavigationArrowIcon from "../../../../../assets/dashboard/back_navigation_arrow.svg?react";
import FullStarIcon from "../../../../../assets/dashboard/star_filled.svg?react";
import EmptyStarIcon from "../../../../../assets/dashboard/star_empty.svg?react";
import type { UserDetails } from "../../../../../hooks/useUsersData";
import "../../../../../styles/users-details-top-card.scss";

type TabType = "general" | "documents" | "bank" | "loans" | "savings" | "app";

interface Props {
  user: UserDetails;
  onBack: () => void;
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

export default function UsersDetailsTopCard({ user, onBack, activeTab, onTabChange }: Props) {
  const renderStars = (tier: number) => {
    const stars = [];
    for (let i = 0; i < 3; i++) {
      if (i < tier) {
        stars.push(<FullStarIcon key={i} className="star-icon" />);
      } else {
        stars.push(<EmptyStarIcon key={i} className="star-icon" />);
      }
    }
    return stars;
  };

  const handleBlacklist = () => {
    console.log("Blacklist user:", user.id);
  };

  const handleActivate = () => {
    console.log("Activate user:", user.id);
  };

  const tabs = [
    { id: "general" as TabType, label: "General Details" },
    { id: "documents" as TabType, label: "Documents" },
    { id: "bank" as TabType, label: "Bank Details" },
    { id: "loans" as TabType, label: "Loans" },
    { id: "savings" as TabType, label: "Savings" },
    { id: "app" as TabType, label: "App and System" },
  ];

  return (
    <div className="users-details-top-card">
      <div className="back-navigation" onClick={onBack}>
        <BackNavigationArrowIcon className="back-icon" />
        <span className="back-text">Back to Users</span>
      </div>

      <div className="details-header">
        <h1 className="details-title">User Details</h1>
        <div className="action-buttons">
          <button className="action-btn action-btn--blacklist" onClick={handleBlacklist}>
            BLACKLIST USER
          </button>
          <button className="action-btn action-btn--activate" onClick={handleActivate}>
            ACTIVATE USER
          </button>
        </div>
      </div>

      <div className="user-profile-card">
        <div className="profile-section">
          <div className="profile-info">
            <div className="avatar-container">
              <ProfileImagePlaceHolder className="avatar-icon" />
            </div>
            <div className="name-section">
              <h2 className="user-name">{user.fullName}</h2>
              <p className="user-id">{user.userId}</p>
            </div>
          </div>

          <div className="divider"></div>

          <div className="tier-section">
            <p className="tier-label">User's Tier</p>
            <div className="star-rating">{renderStars(user.tier)}</div>
          </div>

          <div className="divider"></div>

          <div className="bank-section">
            <h3 className="bank-balance">₦{user.bankBalance.toLocaleString()}</h3>
            <p className="bank-info">{user.accountNumber}/{user.bankName}</p>
          </div>
        </div>

        <div className="tabs-container">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => onTabChange(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}