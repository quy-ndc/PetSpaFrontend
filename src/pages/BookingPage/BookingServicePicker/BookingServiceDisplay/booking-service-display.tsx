import * as React from 'react';
import './booking-service-display.css';

interface BookingServiceDisplayProps {
    handleClose: () => void;
    handleServiceSelection: (selectedService: string) => void;
}

const ServiceData = [
    { name: 'Spaying & neutering', type: 'Clinical' },
    { name: 'Dentistry', type: 'Clinical' },
    { name: 'Soft-tissue surgery', type: 'Clinical' },
    { name: 'Mass removal', type: 'Clinical' },
    { name: 'Orthopedic surgery', type: 'Clinical' },
    { name: 'Stem cell', type: 'Clinical' },
    { name: 'Junior suite', type: 'Clinical' },
    { name: 'Therapeutic massage', type: 'Clinical' },
    { name: 'Chauffer service', type: 'Clinical' },
    { name: 'Specialist surgeries', type: 'Surgical' },
    { name: 'Dental cleaning', type: 'Surgical' },
    { name: 'Spaying (female cat)', type: 'Surgical' },
    { name: 'Neutering (male cat)', type: 'Surgical' },
    { name: 'Spaying (female dog)', type: 'Surgical' },
    { name: 'Neutering (male dog)', type: 'Surgical' },
    { name: 'Allergy testing', type: 'Laboratory' },
    { name: 'Infectious disease test', type: 'Laboratory' },
    { name: 'Urine test', type: 'Laboratory' },
    { name: 'Blood test', type: 'Laboratory' },
    { name: 'Faecal test', type: 'Laboratory' },
    { name: 'Rabies serology', type: 'Laboratory' },
    { name: 'MRI/CT', type: 'Laboratory' },
    { name: 'Therapeutic massage', type: 'Holistic' },
    { name: 'Physiotherapy', type: 'Holistic' },
    { name: 'Acupuncture', type: 'Holistic' },
    { name: 'Laser therapy', type: 'Holistic' },
    { name: 'Faecal test', type: 'Holistic' }
];

const BookingServiceDisplay: React.FC<BookingServiceDisplayProps> = ({ handleClose, handleServiceSelection }) => {
    const [searchTerm, setSearchTerm] = React.useState('');

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const renderServiceButtons = (type: string) => {
        return ServiceData
            .filter(service => service.type === type && service.name.toLowerCase().includes(searchTerm.toLowerCase()))
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
        <div className='booking-service-display'>
            <div className="booking-service-top">
                <h2>Choose a service</h2>
                <button onClick={handleClose}>X</button>
            </div>
            <input
                type='text'
                placeholder='Search services.......'
                value={searchTerm}
                onChange={handleSearchChange}
            />
            <div className='booking-service-container'>
                <h3>Clinical</h3>
                <div className="booking-service-group">
                    {renderServiceButtons('Clinical')}
                </div>
                <h3>Surgical</h3>
                <div className="booking-service-group">
                    {renderServiceButtons('Surgical')}
                </div>
                <h3>Laboratory</h3>
                <div className="booking-service-group">
                    {renderServiceButtons('Laboratory')}
                </div>
                <h3>Holistic</h3>
                <div className="booking-service-group">
                    {renderServiceButtons('Holistic')}
                </div>
            </div>
        </div>
    );
}

export default BookingServiceDisplay;
