import SearchIcon from "../../assets/topnav/search.svg?react";
import NotificationIcon from "../../assets/topnav/notification.svg?react";
import ArrowIcon from "../../assets/topnav/arrow_down.svg?react";
import Logo from "../../assets/topnav/lendsr_logo_topnav.svg?react";
import ProfileImage from "../../assets/dashboard/profile_image.svg";

export default function DashboardHeader() {
  return (
    <header className="dashboard-header">
      <div className="dashboard-header__left">
        <Logo />
      </div>

      <div className="dashboard-header__search">
        <input type="text" placeholder="Search for anything" />
        <button>
          <SearchIcon />
        </button>
      </div>

      <div className="dashboard-header__right">
        <span className="docs">Docs</span>
        <NotificationIcon />

        <div className="profile">
          <img
            src={ProfileImage}
            alt="User avatar"
          />
          <span>Adedeji</span>
          <ArrowIcon />
        </div>
      </div>
    </header>
  );
}
