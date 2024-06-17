import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import getLast12Months from '../../../../../../utils/getLast12months';

const dates = getLast12Months();

const generateData = () => {
    return dates.map((day, index) => ({
        name: day,
        uv: Math.floor(Math.random() * 192014000) + 1000
    }));
};

const data = generateData();

export function TotalRevenueYear() {

    return (
        <LineChart
            width={1100}
            height={500}
            data={data}
            margin={{
                top: 20,
                right: 10,
                left: 30
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="uv" stroke="purple" activeDot={{ r: 5 }} />
        </LineChart>
    );
}
