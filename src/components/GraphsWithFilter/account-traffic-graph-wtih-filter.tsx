import React, { useState, useEffect } from 'react';
import './graph-wtih-filter.css';
import './pet-traffic-graph-with-filter.css'

interface ChartOption {
    id: number;
    label: string;
}

interface AccountTrafficGraphWithFilterProp {
    graphByAge: JSX.Element;
    graphByGender: JSX.Element;
    description: string;
}

const AccountTrafficGraphWithFilter: React.FC<AccountTrafficGraphWithFilterProp> = ({ graphByAge, graphByGender, description }) => {

    const [selectedChart, setSelectedChart] = useState<JSX.Element | null>(graphByAge);
    const [selectedOption, setSelectedOption] = useState<number>(1);
    const [dateRange, setDateRange] = useState<string>('');

    const chartOptions: ChartOption[] = [
        { id: 1, label: 'By age' },
        { id: 2, label: 'By gender' },
    ];

    const handleChartChange = (chartNumber: number) => {
        setSelectedChart(getSelectedChartComponent(chartNumber));
        setSelectedOption(chartNumber);
    };

    const getSelectedChartComponent = (chartNumber: number): JSX.Element => {
        switch (chartNumber) {
            case 1:
                return graphByAge;
            case 2:
                return graphByGender;
            default:
                return graphByAge;
        }
    };

    useEffect(() => {
        if (selectedOption === 1) {
            setDateRange("by age")
        } else if (selectedOption === 2) {
            setDateRange('by gender')
        }
    }, [selectedOption]);


    return (
        <>
            <div className="graph-list-container">
                <div className="pet-graph-list-filters">
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
                <h2 className='graph-list-header'>
                    {description}
                    <span className='graph-list-filter-date-range'>&nbsp;{dateRange}</span>
                </h2>
            </div>
            {selectedChart}
        </>
    );
};


export default AccountTrafficGraphWithFilter;