import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";
import "./staff-appointment-management.css";

interface Appointment {
  id: number;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  petName: string;
  doctorName: string;
  dateTime: string;
  serviceName: string;
  status: 'pending' | 'approved' | 'denied';
}

const StaffAppointmentManagement: React.FC = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([
    {
      id: 1,
      customerName: "John Doe",
      customerEmail: "john.doe@example.com",
      customerPhone: "123-456-7890",
      petName: "Buddy",
      doctorName: "Dr. Smith",
      dateTime: "June 19 - 12:30 AM",
      serviceName: "Grooming",
      status: 'pending'
    },
    {
      id: 2,
      customerName: "Jane Smith",
      customerEmail: "jane.smith@example.com",
      customerPhone: "098-765-4321",
      petName: "Milo",
      doctorName: "Dr. Brown",
      dateTime: "June 19 - 3:20 PM",
      serviceName: "Medical bath",
      status: 'pending'
    },
  ]);

  const handleApprove = (id: number) => {
    setAppointments(appointments.filter((appointment) => appointment.id !== id));
  };

  const handleDeny = (id: number) => {
    setAppointments(appointments.filter((appointment) => appointment.id !== id));
  };

  return (
    <div className="container">
      <main>
        <h1>Appointments</h1>
        <div>
          {appointments.map((appointment) => (
            <div key={appointment.id} className="appointment-card">
              <div className="grid-item">
                <strong>Customer:</strong> {appointment.customerName}
              </div>
              <div className="grid-item">
                <strong>Email:</strong> {appointment.customerEmail}
              </div>
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
                <strong>Date/Time:</strong> {appointment.dateTime}
              </div>
              <div className="grid-item">
                <strong>Service/Combo:</strong> {appointment.serviceName}
              </div>
              <div className="grid-item">
                <strong>Status:</strong> {appointment.status}
              </div>
              {appointment.status === 'pending' && (
                <div className="handle-pending">
                  <button
                    className="grid-item approve-button"
                    onClick={() => handleApprove(appointment.id)}
                  >
                    Approve
                  </button>
                  <button
                    className="grid-item deny-button"
                    onClick={() => handleDeny(appointment.id)}
                  >
                    Deny
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
        <Pagination sx={{ display: "flex", justifyContent: "center" }} count={10} color="primary" />
      </main>
    </div>
  );
};

export default StaffAppointmentManagement;
