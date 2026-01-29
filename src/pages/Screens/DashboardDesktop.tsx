import DashboardHeader from "../../components/DashboardComponents/DashboardHeader";
import DashboardSidebar from "../../components/DashboardComponents/DashboardSidebar";
import "../../styles/dashboard-layout.scss";
import Users from "../../components/DashboardComponents/SideBarNavScreens/Users/Users";


export default function DashboardDesktop() {
  return (
    <div className="dashboard-layout">
      <DashboardHeader />

      <div className="dashboard-layout__body">
        <DashboardSidebar />

        <main className="dashboard-layout__content">
          <Users />
        </main>
      </div>
    </div>
  );
}
