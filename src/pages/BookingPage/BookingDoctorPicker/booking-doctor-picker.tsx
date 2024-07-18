import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import "./booking-doctor-picker.css";
import api from '../../../service/apiService';

interface BookingDoctorPickerProps {
    value: string | null;
    onChange: (selectedOption: { value: string, label: string } | null) => void;
}

interface Doctor {
    doctor_id: number;
    authenUser: {
        fullName: string;
    };
}

const BookingDoctorPicker: React.FC<BookingDoctorPickerProps> = ({ value, onChange }) => {
    const [doctors, setDoctors] = useState<{ value: string, label: string }[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchDoctorData = async () => {
        try {
            const response = await api.get(`/doctor/getAll`);
            const doctorOptions = response.data?.map((doctor: Doctor) => ({
                value: doctor.doctor_id.toString(),
                label: doctor.authenUser.fullName,
            }));
            setDoctors(doctorOptions);
        } catch (error) {
            console.error("Error fetching doctor data:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchDoctorData();
    }, []);

    if (loading) {
        return <h1 style={{ color: 'black' }}>LOADING</h1>;
    }

    return (
        <Select
            className="booking-doctor-picker"
            classNamePrefix="select"
            isClearable
            isSearchable
            isDisabled={false}
            isLoading={false}
            isRtl={false}
            name="doctor"
            options={doctors}
            placeholder="Choose a doctor..."
            onChange={onChange}
            value={doctors.find(option => option.value === value)}
        />
    );
};

export default BookingDoctorPicker;
