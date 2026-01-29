import { useState } from "react";
import CalenderIcon from "../../../../../assets/dashboard/calender.svg?react";
import "../../../../../styles/users-filter.scss";

interface Props {
  onClose: () => void;
}

export default function UsersTableFilter({ onClose }: Props) {
  const [formData, setFormData] = useState({
    organization: "",
    username: "",
    email: "",
    date: "",
    phoneNumber: "",
    status: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleReset = () => {
    setFormData({
      organization: "",
      username: "",
      email: "",
      date: "",
      phoneNumber: "",
      status: "",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle filter logic here
    console.log(formData);
    onClose();
  };

  return (
    <div className="filter-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Organization</label>
          <div className="input-wrapper">
            <select name="organization" value={formData.organization} onChange={handleChange}>
              <option value="">Select</option>
              <option value="lendsqr">Lendsqr</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label>Username</label>
          <div className="input-wrapper">
            <input type="text" name="username" placeholder="User" value={formData.username} onChange={handleChange} />
          </div>
        </div>

        <div className="form-group">
          <label>Email</label>
          <div className="input-wrapper">
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
          </div>
        </div>

        <div className="form-group">
          <label>Date</label>
          <div className="input-wrapper">
            <input 
              type="text" 
              name="date" 
              placeholder="Date" 
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => (e.target.type = "text")}
              value={formData.date} 
              onChange={handleChange} 
            />
            <CalenderIcon className="icon" />
          </div>
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <div className="input-wrapper">
            <input type="text" name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleChange} />
          </div>
        </div>

        <div className="form-group">
          <label>Status</label>
          <div className="input-wrapper">
            <select name="status" value={formData.status} onChange={handleChange}>
              <option value="">Select</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="pending">Pending</option>
              <option value="blacklisted">Blacklisted</option>
            </select>
          </div>
        </div>

        <div className="button-group">
          <button type="button" className="reset-btn" onClick={handleReset}>Reset</button>
          <button type="submit" className="filter-btn">Filter</button>
        </div>
      </form>
    </div>
  );
}