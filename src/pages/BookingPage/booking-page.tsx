import React, { useEffect, useState } from "react";
import "./booking-page.css";
import BookingDatePicker from "./BookingDatePicker/booking-date-picker";
import BookingTimePicker from "./BookingTimePicker/booking-time-picker";
import BookingServicePicker from "./BookingServicePicker/booking-service-picker";
import BookingDoctorPicker from "./BookingDoctorPicker/booking-doctor-picker";
import BookingPetPicker from "./BookingPetPicker/booking-pet-picker";
import dayjs, { Dayjs } from "dayjs";
import api from "../../service/apiService";

const BookingPage: React.FC = () => {

    const [account, setAccount] = useState<any>();
    const [loading, setLoading] = useState(true);

    const fetchCurrentUser = async () => {
        try {
            const response = await api.get(`user/currentUser/` + sessionStorage.getItem("jwtToken"));
            setAccount(response.data);
        } catch (error) {
            console.error("Error fetching account data:", error);
        }
    };
    useEffect(() => {
        fetchCurrentUser();
    }, []);



    const [fullname, setFullname] = useState<string>("");
    const handleFullnameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFullname(event.target.value);
    };

    const [email, setEmail] = useState<string>("");
    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const [phone, setPhone] = useState<string>("");
    const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPhone(event.target.value);
    };

    const [date, setDate] = useState<Dayjs | null>(dayjs());

    const [time, setTime] = useState<Dayjs | null>(dayjs());

    const [service, setService] = useState<string>("");
    const handleServiceChange = (selectedService: string) => {
        setService(selectedService);
    };

    const [doctor, setDoctor] = useState<string | null>(null)
    const handleDoctorChange = (selectedOption: { value: string, label: string } | null) => {
        setDoctor(selectedOption ? selectedOption.value : null);
    };

    const [pet, setPet] = useState<string | null>(null)
    const handlePetChange = (selectedOption: { value: string, label: string } | null) => {
        setPet(selectedOption ? selectedOption.value : null);
    };

    const appointmentDate = {
        fullName: fullname ? fullname : "",
        email: email ? email : "",
        phone: phone ? phone : "",
        date: date ? date.toISOString() : "",
        time: time ? time.toISOString() : "",
        service: service,
        doctor: doctor ? doctor : "",
        pet: pet ? pet : "",
    }

    console.log(account)

    console.log(appointmentDate)

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
                                        type="text"
                                        value={fullname}
                                        onChange={handleFullnameChange}
                                    />
                                </div>
                                <div className="booking-attribute">
                                    <div>Email</div>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={handleEmailChange}
                                    />
                                </div>
                                <div className="booking-attribute">
                                    <div>Phone</div>
                                    <input
                                        type="number"
                                        value={phone}
                                        onChange={handlePhoneChange}
                                    />
                                </div>
                            </div>
                        </div>
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
                    <button>Confirm</button>
                    <button>Cancel</button>
                </div>
            </div >
        </>
    );
};

export default BookingPage;
