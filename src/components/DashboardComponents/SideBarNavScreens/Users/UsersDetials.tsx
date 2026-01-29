import { useState } from "react";
import UsersDetailsTopCard from "./UsersComponents/UsersDetailsTopCard";
import UsersDetailsFullCard from "./UsersComponents/UsersDetailsFullDataCard";
import type { UserDetails } from "../../../../hooks/useUsersData";

type TabType = "general" | "documents" | "bank" | "loans" | "savings" | "app";

interface Props {
  user: UserDetails;
  onBack: () => void;
}

export default function UsersDetails({ user, onBack }: Props) {
  const [activeTab, setActiveTab] = useState<TabType>("general");

  return (
    <div className="users-details-page">
      <UsersDetailsTopCard 
        user={user} 
        onBack={onBack} 
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      <UsersDetailsFullCard user={user} activeTab={activeTab} />
    </div>
  );
}