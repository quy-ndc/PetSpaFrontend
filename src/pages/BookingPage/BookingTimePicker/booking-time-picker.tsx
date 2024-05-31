import React from 'react';
import { LocalizationProvider, TimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import localizedFormat from 'dayjs/plugin/localizedFormat';

dayjs.extend(isBetween);
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(localizedFormat);
dayjs.tz.setDefault('Asia/Ho_Chi_Minh');

interface BookingTimePickerProps {
    value: Dayjs | null;
    onChange: (newValue: Dayjs | null) => void;
}

// Helper function to round the current time to the nearest 30-minute interval

const BookingTimePicker: React.FC<BookingTimePickerProps> = ({ value, onChange }) => {
    // Define the working hours
    const minTime = dayjs().set('hour', 8).startOf('hour');
    const maxTime = dayjs().set('hour', 17).startOf('hour');

    // List of booked times
    const bookedTimes = [
        dayjs().set('hour', 9).set('minute', 30).startOf('minute'),
        dayjs().set('hour', 11).set('minute', 0).startOf('minute'),
        // Add more booked times here
    ];

    // Function to check if a time should be disabled
    const shouldDisableTime = (timeValue: Dayjs) => {
        // Disable times outside of 8 AM to 5 PM
        if (!timeValue.isBetween(minTime, maxTime, null, '[]')) {
            return true;
        }

        // Disable times already booked
        for (const bookedTime of bookedTimes) {
            if (timeValue.isSame(bookedTime, 'minute')) {
                return true;
            }
        }

        // Disable past times for the current day
        if (timeValue.isBefore(dayjs(), 'minute')) {
            return true;
        }

        // Enable 30-minute intervals only
        if (timeValue.minute() !== 0 && timeValue.minute() !== 30) {
            return true;
        }

        return false;
    };

    return (
        <>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <TimePicker
                    label="Choose a time"
                    value={value}
                    onChange={(newValue) => onChange(newValue)}
                    // shouldDisableTime={shouldDisableTime}
                    // minTime={minTime}
                    // maxTime={maxTime}
                    views={['hours', 'minutes']}
                />
            </LocalizationProvider>
        </>
    );
};

export default BookingTimePicker;
