import React, { useEffect, useState } from 'react';
import './doctor-dashboard-item-list.css';
import DoctorDashboardItem from '../DashboardItem/doctor-dashboard-item';
import api from '../../../service/apiService';

const DoctorDashboardItemList: React.FC = () => {

    const [account, setAccount] = useState<any>();
    const [doctor, setDoctor] = useState<any>();
    const [appointments, setAppointments] = useState<any[]>();
    const [loading, setLoading] = useState(true)

    const fetchCurrentUser = async () => {
        try {
            const response = await api.get(`user/currentUser/` + sessionStorage.getItem("jwtToken"));
            setAccount(response.data);
            if (response.data.role?.roleName != "doctor") {
                window.location.href = "http://localhost:5173";
            }
        } catch (error) {
            console.error("Error fetching account data:", error);
        }
    };
    useEffect(() => {
        fetchCurrentUser();
    }, []);

    const fetchCurrentDoctor = async () => {
        try {
            const response = await api.get(`/doctor/getByUserId/${account.userId}`);
            setDoctor(response.data);
        } catch (error) {
            console.error("Error fetching account data:", error);
        }
    };
    useEffect(() => {
        fetchCurrentDoctor();
    }, [account]);

    const fetchAppointmentList = async () => {
        try {
            const response = await api.get(`/appointment/getByDoctorId?doctorId=${doctor.doctorId}`);
            setAppointments(response.data.listData);
        } catch (error) {
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchAppointmentList();
    }, [doctor]);

    const formatISODate = (isoString: string): string => {
        const date = new Date(isoString);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const formattedDay = String(day).padStart(2, '0');
        const formattedMonth = String(month).padStart(2, '0');
        const formattedHours = String(hours).padStart(2, '0');
        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedDate = `${formattedHours}:${formattedMinutes} on ${formattedDay}/${formattedMonth}`;
        return formattedDate;
    };

    if (loading) {
        return <h1 style={{ color: 'black' }}>LOADING</h1>
    }

    return (
        <>
            <div className="doctor-dashboard-item-list">
                <div className="doctor-dashboard-item-list-right">
                    <div className="doctor-dashboard-items">
                        {appointments?.map((appointment) => (
                            <DoctorDashboardItem
                                time={formatISODate(appointment.startTime)}
                                type='Appointment'
                                gender=''
                                name={appointment.userName}
                                service={appointment.bookedService.serviceName}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default DoctorDashboardItemList;