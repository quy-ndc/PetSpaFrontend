import * as React from 'react';
import Modal from '@mui/material/Modal';
import { ButtonGroup } from '@mui/material';
import { useState } from 'react';
import BookingServiceDisplay from './BookingServiceDisplay/booking-service-display';
import BookingComboDisplay from './BookingComboDisplay/booking-combo-display';
import "./booking-service-picker.css"

interface BookingServicePickerProps {
    onChange: (selectedServiceId: number, selectedServiceName: string) => void;
}

const BookingServicePicker: React.FC<BookingServicePickerProps> = ({ onChange }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [openService, setOpenService] = React.useState(false);
    const handleOpenService = () => setOpenService(true);
    const handleCloseService = () => setOpenService(false);

    const [openCombo, setOpenCombo] = React.useState(false);
    const handleOpenCombo = () => setOpenCombo(true);
    const handleCloseCombo = () => setOpenCombo(false);

    const [service, setService] = useState<string>("");
    const [serviceId, setServiceId] = useState<number | null>(null);

    const handleServiceSelection = (selectedServiceId: number, selectedServiceName: string) => {
        setServiceId(selectedServiceId);
        setService(selectedServiceName);
        handleClose();
        handleCloseService();
        handleCloseCombo();
        onChange(selectedServiceId, selectedServiceName);
    };

    return (
        <div className='booking-service-picker'>
            <input
                type='text'
                value={service}
                disabled
                placeholder='Choose a service'
            />
            <button onClick={handleOpen}>Choose service</button>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <div className='booking-service-choice'>
                    <ButtonGroup variant="text" aria-label="Basic button group">
                        <React.Fragment>
                            <button onClick={handleOpenService}>Choose service</button>
                            <Modal
                                open={openService}
                                onClose={handleCloseService}
                            >
                                <BookingServiceDisplay
                                    handleClose={handleCloseService}
                                    handleServiceSelection={handleServiceSelection}
                                />
                            </Modal>
                        </React.Fragment>
                        {/* 
                        <React.Fragment>
                            <button onClick={handleOpenCombo}>Choose combo</button>
                            <Modal
                                open={openCombo}
                                onClose={handleCloseCombo}
                            >
                                <BookingComboDisplay
                                    handleClose={handleCloseCombo}
                                    handleServiceSelection={handleServiceSelection}
                                />
                            </Modal>
                        </React.Fragment> */}
                    </ButtonGroup>
                </div>
            </Modal>
        </div>
    );
}

export default BookingServicePicker;
