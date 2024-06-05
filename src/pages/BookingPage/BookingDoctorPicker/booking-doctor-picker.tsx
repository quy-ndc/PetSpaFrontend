import React, { useState } from 'react';
import Select from 'react-select';
import "./booking-doctor-picker.css";

const options = [
    { value: 'Luisina Percara', label: 'Luisina Percara' },
    { value: 'Malki Kockmaduwa Gamage', label: 'Malki Kockmaduwa Gamage' },
    { value: 'Charlotte Guis', label: 'Charlotte Guis' },
    { value: 'Sophie Herrmann', label: 'Sophie Herrmann' },
    { value: 'Anna Klinnikova', label: 'Anna Klinnikova' },
    { value: 'Martyna Lukmin', label: 'Martyna Lukmin' }
];

interface BookingDoctorPickerProps {
    value: string | null;
    onChange: (selectedOption: { value: string, label: string } | null) => void;
}

const BookingDoctorPicker: React.FC<BookingDoctorPickerProps> = ({ value, onChange }) => {
    const [isClearable,] = useState(true);
    const [isSearchable,] = useState(true);
    const [isDisabled,] = useState(false);
    const [isLoading,] = useState(false);
    const [isRtl,] = useState(false);

    return (
        <>
            <Select
                className="booking-doctor-picker"
                classNamePrefix="select"
                isDisabled={isDisabled}
                isLoading={isLoading}
                isClearable={isClearable}
                isRtl={isRtl}
                isSearchable={isSearchable}
                name="doctor"
                options={options}
                placeholder="Choose a doctor..."
                onChange={onChange}
                value={options.find(option => option.value === value)}
            />
        </>
    );
};

export default BookingDoctorPicker;
