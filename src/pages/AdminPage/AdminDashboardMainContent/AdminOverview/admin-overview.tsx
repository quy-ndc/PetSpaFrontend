import React from "react";
import "./admin-overview.css";
import AdminOverviewItem from "./AdminOverviewItem/admin-overview-item";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AdminOverviewRecentTransaction from "./AdminOverviewTable/admin-overview-recent-transaction";
import AdminOverviewNewUser from "./AdminOverviewNewUser/admin-overview-new-user";


const AdminOverview: React.FC = () => {

    return (
        <>
            <div className="admin-overview-container">
                <div className="admin-overview-top">
                    <AdminOverviewItem
                        label="Total revenue"
                        icon={AttachMoneyIcon}
                        currency="$"
                        data={183912839}
                        rateUp={21.1}
                    />
                    <AdminOverviewItem
                        label="New users"
                        icon={PersonAddAlt1Icon}
                        currency="+"
                        data={19239}
                        rateUp={30.1}
                    />
                    <AdminOverviewItem
                        label="Sales"
                        icon={CreditCardIcon}
                        currency="+"
                        data={34312}
                        rateUp={142}
                    />
                </div>
                <div className="admin-overview-main">
                    <div className="admin-overview-main-left">
                        <AdminOverviewRecentTransaction />
                    </div>
                    <div className="admin-overview-main-right">
                        <AdminOverviewNewUser />
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminOverview;
