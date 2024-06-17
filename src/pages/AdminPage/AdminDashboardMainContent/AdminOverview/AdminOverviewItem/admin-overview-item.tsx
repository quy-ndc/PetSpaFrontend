import React from "react";
import "./admin-overview-item.css";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import formatNumber from "../../../../../utils/formatPrice";

interface AdminOverviewItemProp {
    label: string;
    icon: React.ElementType;
    currency: string;
    data: number;
    rateUp: number
}

const AdminOverviewItem: React.FC<AdminOverviewItemProp> = ({ label, icon: Icon, currency, data, rateUp }) => {

    return (
        <>
            <div className="admin-overview-item">
                <div className="admin-overview-item-top">
                    <h4>{label}</h4>
                    <Icon />
                </div>
                <div className="admin-overview-item-main">
                    <h2>{currency}{formatNumber(data)}</h2>
                    <h4>+{rateUp}% from last month</h4>
                </div>
            </div>
        </>
    );
};

export default AdminOverviewItem;
