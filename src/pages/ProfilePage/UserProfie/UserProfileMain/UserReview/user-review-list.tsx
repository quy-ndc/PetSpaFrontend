import React from 'react'
import '../UserOverview/UserOverviewReview/user-overview-review.css'
import './user-review-list.css'
import UserOverviewReview from '../UserOverview/UserOverviewReview/user-overview-review'

const UserReviewList: React.FC = () => {

    return (
        <>
            <div className="user-overview-reviews">
                <h2>Your reviews</h2>
                <div className="user-reviews-container">
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
            </div>
        </>
    )
}


export default UserReviewList