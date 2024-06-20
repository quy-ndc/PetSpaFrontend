import { Outlet } from "react-router-dom";
import './doctor-layout.css'
import image from '../../assets/images/clinical-image.jpg'
import logo from '../../assets/images/petspa-logo.png'


const DoctorLayout = () => {
    return (
        <div className="doctor-layout">
            <nav>
                <div className="nav-left">
                    <img src={logo} />
                    <span>Welcome Dr.Timothy</span>
                </div>
                <div className="nav-right">
                    <img src={image} />
                </div>
            </nav>
            <Outlet />
        </div>

    );
};

export default DoctorLayout;
