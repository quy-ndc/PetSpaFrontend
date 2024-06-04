import "./App.css";

import { Routes, Route } from "react-router-dom";
import EmptyLayout from "./layouts/EmptyLayout/EmptyLayout";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import BookingPage from "./pages/BookingPage/booking-page";
import AboutUsPage from "./pages/AboutUsPage/about-us";
import ServicePage from "./pages/ServicePage/service-page";
import ClinicalPage from "./pages/ServicePage/ClinicalPage/clinical-page";
import SurgicalPage from "./pages/ServicePage/SurgicalPage/surgical-page";
import HoslisticPage from "./pages/ServicePage/HoslisticPage/hoslistic-page";
import GroomingPage from "./pages/ServicePage/GroomingPage/grooming-page";
import PricingPage from "./pages/ServicePage/PricingPage/pricing-page";
import ComboPage from "./pages/ServicePage/ComboPage/combo-page";

function App() {
    return (
        <Routes>
            <Route path="/" element={<EmptyLayout />}>
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
            </Route>
        </Routes>
    );
}

export default App;
