import SwitchOrgIcon from "../../assets/sidebar/shared/switch_organization_and_organization.svg?react";
import ArrowIcon from "../../assets/sidebar/switch_organization_arrow.svg?react";
import DashboardIcon from "../../assets/sidebar/dashboard.svg?react";
import UsersIcon from "../../assets/sidebar/users.svg?react";
import GuarantorsIcon from "../../assets/sidebar/guarantors.svg?react";
import LoansIcon from "../../assets/sidebar/loans.svg?react";
import SavingsIcon from "../../assets/sidebar/savings.svg?react";
import DecisionIcon from "../../assets/sidebar/decision_models.svg?react";
import LoanRequestIcon from "../../assets/sidebar/shared/loan_requests_and_loan_products.svg?react";
import WhiteListIcon from "../../assets/sidebar/whitelist.svg?react";
import Karma from "../../assets/sidebar/karma.svg?react";
import SavingsProductsIcon from "../../assets/sidebar/savings_products.svg?react";
import FeesChargesIcon from "../../assets/sidebar/fees_and_charges.svg?react";
import TransactionsIcon from "../../assets/sidebar/transactions.svg?react";
import ServicesIcon from "../../assets/sidebar/services.svg?react";
import ServicesAccountIcon from "../../assets/sidebar/service_account.svg?react";
import SettlementsIcon from "../../assets/sidebar/settlements.svg?react";
import ReportIcon from "../../assets/sidebar/reports.svg?react";
import PreferenceIcon from "../../assets/sidebar/preferences.svg?react";
import FeesAndPricingIcon from "../../assets/sidebar/fees_and_pricing.svg?react";
import AuditLogsIcon from "../../assets/sidebar/audit_logs.svg?react";

interface Props {
  onNavigate?: () => void;
}

export default function DashboardSidebar({ onNavigate }: Props) {
  const handleNavClick = () => {
    if (onNavigate) {
      onNavigate();
    }
  };

  return (
    <aside className="dashboard-sidebar">
      <div className="dashboard-sidebar__org" onClick={handleNavClick}>
        <SwitchOrgIcon />
        <span>Switch Organization</span>
        <ArrowIcon />
      </div>

      <nav className="dashboard-sidebar__nav">
        <a className="nav-item" onClick={handleNavClick}>
          <DashboardIcon />
          Dashboard
        </a>

        <p className="nav-section">CUSTOMERS</p>

        <a className="nav-item active" onClick={handleNavClick}>
          <UsersIcon />
          Users
        </a>

        <a className="nav-item" onClick={handleNavClick}>
          <GuarantorsIcon />
          Guarantors
        </a>

        <a className="nav-item" onClick={handleNavClick}>
          <LoansIcon />
          Loans
        </a>

        <a className="nav-item" onClick={handleNavClick}>
          <DecisionIcon />
          Decision Request
        </a>

        <a className="nav-item" onClick={handleNavClick}>
          <SavingsIcon />
          Savings
        </a>

        <a className="nav-item" onClick={handleNavClick}>
          <LoanRequestIcon />
          Loan Requests
        </a>

        <a className="nav-item" onClick={handleNavClick}>
          <WhiteListIcon />
          Whitelist
        </a>

        <a className="nav-item" onClick={handleNavClick}>
          <Karma />
          Karma
        </a>

        <p className="nav-section">BUSINESSES</p>

        <a className="nav-item" onClick={handleNavClick}>
          <SwitchOrgIcon />
          Organization
        </a>

        <a className="nav-item" onClick={handleNavClick}>
          <LoanRequestIcon />
          Load Products
        </a>

        <a className="nav-item" onClick={handleNavClick}>
          <SavingsProductsIcon />
          Savings Products
        </a>

        <a className="nav-item" onClick={handleNavClick}>
          <FeesChargesIcon />
          Fees and Charges
        </a>

        <a className="nav-item" onClick={handleNavClick}>
          <TransactionsIcon />
          Transactions
        </a>

        <a className="nav-item" onClick={handleNavClick}>
          <ServicesIcon />
          Services
        </a>

        <a className="nav-item" onClick={handleNavClick}>
          <ServicesAccountIcon />
          Service Account
        </a>

        <a className="nav-item" onClick={handleNavClick}>
          <SettlementsIcon />
          Settlements
        </a>

        <a className="nav-item" onClick={handleNavClick}>
          <ReportIcon />
          Reports
        </a>

        <p className="nav-section">SETTINGS</p>

        <a className="nav-item" onClick={handleNavClick}>
          <PreferenceIcon />
          Preference
        </a>

        <a className="nav-item" onClick={handleNavClick}>
          <FeesAndPricingIcon />
          Fees and Pricing
        </a>

        <a className="nav-item" onClick={handleNavClick}>
          <AuditLogsIcon />
          Audit Logs
        </a>
      </nav>
    </aside>
  );
}