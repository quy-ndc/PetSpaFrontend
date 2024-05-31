import * as React from 'react';
import "./booking-combo-display.css"


interface BookingComboDisplaylProps {
    handleClose: () => void;
    handleServiceSelection: (selectedService: string) => void
}

const ServiceData = [
    { name: 'Spaying & neutering + Dentistry' },
    { name: 'Soft-tissue surgery + Mass removal' },
    { name: 'Orthopedic surgery + Stem cell' },
    { name: 'Junior suite + Therapeutic massage' },
    { name: 'Spaying + Neutering' },
    { name: 'Urine test + Blood test + Faecal test' },
    { name: 'Therapeutic massage + Acupuncture' },
];

const BookingComboDisplay: React.FC<BookingComboDisplaylProps> = ({ handleClose, handleServiceSelection }) => {

    const [searchTerm, setSearchTerm] = React.useState('');

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const renderServiceButtons = () => {
        return ServiceData
            .filter(service => service.name.toLowerCase().includes(searchTerm.toLowerCase()))
            .map(service => (
                <button
                    key={service.name}
                    onClick={() => handleServiceSelection(service.name)}
                >
                    {service.name}
                </button>
            ));
    };

    return (
        <div className='booking-combo-display'>
            <div className="booking-combo-top">
                <h2>Choose a combo</h2>
                <button onClick={handleClose}>X</button>
            </div>
            <input
                type='text'
                placeholder='Search combo.......'
                value={searchTerm}
                onChange={handleSearchChange}
            />
            <div className='booking-combo-container'>
                {renderServiceButtons()}
            </div>
        </div>
    );
}

export default BookingComboDisplay;
