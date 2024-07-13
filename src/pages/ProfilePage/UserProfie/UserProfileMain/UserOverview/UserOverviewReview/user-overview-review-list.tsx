import React from 'react'
import './user-overview-review.css'
import UserOverviewReview from './user-overview-review';

const UserOverviewReviewList: React.FC = () => {

    return (
        <>
            <div className="user-overview-reviews">
                <h2>Recent reviews</h2>
                <UserOverviewReview
                    rating={4}
                    comment='One of the best service ever, the doctor was very good'
                    date='12/4/2024'
                />
                <UserOverviewReview
                    rating={1}
                    comment='One of the worst experience in a while, the doctor did not concentrate that much leading to my pet dying'
                    date='19/6/2024'
                />
            </div>
        </>
    )
}


export default UserOverviewReviewList