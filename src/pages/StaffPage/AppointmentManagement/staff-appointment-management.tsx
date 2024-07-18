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
      const response = await api.delete(`/appointment/delete/${id}`);
      if (response) {
        toast.success('Deny successful!');
      }
      setTimeout(() => {
        window.location.reload();
      }, 1000)
    } catch (err) {
      toast.error('Deny failed!');
    }
  };

  const handleApprove = async (id: number) => {
    try {
      const response = await api.put(`/appointment/updateStatus?appointmentId=${id}&status=ACTIVE`);
      if (response) {
        toast.success('Approve successful!');
      }
      setTimeout(() => {
        window.location.reload();
      }, 1000)
    } catch (err) {
      toast.error('Approve failed!');
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
              ?.filter((appointment) => appointment.status === 'INACTIVE')
              .map((filteredAppointment) => (
                <div key={filteredAppointment.id} className="appointment-card">
                  <div className="grid-item">
                    <strong>Pet:</strong> {filteredAppointment.pet ? `${filteredAppointment.pet.pet_name} the ${filteredAppointment.pet.species} (${filteredAppointment.pet.age})` : "N/A"}
                  </div>
                  <div className="grid-item">
                    <strong>Time:</strong> {formatISODate(filteredAppointment.startTime)}
                  </div>
                  <div className="grid-item">
                    <strong>Service:</strong> {filteredAppointment.bookedService.serviceName}
                  </div>
                  <div className="grid-item">
                    <strong>Doctor:</strong> {filteredAppointment.bookedDoctor.fullName}
                  </div>
                  <div className="grid-item">
                    <strong>Customer:</strong> {filteredAppointment.userName}
                  </div>
                  <div className="grid-item">
                    <strong>Contact:</strong> {filteredAppointment.phoneNumber}
                  </div>
                  <div className="grid-item">
                    <strong>Contact:</strong> {filteredAppointment.status}
                  </div>
                  <div>
                    < button
                      className="grid-item approve-button"
                      onClick={() => handleApprove(filteredAppointment.appointmentId)}
                    >
                      Approve
                    </button>
                    < button
                      className="grid-item deny-button"
                      onClick={() => handleDelete(filteredAppointment.appointmentId)}
                    >
                      Deny
                    </button>
                  </div>
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
