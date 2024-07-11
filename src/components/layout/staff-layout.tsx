import { Link, Outlet } from "react-router-dom";
import "./staff-layout.css";
import "./main-layout.css"
import logo from "../../assets/images/petspa-logo.png";
import { useState } from "react";
import { Tooltip } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const StaffLayout = () => {
  const [selectedOption, setSelectedOption] = useState<string>("home");
  const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className="staff-layout">
      <nav className="staff-nav">
        <div className="staff-nav-left">
          <img src={logo} />
          <div className="staff-nav-left-action">
            <Tooltip title="Manage appointments">
              <Link
                to="appointment"
                onClick={() => handleOptionChange("home")}
                className={`${selectedOption === "home" ? "active-staff-option" : ""
                  }`}
              >
                Appointment
              </Link>
            </Tooltip>
            <Tooltip title="View doctor schedules">
              <Link
                to="schedule"
                onClick={() => handleOptionChange("schedule")}
                className={`${selectedOption === "schedule" ? "active-staff-option" : ""
                  }`}
              >
                Schedule
              </Link>
            </Tooltip>
            <Tooltip title="Manage reviews">
              <Link
                to="reviews"
                onClick={() => handleOptionChange("reviews")}
                className={`${selectedOption === "reviews" ? "active-staff-option" : ""
                  }`}
              >
                Reviews
              </Link>
            </Tooltip>

            {/* Shelter */}
            <Tooltip title="Manage shelter">
              <Link
                to="shelter"
                onClick={() => handleOptionChange("shelter")}
                className={`${selectedOption === "shelter" ? "active-staff-option" : ""
                  }`}
              >
                Shelter
              </Link>
            </Tooltip>
          </div>
        </div>
        <div className="staff-nav-right">
          <div className="nav-right-dropdown">
            <button onClick={toggleDropdown} className="nav-right-dropdown-toggle">
              Welcome Mr.Jake
            </button>
            {dropdownVisible && (
              <div className="nav-right-dropdown-menu">
                <div className="nav-right-dropdown-item">
                  <AccountCircleIcon />
                  <Link to="/profile" className="nav-right-dropdown-item">Profile</Link>
                </div>
                <div className="nav-right-dropdown-item">
                  <ExitToAppIcon />
                  <Link to="/logout" className="nav-right-dropdown-item">Logout</Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default StaffLayout;

