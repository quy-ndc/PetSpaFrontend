import React, { useState, useEffect } from 'react';
import './graph-wtih-filter.css';

interface ChartOption {
    id: number;
    label: string;
}

interface GraphWithFilterProp {
    graphByWeek: JSX.Element;
    graphByMonth: JSX.Element;
    graphByYear: JSX.Element;
    graphByAllTime: JSX.Element;
    description: string;
}

const GraphWithFilter: React.FC<GraphWithFilterProp> = ({ graphByWeek, graphByMonth, graphByYear, graphByAllTime, description }) => {

    const [selectedChart, setSelectedChart] = useState<JSX.Element | null>(graphByWeek);
    const [selectedOption, setSelectedOption] = useState<number>(1);
    const [dateRange, setDateRange] = useState<string>('');

    const chartOptions: ChartOption[] = [
        { id: 1, label: 'Past week' },
        { id: 2, label: 'Past month' },
        { id: 3, label: 'Past year' },
        { id: 4, label: 'All time' },
    ];

    const handleChartChange = (chartNumber: number) => {
        setSelectedChart(getSelectedChartComponent(chartNumber));
        setSelectedOption(chartNumber);
    };

    const getSelectedChartComponent = (chartNumber: number): JSX.Element => {
        switch (chartNumber) {
            case 1:
                return graphByWeek;
            case 2:
                return graphByMonth;
            case 3:
                return graphByYear;
            case 4:
                return graphByAllTime;
            default:
                return graphByWeek;
        }
    };

    useEffect(() => {
        if (selectedOption === 4) {
            setDateRange("all time");
        } else {
            const currentDate = new Date();
            let startDate = new Date();

            if (selectedOption === 1) {
                startDate.setDate(currentDate.getDate() - 7);
                const startDateStr = formatDateMonth(startDate);
                const endDateStr = formatDateMonth(currentDate);
                setDateRange(`from ${startDateStr} to ${endDateStr}`);
            } else if (selectedOption === 2) {
                startDate.setDate(currentDate.getDate() - 30);
                const startDateStr = formatDateMonth(startDate);
                const endDateStr = formatDateMonth(currentDate);
                setDateRange(`from ${startDateStr} to ${endDateStr}`);
            } else if (selectedOption === 3) {
                startDate.setFullYear(currentDate.getFullYear() - 1);
                const startDateStr = formatMonthYear(startDate);
                const endDateStr = formatMonthYear(currentDate);
                setDateRange(`from ${startDateStr} to ${endDateStr}`);
            }
        }
    }, [selectedOption]);


    const formatDateMonth = (date: Date) => {
        const day = date.getDate();
        const month = date.toLocaleString('en-US', { month: 'short' });
        return `${day} ${month}`;
    }

    const formatMonthYear = (date: Date) => {
        const month = date.toLocaleString('en-US', { month: 'short' });
        const year = date.getFullYear();
        return ` ${month} ${year}`;
    }

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
                <h2 className='graph-list-header'>
                    {description}
                    <span className='graph-list-filter-date-range'>&nbsp;{dateRange}</span>
                </h2>
            </div>
            {selectedChart}
        </>
    );
};


export default GraphWithFilter;