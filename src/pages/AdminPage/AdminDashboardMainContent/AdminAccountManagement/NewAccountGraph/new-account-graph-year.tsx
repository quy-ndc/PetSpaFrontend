import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import getLast12Months from '../../../../../utils/getLast12months';

const dates = getLast12Months()

const generateData = () => {
    return dates.map((day, index) => ({
        name: day,
        TotalCustomer: Math.floor(Math.random() * 4000) + 1000 
    }));
};

const data = generateData();

export function NewAccountYear() {

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
            <Line type="monotone" dataKey="TotalCustomer" stroke="purple" activeDot={{ r: 5 }} />
        </LineChart>
    );
}
