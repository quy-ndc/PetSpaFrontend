import React from 'react'
import './user-overview.css'
import UserOverviewItemList from './UserOverviewItem/user-overview-item-list';
import UserOverviewReviewList from './UserOverviewReview/user-overview-review-list';

const UserOverview: React.FC = () => {

    return (
        <>
            <h2 style={{
                color: 'black',
                marginTop: 10,
                marginBottom: 10
            }}
            >
                Overview
            </h2>
            <div className="user-overview-container">
                <UserOverviewItemList />
                <div className="user-overview-body">
                    <div className="user-overview-body-left">
                        <UserOverviewReviewList />
                    </div>
                    <div className="user-overview-body-left">

                    </div>
                </div>
            </div>
        </>
    )
}


export default UserOverview