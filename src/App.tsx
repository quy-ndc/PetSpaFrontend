import "./App.css";

import { Routes, Route } from "react-router-dom";
import EmptyLayout from "./layouts/EmptyLayout/EmptyLayout";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import BookingPage from "./pages/BookingPage/booking-page";
import ServicePage from "./pages/ServicePage/service-page";

function App() {
    return (
        <Routes>
            <Route path="/" element={<EmptyLayout />}>
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="/booking" element={<BookingPage />} />
                <Route path="/service" element={<ServicePage />} />
            </Route>
        </Routes>
    );
}

export default App;
