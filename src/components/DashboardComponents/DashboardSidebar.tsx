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



export default function DashboardSidebar() {
  return (
    <aside className="dashboard-sidebar">
      <div className="dashboard-sidebar__org">
        <SwitchOrgIcon />
        <span>Switch Organization</span>
        <ArrowIcon />
      </div>

      <nav className="dashboard-sidebar__nav">
        <a className="nav-item">
          <DashboardIcon />
          Dashboard
        </a>

        <p className="nav-section">CUSTOMERS</p>

        <a className="nav-item active">
          <UsersIcon />
          Users
        </a>

        <a className="nav-item">
          <GuarantorsIcon />
          Guarantors
        </a>

        <a className="nav-item">
          <LoansIcon />
          Loans
        </a>

        <a className="nav-item">
          <DecisionIcon />
          Decision Request
        </a>

        <a className="nav-item">
          <SavingsIcon />
          Savings
        </a>

        <a className="nav-item">
          <LoanRequestIcon />
          Loan Requests
        </a>

        <a className="nav-item">
          <WhiteListIcon />
          Whitelist
        </a>

        <a className="nav-item">
          <Karma />
          Karma
        </a>

        <p className="nav-section">BUSINESSES</p>

        <a className="nav-item">
          <SwitchOrgIcon />
          Organization
        </a>


        <a className="nav-item">
          <LoanRequestIcon />
          Load Products
        </a>


        <a className="nav-item">
          <SavingsProductsIcon />
          Savings Products
        </a>

        <a className="nav-item">
          <FeesChargesIcon />
          Fees and Charges
        </a>


        <a className="nav-item">
          <TransactionsIcon />
          Transactions
        </a>


        <a className="nav-item">
          <ServicesIcon />
          Services
        </a>


        <a className="nav-item">
          <ServicesAccountIcon />
          Service Account
        </a>


        <a className="nav-item">
          <SettlementsIcon />
          Settlements
        </a>


        <a className="nav-item">
          <ReportIcon />
          Reports
        </a>

        <p className="nav-section">SETTINGS</p>

        <a className="nav-item">
          <PreferenceIcon />
          Preference
        </a>

        <a className="nav-item">
          <FeesAndPricingIcon />
          Fees and Pricing
        </a>


        <a className="nav-item">
          <AuditLogsIcon />
          Audit Logs
        </a>


      </nav>
    </aside>
  );
}
