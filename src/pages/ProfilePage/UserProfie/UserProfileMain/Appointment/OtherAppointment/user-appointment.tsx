import React, { useState, useEffect } from 'react';
import '../../../../../../components/GraphsWithFilter/graph-wtih-filter.css';

interface ChartOption {
    id: number;
    label: string;
}

interface UserAppointmentProp {
    futureAppointment: React.ReactNode;
    pastAppointment: React.ReactNode;
    onGoingAppointment: React.ReactNode;
}

const UserAppointment: React.FC<UserAppointmentProp> = ({ futureAppointment, pastAppointment, onGoingAppointment }) => {

    const [selectedChart, setSelectedChart] = useState<React.ReactNode | null>(futureAppointment);
    const [selectedOption, setSelectedOption] = useState<number>(1);

    const chartOptions: ChartOption[] = [
        { id: 1, label: 'Up Coming' },
        { id: 2, label: 'Finished' },
        { id: 3, label: 'On Going' },
    ];

    const handleChartChange = (chartNumber: number) => {
        setSelectedChart(getSelectedChartComponent(chartNumber));
        setSelectedOption(chartNumber);
    };

    const getSelectedChartComponent = (chartNumber: number): React.ReactNode => {
        switch (chartNumber) {
            case 1:
                return futureAppointment;
            case 2:
                return pastAppointment;
            case 3:
                return onGoingAppointment;
            default:
                return futureAppointment;
        }
    };


    return (
        <>
            <div className="graph-list-container">
                <div className="graph-list-filters">
                    {chartOptions.map(option => (
                        <button
                            key={option.id}
                            className={`graph-list-filter-option${selectedOption === option.id ? ' selected-graph-filter' : ''}`}
                            onClick={() => handleChartChange(option.id)}
                        >
                            {option.label}
                        </button>
                    ))}
                </div>
                <h1 style={{ color: 'black', marginRight: 20 }}>Your appointments</h1>
            </div>
            {selectedChart}
        </>
    );
};


export default UserAppointment;