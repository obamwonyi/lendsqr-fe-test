import type { UserDetails } from "../../../../../hooks/useUsersData";
import "../../../../../styles/users-details-full-data-card.scss"

type TabType = "general" | "documents" | "bank" | "loans" | "savings" | "app";

interface Props {
  user: UserDetails;
  activeTab: TabType;
}

export default function UsersDetailsFullCard({ user, activeTab }: Props) {
  const renderGeneralDetails = () => (
    <div className="details-content">
      <div className="details-section">
        <h3 className="section-title">Personal Information</h3>
        <div className="details-grid">
          <div className="detail-item">
            <p className="detail-label">FULL NAME</p>
            <p className="detail-value">{user.personalInfo.fullName}</p>
          </div>
          <div className="detail-item">
            <p className="detail-label">PHONE NUMBER</p>
            <p className="detail-value">{user.personalInfo.phoneNumber}</p>
          </div>
          <div className="detail-item">
            <p className="detail-label">EMAIL ADDRESS</p>
            <p className="detail-value">{user.personalInfo.emailAddress}</p>
          </div>
          <div className="detail-item">
            <p className="detail-label">BVN</p>
            <p className="detail-value">{user.personalInfo.bvn}</p>
          </div>
          <div className="detail-item">
            <p className="detail-label">GENDER</p>
            <p className="detail-value">{user.personalInfo.gender}</p>
          </div>
          <div className="detail-item">
            <p className="detail-label">MARITAL STATUS</p>
            <p className="detail-value">{user.personalInfo.maritalStatus}</p>
          </div>
          <div className="detail-item">
            <p className="detail-label">CHILDREN</p>
            <p className="detail-value">{user.personalInfo.children}</p>
          </div>
          <div className="detail-item">
            <p className="detail-label">TYPE OF RESIDENCE</p>
            <p className="detail-value">{user.personalInfo.typeOfResidence}</p>
          </div>
        </div>
      </div>

      <div className="details-section">
        <h3 className="section-title">Education and Employment</h3>
        <div className="details-grid">
          <div className="detail-item">
            <p className="detail-label">LEVEL OF EDUCATION</p>
            <p className="detail-value">{user.education.level}</p>
          </div>
          <div className="detail-item">
            <p className="detail-label">EMPLOYMENT STATUS</p>
            <p className="detail-value">{user.education.employmentStatus}</p>
          </div>
          <div className="detail-item">
            <p className="detail-label">SECTOR OF EMPLOYMENT</p>
            <p className="detail-value">{user.education.sector}</p>
          </div>
          <div className="detail-item">
            <p className="detail-label">DURATION OF EMPLOYMENT</p>
            <p className="detail-value">{user.education.duration}</p>
          </div>
          <div className="detail-item">
            <p className="detail-label">OFFICE EMAIL</p>
            <p className="detail-value">{user.education.officeEmail}</p>
          </div>
          <div className="detail-item">
            <p className="detail-label">MONTHLY INCOME</p>
            <p className="detail-value">{user.education.monthlyIncome}</p>
          </div>
          <div className="detail-item">
            <p className="detail-label">LOAN REPAYMENT</p>
            <p className="detail-value">{user.education.loanRepayment}</p>
          </div>
        </div>
      </div>

      <div className="details-section">
        <h3 className="section-title">Socials</h3>
        <div className="details-grid">
          <div className="detail-item">
            <p className="detail-label">TWITTER</p>
            <p className="detail-value">{user.socials.twitter}</p>
          </div>
          <div className="detail-item">
            <p className="detail-label">FACEBOOK</p>
            <p className="detail-value">{user.socials.facebook}</p>
          </div>
          <div className="detail-item">
            <p className="detail-label">INSTAGRAM</p>
            <p className="detail-value">{user.socials.instagram}</p>
          </div>
        </div>
      </div>

      <div className="details-section">
        <h3 className="section-title">Guarantor</h3>
        {user.guarantor.map((guarantor, index) => (
          <div key={index} className="guarantor-block">
            <div className="details-grid">
              <div className="detail-item">
                <p className="detail-label">FULL NAME</p>
                <p className="detail-value">{guarantor.fullName}</p>
              </div>
              <div className="detail-item">
                <p className="detail-label">PHONE NUMBER</p>
                <p className="detail-value">{guarantor.phoneNumber}</p>
              </div>
              <div className="detail-item">
                <p className="detail-label">EMAIL ADDRESS</p>
                <p className="detail-value">{guarantor.emailAddress}</p>
              </div>
              <div className="detail-item">
                <p className="detail-label">RELATIONSHIP</p>
                <p className="detail-value">{guarantor.relationship}</p>
              </div>
            </div>
            {index < user.guarantor.length - 1 && <div className="guarantor-divider"></div>}
          </div>
        ))}
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case "general":
        return renderGeneralDetails();
      case "documents":
        return (
          <div className="empty-state">
            <p>Documents content will be displayed here</p>
          </div>
        );
      case "bank":
        return (
          <div className="empty-state">
            <p>Bank details content will be displayed here</p>
          </div>
        );
      case "loans":
        return (
          <div className="empty-state">
            <p>Loans content will be displayed here</p>
          </div>
        );
      case "savings":
        return (
          <div className="empty-state">
            <p>Savings content will be displayed here</p>
          </div>
        );
      case "app":
        return (
          <div className="empty-state">
            <p>App and System content will be displayed here</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="users-details-full-card">
      <div className="tab-content">{renderTabContent()}</div>
    </div>
  );
}