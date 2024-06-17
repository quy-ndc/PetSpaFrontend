import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import getLast7Days from '../../../../../../utils/getLast7days';

const dates = getLast7Days();

const generateData = () => {
    return dates.map((day, index) => ({
        name: day,
        uv: Math.floor(Math.random() * 900000) + 1000
    }));
};

const data = generateData();

export function TotalRevenueWeek() {

    return (
        <LineChart
            width={1100}
            height={500}
            data={data}
            margin={{
                top: 20,
                right: 10,
                left: 20
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="uv" stroke="blue" activeDot={{ r: 5 }} />
        </LineChart>
    );
}
