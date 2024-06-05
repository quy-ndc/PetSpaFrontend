import React from 'react';
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from 'dayjs';
import "./booking-date-picker.css"
import isBetween from 'dayjs/plugin/isBetween';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import localizedFormat from 'dayjs/plugin/localizedFormat';

dayjs.extend(isBetween);
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(localizedFormat);
dayjs.tz.setDefault('Asia/Ho_Chi_Minh');


interface BookingDatePickerProps {
    value: Dayjs | null;
    onChange: (newValue: Dayjs | null) => void;
}

const BookingDatePicker: React.FC<BookingDatePickerProps> = ({ value, onChange }) => {

    const today = dayjs();
    const minDate = today;
    const maxDate = today.add(7, 'day');

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
                label="Choose a day"
                value={value}
                onChange={(newDate) => onChange(newDate)}
                minDate={minDate}
                maxDate={maxDate}
                className="booking-date-picker" // Apply custom class
            />
        </LocalizationProvider>
    );
};

export default BookingDatePicker;
