import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const data = [
    { name: 'Dog', value: 122 },
    { name: 'Cat', value: 6312 },
    { name: 'Bird', value: 1512 },
    { name: 'Other', value: 5835 }
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const total = data.reduce((sum, entry) => sum + entry.value, 0);

export function PetTrafficSpecies() {
    return (
        <PieChart width={600} height={350}>
            <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={80}
                outerRadius={120}
                fill="#8884d8"
                dataKey="value"
                label={({ name, value }) => `${name} (${((value / total) * 100).toFixed(2)}%)`}
            >
                {data.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
            <Tooltip
                contentStyle={{
                    background: '#111',
                    border: '0.5px solid #333',
                    borderRadius: '5px'
                }}
                itemStyle={{ color: '#efefef' }}
            />
            <Legend />
        </PieChart>
    );
}
