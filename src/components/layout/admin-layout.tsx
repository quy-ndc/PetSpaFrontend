import { Link, Outlet } from "react-router-dom";
import './main-layout.css'
import { useEffect, useState } from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import api from "../../service/apiService";
import DashboardIcon from '@mui/icons-material/Dashboard';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

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
            if (response.data.role?.roleName != "admin") {
                window.location.href = "http://localhost:5173";
            }
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
            sessionStorage.removeItem("jwtToken");
            if (!sessionStorage.getItem('jwtToken')) {
                toast.success('Logout successful')
                setTimeout(() => {
                    window.location.href = "http://localhost:5173";
                }, 2000);
            }
            else {
                toast.error('Logout unsuccessful');
            }

        } catch (err) {
            console.error("Logout error:", err);
            toast.error('Logout unsuccessful');
        }
    };

    if (loading) {
        return <h1 style={{ color: 'black' }}>Loading...</h1>;
    }

    return (
        <div className="main-layout">
            <nav className={scrolled ? 'scrolled' : ''}>
                <div className="main-nav-left">
                    <Link to="/">
                        <svg
                            widths={50}
                            height={50}
                            x="0px"
                            y="0px"
                            width="100%"
                            viewBox="0 0 605 557"
                            enable-background="new 0 0 605 557"
                        >
                            <path
                                fill="#680847"
                                opacity="1.000000"
                                stroke="none"
                                d=" M522.032837,323.226166   C521.452759,333.759491 516.790100,342.569366 510.155945,350.398651   C500.777344,361.466553 489.056183,368.642303 474.525391,370.782318   C473.060089,370.998108 471.553497,370.989624 470.066010,370.990295   C444.308868,371.001770 418.551666,370.984711 392.794586,371.025299   C390.841919,371.028351 388.889801,371.417267 386.269836,372.104187   C385.403290,374.041412 385.032593,375.501038 385.030914,376.961060   C384.999908,404.039490 385.012878,431.117981 385.016602,458.196442   C384.676514,469.417908 380.205688,478.994690 373.136322,487.451691   C360.254730,502.861755 343.643738,509.545959 323.657684,509.081512   C306.525360,508.683380 289.375793,509.088257 272.234680,508.992737   C244.862030,508.840210 221.331421,488.557312 216.173080,463.012451   C215.848465,461.404907 216.029602,459.695251 216.017441,457.126404   C216.038559,430.084564 216.036301,403.949402 215.958832,377.814453   C215.953125,375.886047 215.405655,373.959259 215.110046,372.031708   C213.218658,371.687225 211.328018,371.047455 209.435791,371.042755   C183.109100,370.977264 156.778748,371.264221 130.456345,370.922089   C105.557213,370.598450 80.891487,347.095245 79.004219,323.133545   C79.017998,297.776154 78.999260,273.308502 78.980515,248.840881   C79.140923,238.928009 83.643723,230.552673 89.483749,223.189026   C97.013161,213.695221 106.116837,205.740524 118.401329,202.830276   C122.842117,201.778214 127.484955,201.579086 132.955765,201.000610   C158.861862,201.006165 183.847885,201.026932 208.833603,200.951569   C210.904694,200.945328 212.973801,200.288391 215.043839,199.933792   C215.043839,199.933792 215.039047,200.036804 215.267365,199.722504   C215.662308,198.105026 215.973114,196.801987 215.974335,195.498672   C215.999588,168.605331 215.989594,141.711960 215.986603,114.818596   C215.778610,103.877357 220.050552,94.400566 226.501053,86.059227   C234.739288,75.406120 245.098282,67.393585 258.699402,64.637360   C262.878235,63.790535 267.172302,63.111206 271.419891,63.073994   C290.379974,62.907890 309.342316,63.008804 328.303864,62.999302   C340.175262,62.993355 351.301910,65.843788 360.867188,72.932625   C374.313629,82.897797 383.419189,95.738846 384.991638,113.860977   C384.967072,141.117722 384.962189,167.483505 385.050476,193.848969   C385.057373,195.911911 385.714600,197.972702 386.069580,200.034485   C386.069580,200.034485 385.962189,200.036896 386.284668,200.251251   C388.070892,200.642670 389.534546,200.972778 390.998474,200.974075   C416.689087,200.996765 442.379730,200.979263 468.070374,200.970490   C494.061432,199.478104 519.222717,223.886032 522.000244,248.858673   C521.993896,274.235199 522.013367,298.730682 522.032837,323.226166  M339.642212,378.232544   C344.998779,374.869720 348.064453,369.823761 350.009247,363.991791   C353.633698,353.123016 351.312347,342.712860 347.983215,332.197571   C345.134308,323.199280 342.991577,313.968323 340.773346,304.783051   C339.525421,299.615662 339.238831,294.183105 337.673828,289.131958   C334.256683,278.102936 326.825043,271.128357 315.326752,268.629669   C305.730560,266.544312 297.841309,270.974091 289.725555,274.827118   C278.189087,280.304138 266.667725,285.822052 255.008698,291.028717   C246.969528,294.618774 239.750092,299.107147 234.243637,306.134125   C222.528610,321.084076 227.018127,343.546448 245.861938,349.533142   C248.706116,350.436707 251.568069,351.580017 254.496185,351.875671   C273.473755,353.791870 289.626831,361.475555 302.996918,375.054871   C303.113312,375.173096 303.249054,375.272552 303.377991,375.378021   C314.515778,384.488770 326.289337,385.568756 339.642212,378.232544  M372.461609,274.993225   C385.226532,266.575043 392.607910,255.191498 391.132965,239.440262   C390.203522,229.514618 381.909119,222.592377 372.401520,223.025024   C353.730865,223.874664 336.356781,244.796127 338.934113,263.325745   C340.124023,271.880463 345.374207,277.519745 353.788177,279.354279   C360.427063,280.801788 366.255432,278.700775 372.461609,274.993225  M329.897430,206.764618   C322.698334,194.653122 310.455719,192.348602 300.094543,201.154617   C289.178436,210.432327 284.471222,227.160370 288.963135,240.712494   C294.120514,256.272339 309.816559,260.216827 321.731567,248.947357   C332.406525,238.850769 335.800201,222.178421 329.897430,206.764618  M403.288635,287.127991   C400.596100,285.885986 398.019257,284.054199 395.191895,283.499634   C379.219635,280.366760 360.447327,295.189789 359.476501,311.450684   C358.885681,321.346039 365.702209,329.205322 375.634064,330.080048   C389.768066,331.324921 404.627472,321.344788 408.628143,307.750549   C410.851868,300.194214 409.965576,293.235992 403.288635,287.127991  M251.495148,273.205750   C256.374664,272.185608 262.114014,272.466980 265.980133,269.912872   C280.288879,260.459991 280.608093,233.975677 267.074188,223.472168   C261.384796,219.056702 255.103867,218.381180 248.921112,222.007614   C239.010910,227.820343 235.389648,237.230621 235.717117,248.195465   C236.043839,259.134674 239.702225,268.389648 251.495148,273.205750  z"
                            />
                            <path
                                fill="#823267"
                                opacity="1.000000"
                                stroke="none"
                                d=" M386.043610,199.562515   C385.714600,197.972702 385.057373,195.911911 385.050476,193.848969   C384.962189,167.483505 384.967072,141.117722 384.982147,114.268448   C385.348297,115.479614 385.966217,117.173691 385.970184,118.869194   C386.032593,145.609528 386.016052,172.350067 386.043610,199.562515  z"
                            />
                            <path
                                fill="#823267"
                                opacity="1.000000"
                                stroke="none"
                                d=" M385.369934,457.928650   C385.012878,431.117981 384.999908,404.039490 385.030914,376.961060   C385.032593,375.501038 385.403290,374.041412 385.904236,372.283752   C386.139160,398.729279 386.077301,425.472717 385.993530,452.216034   C385.987854,454.031250 385.817200,455.845917 385.369934,457.928650  z"
                            />
                            <path
                                fill="#86396C"
                                opacity="1.000000"
                                stroke="none"
                                d=" M215.628967,115.079811   C215.989594,141.711960 215.999588,168.605331 215.974335,195.498672   C215.973114,196.801987 215.662308,198.105026 215.215805,199.722275   C214.956818,173.453674 214.972900,146.870987 215.010086,120.288315   C215.012405,118.639099 215.180420,116.990120 215.628967,115.079811  z"
                            />
                            <path
                                fill="#86396C"
                                opacity="1.000000"
                                stroke="none"
                                d=" M215.069824,372.498138   C215.405655,373.959259 215.953125,375.886047 215.958832,377.814453   C216.036301,403.949402 216.038559,430.084564 216.022156,456.700317   C215.647690,455.822998 215.018433,454.465485 215.016434,453.107056   C214.977188,426.392975 215.010834,399.678741 215.069824,372.498138  z"
                            />
                            <path
                                fill="#8D4474"
                                opacity="1.000000"
                                stroke="none"
                                d=" M214.571640,199.964859   C212.973801,200.288391 210.904694,200.945328 208.833603,200.951569   C183.847885,201.026932 158.861862,201.006165 133.402924,200.990387   C134.617920,200.646790 136.305267,200.045471 137.994049,200.041382   C163.362396,199.979965 188.730942,199.997192 214.571640,199.964859  z"
                            />
                            <path
                                fill="#8D4474"
                                opacity="1.000000"
                                stroke="none"
                                d=" M467.826355,200.611237   C442.379730,200.979263 416.689087,200.996765 390.998474,200.974075   C389.534546,200.972778 388.070892,200.642670 386.281311,200.197632   C411.347504,199.953064 436.739532,199.971405 462.131500,200.010483   C463.948578,200.013290 465.765411,200.167953 467.826355,200.611237  z"
                            />
                            <path
                                fill="#823267"
                                opacity="1.000000"
                                stroke="none"
                                d=" M78.631462,249.107819    C78.999260,273.308502 79.017998,297.776154 79.010628,322.727539   C78.657440,322.508881 78.043533,321.805939 78.044792,321.104095   C78.087906,297.194275 78.189369,273.284515 78.631462,249.107819  z"
                            />
                            <path
                                fill="#78225B"
                                opacity="1.000000"
                                stroke="none"
                                d=" M522.380371,322.948669   C522.013367,298.730682 521.993896,274.235199 522.004028,249.254303   C522.369019,249.808243 522.994751,250.846954 522.996948,251.886978   C523.045898,274.995850 523.027771,298.104889 523.007019,321.213898   C523.006592,321.699707 522.824951,322.185394 522.380371,322.948669  z"
                            />
                            <path
                                fill="#FEFDFD"
                                opacity="1.000000"
                                stroke="none"
                                d=" M339.341217,378.441040   C326.289337,385.568756 314.515778,384.488770 303.377991,375.378021   C303.249054,375.272552 303.113312,375.173096 302.996918,375.054871   C289.626831,361.475555 273.473755,353.791870 254.496185,351.875671   C251.568069,351.580017 248.706116,350.436707 245.861938,349.533142   C227.018127,343.546448 222.528610,321.084076 234.243637,306.134125   C239.750092,299.107147 246.969528,294.618774 255.008698,291.028717   C266.667725,285.822052 278.189087,280.304138 289.725555,274.827118   C297.841309,270.974091 305.730560,266.544312 315.326752,268.629669   C326.825043,271.128357 334.256683,278.102936 337.673828,289.131958   C339.238831,294.183105 339.525421,299.615662 340.773346,304.783051   C342.991577,313.968323 345.134308,323.199280 347.983215,332.197571   C351.312347,342.712860 353.633698,353.123016 350.009247,363.991791   C348.064453,369.823761 344.998779,374.869720 339.341217,378.441040  z"
                            />
                            <path
                                fill="#FDFBFC"
                                opacity="1.000000"
                                stroke="none"
                                d=" M372.139526,275.172058   C366.255432,278.700775 360.427063,280.801788 353.788177,279.354279   C345.374207,277.519745 340.124023,271.880463 338.934113,263.325745   C336.356781,244.796127 353.730865,223.874664 372.401520,223.025024   C381.909119,222.592377 390.203522,229.514618 391.132965,239.440262   C392.607910,255.191498 385.226532,266.575043 372.139526,275.172058  z"
                            />
                            <path
                                fill="#FCFBFC"
                                opacity="1.000000"
                                stroke="none"
                                d=" M330.036346,207.115097   C335.800201,222.178421 332.406525,238.850769 321.731567,248.947357   C309.816559,260.216827 294.120514,256.272339 288.963135,240.712494   C284.471222,227.160370 289.178436,210.432327 300.094543,201.154617   C310.455719,192.348602 322.698334,194.653122 330.036346,207.115097  z"
                            />
                            <path
                                fill="#FCFAFC"
                                opacity="1.000000"
                                stroke="none"
                                d=" M403.571289,287.356628   C409.965576,293.235992 410.851868,300.194214 408.628143,307.750549   C404.627472,321.344788 389.768066,331.324921 375.634064,330.080048   C365.702209,329.205322 358.885681,321.346039 359.476501,311.450684   C360.447327,295.189789 379.219635,280.366760 395.191895,283.499634   C398.019257,284.054199 400.596100,285.885986 403.571289,287.356628  z"
                            />
                            <path
                                fill="#FCFAFB"
                                opacity="1.000000"
                                stroke="none"
                                d=" M251.114410,273.108459   C239.702225,268.389648 236.043839,259.134674 235.717117,248.195465   C235.389648,237.230621 239.010910,227.820343 248.921112,222.007614   C255.103867,218.381180 261.384796,219.056702 267.074188,223.472168   C280.608093,233.975677 280.288879,260.459991 265.980133,269.912872   C262.114014,272.466980 256.374664,272.185608 251.114410,273.108459  z"
                            />
                        </svg>
                    </Link>
                </div>
                <div className="main-nav-right">

                    <button onClick={toggleDropdown} className="nav-right-dropdown-toggle">
                        {account?.userName}
                    </button>

                    {dropdownVisible && (
                        <div className="nav-right-dropdown-menu">
                            <div className="nav-right-dropdown-item">
                                <AccountCircleIcon />
                                <Link
                                    onClick={toggleDropdown}
                                    to="/profile"
                                    className="nav-right-dropdown-item"
                                >
                                    Profile
                                </Link>
                            </div>
                            <div className="nav-right-dropdown-item">
                                <DashboardIcon />
                                <Link
                                    onClick={toggleDropdown}
                                    to="/admin"
                                    className="nav-right-dropdown-item"
                                >
                                    Dashboard
                                </Link>
                            </div>
                            <div className="nav-right-dropdown-item">
                                <CalendarMonthIcon />
                                <Link
                                    onClick={toggleDropdown}
                                    to="/staff"
                                    className="nav-right-dropdown-item"
                                >
                                    Schedule
                                </Link>
                            </div>
                            <div className="nav-right-dropdown-item">
                                <ExitToAppIcon />
                                <a onClick={handleLogout} className="nav-right-dropdown-item">Logout</a>
                            </div>
                        </div>
                    )}
                </div>
            </nav >
            <Outlet />
            <ToastContainer />
        </div >

    );
};

export default AdminLayout;
