import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell, LabelList } from 'recharts';


const data = [
    { name: 'Medical Bath', value: Math.floor(Math.random() * 4000) + 1000 },
    { name: 'Neutering', value: Math.floor(Math.random() * 4000) + 1000 },
    { name: 'Spraying', value: Math.floor(Math.random() * 4000) + 1000 },
    { name: 'Medical Check up', value: Math.floor(Math.random() * 4000) + 1000 },
    { name: 'Ultrasound', value: Math.floor(Math.random() * 4000) + 1000 },
    // { name: 'Item 6', value: Math.floor(Math.random() * 4000) + 1000 },
    // { name: 'Item 7', value: Math.floor(Math.random() * 4000) + 1000 },
    // { name: 'Item 8', value: Math.floor(Math.random() * 4000) + 1000 },
    // { name: 'Item 9', value: Math.floor(Math.random() * 4000) + 1000 },
    // { name: 'Item 10', value: Math.floor(Math.random() * 4000) + 1000 },
    // { name: 'Item 11', value: Math.floor(Math.random() * 4000) + 1000 },
    // { name: 'Item 12', value: Math.floor(Math.random() * 4000) + 1000 },
    // { name: 'Item 13', value: Math.floor(Math.random() * 4000) + 1000 },
    // { name: 'Item 14', value: Math.floor(Math.random() * 4000) + 1000 },
    // { name: 'Item 15', value: Math.floor(Math.random() * 4000) + 1000 },
    // { name: 'Item 16', value: Math.floor(Math.random() * 4000) + 1000 },
    // { name: 'Item 17', value: Math.floor(Math.random() * 4000) + 1000 },
    // { name: 'Item 18', value: Math.floor(Math.random() * 4000) + 1000 },
    // { name: 'Item 19', value: Math.floor(Math.random() * 4000) + 1000 },
    // { name: 'Item 20', value: Math.floor(Math.random() * 4000) + 1000 },
];

const colors = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#8dd1e1', '#a4de6c', '#d0ed57', '#d084d8', '#84ca9d', '#fc658d'];

export function MostEarningServiceWeek() {
    return (
        <ResponsiveContainer width="100%" height={500}>
            <BarChart
                data={data}
                margin={{
                    top: 10,
                    left: 10,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value">
                    {data.map((entry, index) => (
                        <Cell key={index} fill={colors[index % colors.length]} />
                    ))}
                    <LabelList dataKey="name" position="top" fill="black" />
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    );
}
