import React from 'react'
import './user-overview-item.css'
import UserOverviewItem from './user-overview-item';
import ChecklistIcon from '@mui/icons-material/Checklist';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import PetsIcon from '@mui/icons-material/Pets';

const UserOverviewItemList: React.FC = () => {

    return (
        <>
            <div className="user-overview-items">
                <UserOverviewItem
                    label='Appointments had'
                    icon={ChecklistIcon}
                    data={10}
                />
                <UserOverviewItem
                    label='Serivce reviewed'
                    icon={StarHalfIcon}
                    data={12}
                />
                <UserOverviewItem
                    label='Pets owned'
                    icon={PetsIcon}
                    data={10}
                />
            </div>
        </>
    )
}


export default UserOverviewItemList