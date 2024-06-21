import "./App.css";

import { Routes, Route } from "react-router-dom";
import EmptyLayout from "./components/layout/EmptyLayout";
import Login from "./pages/LoginPage/login";
import Register from "./pages/RegisterPage/register";
import BookingPage from "./pages/BookingPage/booking-page";
import AboutUsPage from "./pages/AboutUsPage/about-us";
import ServicePage from "./pages/ServicePage/service-page";
import ClinicalPage from "./pages/ServicePage/ClinicalPage/clinical-page";
import SurgicalPage from "./pages/ServicePage/SurgicalPage/surgical-page";
import HoslisticPage from "./pages/ServicePage/HoslisticPage/hoslistic-page";
import GroomingPage from "./pages/ServicePage/GroomingPage/grooming-page";
import PricingPage from "./pages/ServicePage/PricingPage/pricing-page";
import ComboPage from "./pages/ServicePage/ComboPage/combo-page";
// import Home from "./pages/HomePage/home";
import AdminDashboard from "./pages/AdminPage/admin-dashboard";
import StaffDashboard from "./pages/StaffPage/staff-dashboard";
import DoctorDashboard from "./pages/DoctorPage/doctor-dashboard";
import DoctorLayout from "./components/layout/doctor-layout";

function App() {
    return (
        <Routes>
            <Route path="/" element={<EmptyLayout />}>
                {/* <Route path="/home" element={<Home />} /> */}
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/booking" element={<BookingPage />} />
                <Route path="/about-us" element={<AboutUsPage />} />
                <Route path="/service" element={<ServicePage />} />
                <Route path="/service/clinical" element={<ClinicalPage />} />
                <Route path="/service/surgical" element={<SurgicalPage />} />
                <Route path="/service/hoslistic" element={<HoslisticPage />} />
                <Route path="/service/grooming" element={<GroomingPage />} />
                <Route path="/service/pricing" element={<PricingPage />} />
                <Route path="/service/combo" element={<ComboPage />} />
                <Route path='/admin' element={<AdminDashboard />} />
                <Route path='/staff' element={<StaffDashboard />} />
            </Route>
            <Route path="/doctor" element={<DoctorLayout />}>
                <Route path="" element={<DoctorDashboard />} />
            </Route>
        </Routes>
    );
}

export default App;
