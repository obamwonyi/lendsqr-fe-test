import { useState } from "react";
import Logo from "../../assets/topnav/lendsr_logo_topnav.svg?react";
import ProfileImage from "../../assets/dashboard/profile_image.svg";
import DashboardSidebar from "../../components/DashboardComponents/DashboardSidebar";
import Users from "../../components/DashboardComponents/SideBarNavScreens/Users/Users";
import "../../styles/dashboard-mobile.scss";

export default function DashboardMobile() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="dashboard-mobile">
      {/* Header */}
      <header className="dashboard-mobile__header">
        <div className="logo">
          <Logo />
        </div>
        <button
          className={`menu-toggle ${sidebarOpen ? 'active' : ''}`}
          onClick={toggleSidebar}
          aria-label="Toggle menu"
        >
          <span></span>
        </button>
      </header>

      {/* Sidebar Overlay */}
      <div
        className={`dashboard-mobile__sidebar-overlay ${sidebarOpen ? 'active' : ''}`}
        onClick={closeSidebar}
      />

      {/* Sidebar Drawer */}
      <aside className={`dashboard-mobile__sidebar ${sidebarOpen ? 'active' : ''}`}>
        <div className="sidebar-header">
          <Logo />
          <button className="close-btn" onClick={closeSidebar}>
            ×
          </button>
        </div>

        <div className="sidebar-profile">
          <img src={ProfileImage} alt="User avatar" />
          <div className="profile-info">
            <div className="name">Adedeji</div>
            <div className="role">Admin</div>
          </div>
        </div>

        <DashboardSidebar onNavigate={closeSidebar} />
      </aside>

      {/* Main Content */}
      <main className="dashboard-mobile__content">
        <div className="users-page-mobile users-table-mobile users-details-mobile">
          <Users />
        </div>
      </main>
    </div>
  );
}