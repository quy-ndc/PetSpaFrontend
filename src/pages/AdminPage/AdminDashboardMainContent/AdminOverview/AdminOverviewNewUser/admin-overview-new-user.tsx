import React from "react";
import '../AdminOverviewTable/admin-overview-recent-transaction.css'

const Datas = [
    {
        name: 'John Doe',
        joinedDate: '12-06-2024'
    },
    {
        name: 'Kate Perry',
        joinedDate: '11-05-2024'
    },
    {
        name: 'Joe Biden',
        joinedDate: '02-06-2024'
    },
    {
        name: 'Sean Reiley',
        joinedDate: '01-06-2024'
    },
    {
        name: 'Felix Kjellberg',
        joinedDate: '29-05-2024'
    }
]

const AdminOverviewNewUser: React.FC = () => {


    return (
        <>
            <div className="recent-transaction-container">
                <div className="recent-transaction-top">
                    <h2>New customer</h2>
                </div>
                <div className="recent-transaction-main">
                    <table>
                        <thead>
                            <tr>
                                <th>Full Name</th>
                                <th>Joined Day</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Datas.map((data) => (
                                <tr>
                                    <td className="transaction-name">{data.name}</td>
                                    <td className="transaction-amount">{data.joinedDate}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    );
};

export default AdminOverviewNewUser;
