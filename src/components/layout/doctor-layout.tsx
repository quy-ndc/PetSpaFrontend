import { Link, Outlet } from "react-router-dom";
import './doctor-layout.css'
import './staff-layout.css'
import './main-layout.css'
import logo from '../../assets/images/petspa-logo.png'
import { Tooltip } from "@mui/material";
import { useState } from "react";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const DoctorLayout = () => {

    const [selectedOption, setSelectedOption] = useState<string>("home");
    const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);

    const handleOptionChange = (option: string) => {
        setSelectedOption(option);
    };

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    return (
        <div className="doctor-layout">
            <nav>
                <div className="doctor-nav-left">
                    <img src={logo} />
                    <div className="staff-nav-left-action">
                        <Link
                            to="/home"
                            onClick={() => handleOptionChange("home")}
                            className={`${selectedOption === 'home' ? 'active-staff-option' : ''}`}
                        >
                            Home
                        </Link>
                        <Tooltip title='View your schedules'>
                            <Link
                                to="schedule"
                                onClick={() => handleOptionChange("schedule")}
                                className={`${selectedOption === 'schedule' ? 'active-staff-option' : ''}`}
                            >
                                Schedule
                            </Link>
                        </Tooltip>
                        <Tooltip title='View your reviews'>
                            <Link
                                to="review"
                                onClick={() => handleOptionChange("review")}
                                className={`${selectedOption === 'review' ? 'active-staff-option' : ''}`}
                            >
                                Reviews
                            </Link>
                        </Tooltip>
                    </div>
                </div>
                <div className="doctor-nav-right">
                    <div className="nav-right-dropdown">
                        <button onClick={toggleDropdown} className="nav-right-dropdown-toggle">
                            Welcome Dr.Johnny
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
            </nav >
            <Outlet />
        </div >

    );
};

export default DoctorLayout;
