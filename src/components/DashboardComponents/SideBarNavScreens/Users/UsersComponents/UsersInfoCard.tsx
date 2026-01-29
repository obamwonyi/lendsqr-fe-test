import "../../../../../styles/user-info-card.scss";

interface UserInfoCardProps {
  icon: React.ReactNode;
  title: string;
  value: string | number;
}

export default function UserInfoCard({
  icon,
  title,
  value,
}: UserInfoCardProps) {
  return (
    <div className="user-info-card">
      <div className="user-info-card__icon">
        {icon}
      </div>

      <p className="user-info-card__title">{title}</p>
      <h2 className="user-info-card__value">{value}</h2>
    </div>
  );
}
