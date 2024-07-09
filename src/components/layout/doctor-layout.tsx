import { Link, Outlet } from "react-router-dom";
import './doctor-layout.css'
import './staff-layout.css'
import image from '../../assets/images/clinical-image.jpg'
import logo from '../../assets/images/petspa-logo.png'
import { Tooltip } from "@mui/material";
import { useState } from "react";


const DoctorLayout = () => {

    const [selectedOption, setSelectedOption] = useState<string>("home");

    const handleOptionChange = (option: string) => {
        setSelectedOption(option);
    };

    return (
        <div className="doctor-layout">
            <nav>
                <div className="doctor-nav-left">
                    <img src={logo} />
                    <span>Welcome Dr.Timothy</span>
                    <div className="staff-nav-left-action">
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
                    <img src={image} />
                </div>
            </nav >
            <Outlet />
        </div >

    );
};

export default DoctorLayout;
