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
import Home from "./pages/HomePage/home";
import AdminDashboard from "./pages/AdminPage/admin-dashboard";
import DoctorLayout from "./components/layout/doctor-layout";
import DoctorDashboard from "./pages/DoctorPage/doctor-dashboard";
import StaffLayout from "./components/layout/staff-layout";
import StaffDashboard from "./pages/StaffPage/staff-dashboard";
import StaffReviewManagement from "./pages/StaffPage/ReviewManagement/staff-review-management";
import StaffAppointmentManagement from "./pages/StaffPage/AppointmentManagement/staff-appointment-management";
import SchedulerView from "./components/Scheduler/Scheduler";
import DoctorReviewManagement from "./pages/DoctorPage/doctor-review-management";
import MainLayout from "./components/layout/main-layout";
import CheckOut from "./pages/CheckOut/check-out";
import StaffShelterManage from "./pages/StaffPage/Shelter/staff-shelter-manage";
import Profile from "./pages/ProfilePage/Profile";
import AccountSettings from "./components/UserProfile/AccountSetting";
import ChangePassword from "./pages/ProfilePage/UserProfie/ChangePassword";
import YourOrders from "./pages/ProfilePage/UserProfie/Order";
import Order from "./pages/ProfilePage/UserProfie/Order";
import PetList from "./pages/ProfilePage/UserProfie/PetList";

function App() {
    return (
        <Routes>
            <Route path='/admin' element={<AdminDashboard />} />
            <Route path="/" element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />
                {/* <Route path="/profile" element={<Profile />} /> */}
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
                <Route path='/check-out' element={<CheckOut />} />
            </Route>
            <Route path="/doctor" element={<DoctorLayout />}>
                <Route path="/doctor/" element={<DoctorDashboard />} />
                <Route path="/doctor/schedule" element={<DoctorDashboard />} />
                <Route path='/doctor/review' element={<DoctorReviewManagement />} />
            </Route>
            <Route path="/staff" element={<StaffLayout />}>
                <Route path='/staff/' element={<StaffAppointmentManagement />} />
                <Route path='/staff/appointment' element={<StaffAppointmentManagement />} />
                <Route path='/staff/schedule' element={<SchedulerView />} />
                <Route path='/staff/reviews' element={<StaffReviewManagement />} />
                <Route path='/staff/shelter' element={<StaffShelterManage />} />
            </Route>
        </Routes>
    );
}

export default App;
