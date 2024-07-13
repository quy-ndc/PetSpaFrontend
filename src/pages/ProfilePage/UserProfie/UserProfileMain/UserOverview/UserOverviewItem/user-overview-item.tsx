import React from 'react'
import './user-overview-item.css'
import formatNumber from '../../../../../../utils/formatPrice';

interface UserOverviewItemProp {
    label: string;
    icon: React.ElementType;
    data: number;
}

const UserOverviewItem: React.FC<UserOverviewItemProp> = ({ label, icon: Icon, data }) => {

    return (
        <>
            <div className="user-overview-item">
                <div className="user-overview-item-top">
                    <h4>{label}</h4>
                    <Icon />
                </div>
                <div className="user-overview-item-main">
                    <h2>{formatNumber(data)}</h2>
                </div>
            </div>
        </>
    )
}

export default UserOverviewItem