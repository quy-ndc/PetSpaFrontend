import React, { useState } from 'react'
import Select from 'react-select'
import "./booking-pet-picker.css"

const options = [
    { value: 'Edgar', label: 'Edgar (dog)' },
    { value: 'Cinder', label: 'Cinder (cat)' },
    { value: 'Cake', label: 'Cake (cat)' },
    { value: 'Maya', label: 'Maya (dog)' },
]

interface BookingPetPickerProps {
    value: string | null;
    onChange: (selectedOption: { value: string, label: string } | null) => void;
}

const BookingPetPicker: React.FC<BookingPetPickerProps> = ({value, onChange}) => {

    const [isClearable,] = useState(true);
    const [isSearchable,] = useState(true);
    const [isDisabled,] = useState(false);
    const [isLoading,] = useState(false);
    const [isRtl,] = useState(false);

    return (
        <>
            <Select
                className="booking-pet-picker"
                classNamePrefix="select"
                defaultValue={options[0]}
                isDisabled={isDisabled}
                isLoading={isLoading}
                isClearable={isClearable}
                isRtl={isRtl}
                isSearchable={isSearchable}
                name="color"
                options={options}
                placeholder="Choose a time..."
                onChange={onChange}
                value={options.find(option => option.value === value)}
            />
        </>
    )
}

export default BookingPetPicker;