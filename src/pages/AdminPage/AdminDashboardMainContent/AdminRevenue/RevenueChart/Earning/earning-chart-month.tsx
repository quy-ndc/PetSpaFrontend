import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import getLast30DaysInIntervals from '../../../../../../utils/getLast30days';

const dates = getLast30DaysInIntervals();

const generateData = () => {
    return dates.map((day, index) => ({
        name: day,
        uv: Math.floor(Math.random() * 4000) + 1000
    }));
};

const data = generateData();

export function EarningMonth() {

    return (
        <LineChart
            width={1200}
            height={500}
            data={data}
            margin={{
                top: 20,
                right: 10,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="uv" stroke="green" activeDot={{ r: 5 }} />
        </LineChart>
    );
}
