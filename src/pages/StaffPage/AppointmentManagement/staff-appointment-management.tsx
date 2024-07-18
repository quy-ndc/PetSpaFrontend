import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import "./staff-appointment-management.css";
import api from "../../../service/apiService";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const StaffAppointmentManagement: React.FC = () => {

  const [appointments, setAppointments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const fetchAppointmentData = async () => {
    try {
      const response = await api.get(`/appointment/getAll`);
      setAppointments(response.data.listData);
    } catch (error) {
      console.error("Error fetching account data:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchAppointmentData();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      const response = await api.post(`/appointment/updateStatus?appointmentId=${id}&status=INACTIVE`);
      if (response) {
        toast.success('Delete successful!');
      }
      setTimeout(() => {
        window.location.reload();
      }, 1000)
    } catch (err) {
      console.error('Delete pet error:', err);
      toast.error('Delete failed!');
    }
  };

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
      <div className="container">
        <main>
          <h1>Appointments</h1>
          <div>
            {appointments
              .filter(appointment => appointment.status === 'ACTIVE')
              .map(appointment => (
                <div key={appointment.id} className="appointment-card">
                  <div className="grid-item">
                    <strong>Pet:</strong> {appointment.pet ? `${appointment.pet.pet_name} the ${appointment.pet.species} (${appointment.pet.age})` : "N/A"}
                  </div>
                  <div className="grid-item">
                    <strong>Time:</strong> {formatISODate(appointment.startTime)}
                  </div>
                  {/* <div className="grid-item">
                    <strong>Serivce:</strong> {appointment.bookedService.serviceName}
                  </div> */}
                  {/* <div className="grid-item">
                    <strong>Doctor:</strong> {appointment.bookedDoctor.userName}
                  </div> */}
                  {/* 
               
                <div className="grid-item">
                  <strong>Phone:</strong> {appointment.customerPhone}
                </div>
                <div className="grid-item">
                  <strong>Pet Name:</strong> {appointment.petName}
                </div>
                <div className="grid-item">
                  <strong>Doctor:</strong> {appointment.doctorName}
                </div>
                
                <div className="grid-item">
                  <strong>Service/Combo:</strong> {appointment.serviceName}
                </div>
                <div className="grid-item">
                  <strong>Status:</strong> {appointment.status}
                </div> */}
                  < button
                    className="grid-item deny-button"
                    onClick={() => handleDelete(appointment.appointmentId)}
                  >
                    Delete
                  </button>
                </div>
              ))
            }
          </div >
          {/* <Pagination sx={{ display: "flex", justifyContent: "center" }} count={10} color="primary" /> */}
        </main >
      </div >
      <ToastContainer />
    </>
  );
};

export default StaffAppointmentManagement;
