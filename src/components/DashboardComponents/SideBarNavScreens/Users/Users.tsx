import { useState } from "react";
import UserInfoCard from "./UsersComponents/UsersInfoCard";
import UsersListTableCard from "./UsersComponents/UsersListTableCard";
import UsersDetails from "./UsersDetials";
import UsersIcon from "../../../../assets/dashboard/users.svg?react";
import ActiveUsersIcon from "../../../../assets/dashboard/active_users.svg?react";
import UsersWithLoans from "../../../../assets/dashboard/users_with_loans.svg?react";
import UsersWithSavings from "../../../../assets/dashboard/users_with_savings.svg?react";
import { useUsersData } from "../../../../hooks/useUsersData";
import type { UserDetails } from "../../../../hooks/useUsersData";
import "../../../../styles/users.scss";

export default function Users() {
  const [selectedUser, setSelectedUser] = useState<UserDetails | null>(null);
  const { users, getUserDetails } = useUsersData();

const stats = [
  { title: "USERS", value: "2,453", icon: <UsersIcon />, iconBgColor: "rgba(223, 24, 255, 0.1)" },
  { title: "ACTIVE USERS", value: "2,453", icon: <ActiveUsersIcon />, iconBgColor: "rgba(87, 24, 255, 0.1)" },
  { title: "USERS WITH LOANS", value: "12,453", icon: <UsersWithLoans />, iconBgColor: "rgba(245, 95, 68, 0.1)" },
  { title: "USERS WITH SAVINGS", value: "102,453", icon: <UsersWithSavings />, iconBgColor: "rgba(255, 51, 102, 0.1)" },
];

  const handleUserClick = (userId: string) => {
    const userDetails = getUserDetails(userId);
    if (userDetails) {
      setSelectedUser(userDetails);
    }
  };

  if (selectedUser) {
    return <UsersDetails user={selectedUser} onBack={() => setSelectedUser(null)} />;
  }

  return (
    <div className="users-page">
      <h1 className="users-page__title">Users</h1>
      
      <div className="users-page__stats">
        {stats.map((stat, index) => (
          <UserInfoCard key={index} {...stat} />
        ))}
      </div>

      <UsersListTableCard users={users} onUserClick={handleUserClick} />
    </div>
  );
}