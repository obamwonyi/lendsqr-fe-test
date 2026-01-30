import { useState } from "react";
import FilterIcon from "../../../../../assets/dashboard/shared/filter.svg?react";
import MoreIcon from "../../../../../assets/dashboard/shared/users_list_dropdown_trigger.svg?react";
import "../../../../../styles/user-table.scss";
import UsersTableFilter from "./UsersTableFilter";
import TableItemActionsCard from "./TableItemActionsCard";
import LeftPaginationIcon from "../../../../../assets/dashboard/left_pagination_arrow.svg?react";
import RightPaginationIcon from "../../../../../assets/dashboard/right_paginagiton_arrow.svg?react";
import DropDownIcon from "../../../../../assets/dashboard/dropdown_arrow.svg?react";
import type { User } from "../../../../../hooks/useUsersData";

interface Props {
  users: User[];
  onUserClick: (userId: string) => void;
}

export default function UsersListTableCard({ users, onUserClick }: Props) {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [filterPosition, setFilterPosition] = useState({ top: 0, left: 0 });

  const handleFilterClick = (e: React.MouseEvent, column: string) => {
    e.stopPropagation();
    const target = e.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();
    
    setFilterPosition({
      top: rect.bottom + window.scrollY,
      left: rect.left + window.scrollX,
    });
    
    setActiveFilter(activeFilter === column ? null : column);
  };

  const closeFilter = () => {
    setActiveFilter(null);
  };

  const [activeMenuUserId, setActiveMenuUserId] = useState<string | null>(null);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });

  const handleMenuClick = (
    e: React.MouseEvent,
    userId: string
  ) => {
    e.stopPropagation();

    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();

    setMenuPosition({
      top: rect.bottom + window.scrollY,
      left: rect.left + window.scrollX - 120,
    });

    setActiveMenuUserId(
      activeMenuUserId === userId ? null : userId
    );
  };

  const [rowsPerPage, setRowsPerPage] = useState(9);
  const [currentPage, setCurrentPage] = useState(1);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const totalUsers = users.length;
  const totalPages = Math.ceil(totalUsers / rowsPerPage);

  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  const paginatedUsers = users.slice(startIndex, endIndex);

  // Generate page numbers with ellipsis logic
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxPagesToShow = 5;

    if (totalPages <= maxPagesToShow + 2) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);

      if (currentPage <= 3) {
        for (let i = 2; i <= 4; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages - 1);
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(2);
        pages.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push('...');
        pages.push(currentPage - 1);
        pages.push(currentPage);
        pages.push(currentPage + 1);
        pages.push('...');
        pages.push(totalPages - 1);
        pages.push(totalPages);
      }
    }

    return pages;
  };

  const handleRowsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRowsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  return (
    <div>
      <div className="users-table-container">
        <table className="users-table">
          <thead>
            <tr>
              {["ORGANIZATION", "USERNAME", "EMAIL", "PHONE NUMBER", "DATE JOINED", "STATUS"].map((label) => (
                <th key={label}>
                  <div className="th-content">
                    {label} 
                    <FilterIcon 
                      className="filter-icon"
                      onClick={(e) => handleFilterClick(e, label)}
                    />
                  </div>
                </th>
              ))}
              <th></th>
            </tr>
          </thead>
          <tbody>
            {paginatedUsers.map((user, index) => (
              <tr
                key={`${user.id}-${index}`}
                className="clickable-row"
                onClick={() => onUserClick(user.id)}
              >
                <td data-label="Organization">{user.organization}</td>
                <td data-label="Username">{user.username}</td>
                <td data-label="Email">{user.email}</td>
                <td data-label="Phone Number">{user.phone}</td>
                <td data-label="Date Joined">{user.dateJoined}</td>
                <td data-label="Status">
                  <span className={`status-badge status-badge--${user.status.toLowerCase()}`}>
                    {user.status}
                  </span>
                </td>
                <td>
                  <MoreIcon
                    className="more-icon"
                    onClick={(e) => handleMenuClick(e, user.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {activeMenuUserId && (
          <>
            <div
              className="filter-overlay"
              onClick={() => setActiveMenuUserId(null)}
            />

            <div
              style={{
                position: "absolute",
                top: `${menuPosition.top}px`,
                left: `${menuPosition.left}px`,
              }}
            >
              <TableItemActionsCard
                onViewDetails={() => onUserClick(activeMenuUserId)}
                onBlacklist={() => console.log("Blacklist user")}
                onActivate={() => console.log("Activate user")}
              />
            </div>
          </>
        )}

        {activeFilter && (
          <>
            <div className="filter-overlay" onClick={closeFilter} />
            <div 
              className="filter-dropdown"
              style={{
                position: 'absolute',
                top: `${filterPosition.top}px`,
                left: `${filterPosition.left}px`,
              }}
            >
              <UsersTableFilter onClose={closeFilter} />
            </div>
          </>
        )}
      </div>

      <div className="table-pagination">
        <div className="pagination-left">
          <span className="pagination-label">Showing</span>
          <div className="pagination-select-wrapper">
            <select 
              className="pagination-select"
              value={rowsPerPage}
              onChange={handleRowsPerPageChange}
              onFocus={() => setIsDropdownOpen(true)}
              onBlur={() => setIsDropdownOpen(false)}
            >
              <option value={9}>9</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
            <DropDownIcon className={`dropdown-icon ${isDropdownOpen ? 'active' : ''}`} />
          </div>
          <span className="pagination-label">out of {totalUsers}</span>
        </div>

        <div className="pagination-controls">
          <button
            className="pagination-arrow"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
          >
            <LeftPaginationIcon />
          </button>

          {getPageNumbers().map((page, index) => {
            if (page === '...') {
              return <span key={`ellipsis-${index}`} className="pagination-ellipsis">...</span>;
            }

            return (
              <button
                key={page}
                className={`pagination-number ${page === currentPage ? 'active' : ''}`}
                onClick={() => setCurrentPage(page as number)}
              >
                {page}
              </button>
            );
          })}

          <button
            className="pagination-arrow"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
          >
            <RightPaginationIcon />
          </button>
        </div>
      </div>
    </div>
  );
}