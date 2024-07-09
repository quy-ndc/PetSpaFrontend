import { Link, Outlet } from "react-router-dom";
import "./staff-layout.css";
import image from "../../assets/images/clinical-image.jpg";
import logo from "../../assets/images/petspa-logo.png";
import { useState } from "react";
import { Tooltip } from "@mui/material";

const StaffLayout = () => {
  const [selectedOption, setSelectedOption] = useState<string>("home");
  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <div className="staff-layout">
      <nav className="staff-nav">
        <div className="staff-nav-left">
          <img src={logo} />
          <span>Welcome Miss...</span>
          <div className="staff-nav-left-action">
            <Tooltip title="Manage appointments">
              <Link
                to="appointment"
                onClick={() => handleOptionChange("home")}
                className={`${
                  selectedOption === "home" ? "active-staff-option" : ""
                }`}
              >
                Appointment
              </Link>
            </Tooltip>
            <Tooltip title="View doctor schedules">
              <Link
                to="schedule"
                onClick={() => handleOptionChange("schedule")}
                className={`${
                  selectedOption === "schedule" ? "active-staff-option" : ""
                }`}
              >
                Schedule
              </Link>
            </Tooltip>
            <Tooltip title="Manage reviews">
              <Link
                to="reviews"
                onClick={() => handleOptionChange("reviews")}
                className={`${
                  selectedOption === "reviews" ? "active-staff-option" : ""
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
                className={`${
                  selectedOption === "shelter" ? "active-staff-option" : ""
                }`}
              >
                Shelter
              </Link>
            </Tooltip>
          </div>
        </div>
        <div className="staff-nav-right">
          <img src={image} />
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default StaffLayout;
function useParam() {
    throw new Error("Function not implemented.");
}

