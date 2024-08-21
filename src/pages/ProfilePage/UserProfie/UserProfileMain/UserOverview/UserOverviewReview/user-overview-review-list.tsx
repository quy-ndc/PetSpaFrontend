import React from 'react'
import './user-overview-review.css'
import UserOverviewReview from './user-overview-review';

const UserOverviewReviewList: React.FC = () => {

    return (
        <>
            <div className="user-overview-reviews">
                <h2>Recent reviews</h2>
                {/* <UserOverviewReview
                    rating={4}
                    comment='One of the best service ever, the doctor was very good'
                />
                <UserOverviewReview
                    rating={1}
                    comment='One of the worst experience in a while, the doctor did not concentrate that much leading to my pet dying'
                /> */}
            </div>
        </>
    )
}


export default UserOverviewReviewList