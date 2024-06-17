import React from "react";
import "./admin-overview-recent-transaction.css";
import formatNumber from "../../../../../utils/formatPrice";
import { Link } from "react-router-dom";


const Datas = [
    {
        name: 'John Doe',
        amount: 1023102
    },
    {
        name: 'Kate Perry',
        amount: 5291423
    },
    {
        name: 'Joe Biden',
        amount: 9231942
    },
    {
        name: 'Sean Reiley',
        amount: 3021309412
    },
    {
        name: 'Felix Kjellberg',
        amount: 75182310
    }
]

const AdminOverviewRecentTransaction: React.FC = () => {


    return (
        <>
            <div className="recent-transaction-container">
                <div className="recent-transaction-top">
                    <h2>Recent Transactions</h2>
                </div>
                <div className="recent-transaction-main">
                    <table>
                        <thead>
                            <tr>
                                <th>Customer</th>
                                <th>Amount (vnd)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Datas.map((data) => (
                                <tr>
                                    <td className="transaction-name">
                                        <Link to='#'>{data.name}</Link>
                                    </td>
                                    <td className="transaction-amount">{formatNumber(data.amount)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    );
};

export default AdminOverviewRecentTransaction;
