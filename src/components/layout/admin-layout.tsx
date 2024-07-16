import { Link, Outlet } from "react-router-dom";
import './main-layout.css'
import { Tooltip } from "@mui/material";
import { useEffect, useState } from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import api from "../../service/apiService";

const AdminLayout = () => {

    const [scrolled, setScrolled] = useState<boolean>(false);
    const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);
    const [account, setAccount] = useState<any>();
    const [loading, setLoading] = useState(true);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 0) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const fetchCurrentUser = async () => {
        try {
            const response = await api.get(`user/currentUser/` + sessionStorage.getItem("jwtToken"));
            setAccount(response.data);
        } catch (error) {
            console.error("Error fetching account data:", error);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchCurrentUser();
    }, []);

    const handleLogout = async () => {
        try {
            const response = await api.post(`/user/logout`);
            console.log('Login successful:', response);
            sessionStorage.setItem('jwtToken', response.data.accessToken);
        } catch (err) {
            console.error('Login error:', err);
        }
    };

    if (loading) {
        return <h1 style={{ color: 'black' }}>Loading...</h1>;
    }

    return (
        <div className="main-layout">
            <nav className={scrolled ? 'scrolled' : ''}>
                <div className="main-nav-left">
                    <div className="main-nav-left-action">
                    </div>
                </div>
                <div className="main-nav-right">

                    <button onClick={toggleDropdown} className="nav-right-dropdown-toggle">
                        {account?.userName}
                    </button>

                    {dropdownVisible && (
                        <div className="nav-right-dropdown-menu">
                            <div className="nav-right-dropdown-item">
                                <ExitToAppIcon />
                                <a onClick={handleLogout} className="nav-right-dropdown-item">Logout</a>
                            </div>
                        </div>
                    )}
                </div>
            </nav >
            <Outlet />
        </div >

    );
};

export default AdminLayout;
