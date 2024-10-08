import React, { useEffect, useState } from "react";
import "./booking-page.css";
import BookingDatePicker from "./BookingDatePicker/booking-date-picker";
import BookingTimePicker from "./BookingTimePicker/booking-time-picker";
import BookingServicePicker from "./BookingServicePicker/booking-service-picker";
import BookingDoctorPicker from "./BookingDoctorPicker/booking-doctor-picker";
import BookingPetPicker from "./BookingPetPicker/booking-pet-picker";
import dayjs, { Dayjs } from "dayjs";
import api from "../../service/apiService";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookingPage: React.FC = () => {
    const [account, setAccount] = useState<any>();
    const [loading, setLoading] = useState(true);

    const fetchCurrentUser = async () => {
        try {
            const response = await api.get(
                `user/currentUser/` + sessionStorage.getItem("jwtToken")
            );
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

    // const [fullname, setFullname] = useState<string>("");
    // const handleFullnameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setFullname(event.target.value);
    // };

    // const [email, setEmail] = useState<string>("");
    // const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setEmail(event.target.value);
    // };

    // const [phone, setPhone] = useState<string>("");
    // const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setPhone(event.target.value);
    // };

    const [fullname, setFullname] = useState<string>("");
    const [fullnameError, setFullnameError] = useState<string>("");

    const handleFullnameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFullname(event.target.value);
        if (!validateName(event.target.value)) {
            setFullnameError("Full name is required!");
        } else {
            setFullnameError("");
        }
    };

    const [email, setEmail] = useState<string>("");
    const [emailError, setEmailError] = useState<string>("");

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
        if (!event.target.value) {
            setEmailError("Email is required!");
        } else if (!validateEmail(event.target.value)) {
            setEmailError("Invalid email!");
        } else {
            setEmailError("");
        }
    };

    const [phone, setPhone] = useState<string>("");
    const [phoneError, setPhoneError] = useState<string>("");

    const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPhone(event.target.value);
        if (!event.target.value) {
            setPhoneError("Phone is required!");
        } else if (!validatePhone(event.target.value)) {
            setPhoneError("Phone is invalid!");
        } else {
            setPhoneError("");
        }
    };

    useEffect(() => {
        if (account) {
            setFullname(account.fullName || "");
            setEmail(account.email || "");
            setPhone(account.phone || "");
        }
    }, [account]);

    const [date, setDate] = useState<Dayjs | null>(dayjs());
    const [time, setTime] = useState<Dayjs | null>(dayjs());
    const getAppointmentDateTime = (): string => {
        if (date && time) {
            return dayjs(date)
                .hour(time.hour() + 7)
                .minute(time.minute())
                .second(time.second())
                .toISOString();
        }
        return "";
    };

    const [service, setService] = useState<number>();
    const handleServiceChange = (
        selectedServiceId: number,
        selectedServiceName: string
    ) => {
        setService(selectedServiceId);
    };

    const [doctor, setDoctor] = useState<string | null>(null);
    const handleDoctorChange = (
        selectedOption: { value: string; label: string } | null
    ) => {
        setDoctor(selectedOption ? selectedOption.value : null);
    };

    const [pet, setPet] = useState<string | null>(null);
    const handlePetChange = (
        selectedOption: { value: string; label: string } | null
    ) => {
        setPet(selectedOption ? selectedOption.value : null);
    };

    const appointmentDate = {
        doctorId: doctor,
        startTime: getAppointmentDateTime(),
        serviceId: service,
        petId: pet,
    };
    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePhone = (phone: string) => {
        const phoneRegex = /^[0-9]{10}$/; // assuming 10 digits for phone number
        return phoneRegex.test(phone);
    };

    const validateName = (name: string) => {
        return name.trim().length > 0;
    };

    const handleBook = async (fullName: string, phone: string, email: string) => {
        try {
            console.log('BOOKing')
            const userEmail = encodeURIComponent(email);
            const response = await api.post(`/appointment/save?hospitalize=NO&full%20name=${fullName}&phone=${phone}&email=${userEmail}`, appointmentDate);
            toast.success("Book successful!");
            setTimeout(() => {
                window.location.href = "http://localhost:5173";
            }, 2000);
        } catch (err) {
            console.error("Logout error:", err);
            toast.error("Book unsuccessful!");
        }
    };

    const handleCancel = () => {
        window.location.href = "http://localhost:5173";
    }

    const isFormValid = () => {
        return fullname.trim() !== "" && email.trim() !== "" && phone.trim() !== "" && service;
    }

    if (loading) {
        return <h1 style={{ color: "black" }}>LOADING</h1>;
    }

    return (
        <>
            <div className="booking-container">
                <div className="booking-main">
                    <section className="booking-section">
                        <div className="booking-inner">
                            <h2>How should we contact you</h2>
                            <div className="booking-attribute-container">
                                <div className="booking-attribute">
                                    <div>Full name</div>
                                    <input
                                        required
                                        disabled={account}
                                        type="text"
                                        value={fullname}
                                        onChange={handleFullnameChange}
                                    />
                                </div>
                                <div className="booking-attribute">
                                    <div>Email</div>
                                    <input
                                        required
                                        disabled={account}
                                        type="email"
                                        value={email}
                                        onChange={handleEmailChange}
                                    />
                                </div>
                                <div className="booking-attribute">
                                    <div>Phone</div>
                                    <input
                                        required
                                        disabled={account}
                                        type="number"
                                        value={phone}
                                        onChange={handlePhoneChange}
                                    />
                                </div>
                            </div>
                        </div>
                        {account && (
                            <div className="booking-inner">
                                <h2>Which of your pet is this service for</h2>
                                <div className="booking-attribute-container">
                                    <div className="booking-attribute">
                                        <BookingPetPicker
                                            value={pet}
                                            onChange={handlePetChange}
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                    </section>
                    <section className="booking-section">
                        <div className="booking-inner">
                            <h2>When do you want this appointment</h2>
                            <div className="booking-date-container">
                                <BookingDatePicker
                                    value={date}
                                    onChange={setDate}
                                />
                                <BookingTimePicker
                                    value={time}
                                    onChange={setTime}
                                />
                            </div>
                        </div>
                        <div className="booking-inner">
                            <h2>What type of service/combo do you want</h2>
                            <div className="booking-attribute-container">
                                <div className="booking-attribute">
                                    <BookingServicePicker
                                        onChange={handleServiceChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="booking-inner">
                            <h2>Do you want to assign a specific doctor</h2>
                            <div className="booking-attribute-container">
                                <div className="booking-attribute">
                                    <BookingDoctorPicker
                                        value={doctor}
                                        onChange={handleDoctorChange}
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                </div >
                <div className="booking-action">
                    <button onClick={() => handleBook(fullname, phone, email)}>Confirm</button>
                    <button onClick={handleCancel}>Cancel</button>
                </div>
            </div>
            <ToastContainer />
        </>
    );
};

export default BookingPage;
