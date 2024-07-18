import React, { useEffect, useState } from 'react';
import '../../../../../DoctorPage/DashboardItemList/doctor-dashboard-item-list.css';
import UserFinishedAppointmentItem from './user-finished-appointment-item';
import api from '../../../../../../service/apiService';
import UserAppointmentItem from '../OtherAppointment/user-appointment-item';

const UserFinishedAppointmentItemList: React.FC = () => {

    const [account, setAccount] = useState<any>();
    const [appointments, setAppointment] = useState<any[]>([]);
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

    const fetchAppointmentData = async () => {
        try {
            const response = await api.get(`/appointment/getByUserId?userId=${account.userId}`);
            setAppointment(response.data.listData);
        } catch (error) {
            console.error("Error fetching account data:", error);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchAppointmentData();
    }, [account]);


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
            <div className="doctor-dashboard-item-list" style={{ padding: 12 }}>
                <div className="doctor-dashboard-item-list-right">
                    <div className="doctor-dashboard-items">
                        {appointments
                            ?.filter((appointment) => appointment.status === 'INACTIVE')
                            .map((filteredAppointment) => (
                                <UserAppointmentItem
                                    time={formatISODate(filteredAppointment.startTime)}
                                    type='Appointment'
                                    name={filteredAppointment.bookedDoctor.fullName}
                                    service={filteredAppointment.bookedService.serviceName}
                                />
                            ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserFinishedAppointmentItemList;