import { Link, Outlet } from "react-router-dom";
import "./doctor-layout.css";
import "./staff-layout.css";
import "./main-layout.css";
import logo from "../../assets/images/petspa-logo.png";
import { Tooltip } from "@mui/material";
import { useState, useEffect } from "react";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import api from "../../service/apiService";
import { useNavigate } from "react-router-dom";

const DoctorLayout = () => {
  const [selectedOption, setSelectedOption] = useState<string>("home");
  const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);
  const [account, setAccount] = useState<any>();
  const navigator = useNavigate();

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleLogout = async () => {
    try {
      const response = await api.post(`/user/logout`);
      sessionStorage.removeItem("jwtToken");
      setTimeout(() => {
        window.location.href = "http://localhost:5173";
      }, 2000);
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  const fetchCurrentUser = async () => {
    try {
      const response = await api.get(
        `user/currentUser/` + sessionStorage.getItem("jwtToken")
      );
      setAccount(response.data);
      if (response.data?.role?.roleName !== "admin") {
        navigator("/");
      }
    } catch (error) {
      console.error("Error fetching account data:", error);
    } finally {
      // setLoading(false);
    }
  };
  useEffect(() => {
    fetchCurrentUser();
  }, []);

  return (
    <div className="doctor-layout">
      <nav>
        <div className="doctor-nav-left">
          <img src={logo} />
          <div className="staff-nav-left-action">
            <Tooltip title="View your schedules">
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
            <Tooltip title="View your reviews">
              <Link
                to="review"
                onClick={() => handleOptionChange("review")}
                className={`${
                  selectedOption === "review" ? "active-staff-option" : ""
                }`}
              >
                Reviews
              </Link>
            </Tooltip>
          </div>
        </div>
        <div className="doctor-nav-right">
          <div className="nav-right-dropdown">
            {account ? (
              <button
                onClick={toggleDropdown}
                className="nav-right-dropdown-toggle"
              >
                {account?.userName}
              </button>
            ) : (
              <Link className="home-to-login" to="/login">
                Login
              </Link>
            )}
            {dropdownVisible && (
              <div className="nav-right-dropdown-menu">
                <div className="nav-right-dropdown-item">
                  <ExitToAppIcon />
                  <a onClick={handleLogout} className="nav-right-dropdown-item">
                    Logout
                  </a>
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

export default DoctorLayout;
