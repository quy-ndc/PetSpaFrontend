import * as React from 'react';
import './booking-service-display.css';
import api from '../../../../service/apiService';

interface BookingServiceDisplayProps {
    handleClose: () => void;
    handleServiceSelection: (selectedServiceId: number, selectedServiceName: string) => void;
}

const BookingServiceDisplay: React.FC<BookingServiceDisplayProps> = ({ handleClose, handleServiceSelection }) => {

    const [services, setServices] = React.useState<any[]>([]);
    const [loading, setLoading] = React.useState(true);
    const fetchAccountData = async () => {
        try {
            const response = await api.get(`/service/getAll`);
            setServices(response.data);
        } catch (error) {
            console.error("Error fetching account data:", error);
        } finally {
            setLoading(false);
        }
    };

    React.useEffect(() => {
        fetchAccountData();
    }, []);

    const [searchTerm, setSearchTerm] = React.useState('');

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const renderServiceButtons = () => {
        return services
            .filter(service => service.serviceName.toLowerCase().includes(searchTerm.toLowerCase()))
            .map(service => (
                <button
                    key={service.serviceId}
                    onClick={() => handleServiceSelection(service.serviceId, service.serviceName)}
                    style={{ color: 'white' }}
                >
                    {service.serviceName}
                </button>
            ));
    };

    if (loading) {
        return <h1 style={{ color: 'black' }}>LOADING</h1>
    }

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
                <h3>Services</h3>
                <div className="booking-service-group">
                    {renderServiceButtons()}
                </div>
            </div>
        </div>
    );
}

export default BookingServiceDisplay;
