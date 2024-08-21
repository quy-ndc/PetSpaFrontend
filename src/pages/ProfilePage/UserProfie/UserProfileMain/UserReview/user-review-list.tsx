import React, { useEffect, useState } from 'react'
import '../UserOverview/UserOverviewReview/user-overview-review.css'
import './user-review-list.css'
import UserOverviewReview from '../UserOverview/UserOverviewReview/user-overview-review'
import api from '../../../../../service/apiService'
import { csCZ } from '@mui/x-date-pickers/locales'

const UserReviewList: React.FC = () => {

    const [reviews, setReviews] = useState<any[]>([]);
    const [account, setAccount] = useState<any>()
    const [loading, setLoading] = useState(true);

    const fetchCurrentUser = async () => {
        try {
            const response = await api.get(`user/currentUser/` + sessionStorage.getItem("jwtToken"));
            setAccount(response.data);
        } catch (error) {
            console.error("Error fetching account data:", error);
        }
    };

    useEffect(() => {
        fetchCurrentUser();
    }, []);

    const fetchReview = async () => {
        try {
            const response = await api.get(`/review/findReviewByAuthorId/${account.userId}`);
            setReviews(response.data.listData);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (account) {
            fetchReview();
        }
    }, [account]);

    console.log(account)
    console.log(reviews)

    if (loading) {
        return <h1 style={{ color: 'black' }}>LOADING</h1>
    }

    return (
        <>
            <div className="user-overview-reviews">
                <h2>Your reviews</h2>
                <div className="user-reviews-container">
                    {reviews
                        ?.filter((review) => review.reviewRating !== null && review.status === "ACTIVE")
                        .map((review) => (
                            <UserOverviewReview
                                key={review.reviewId}
                                reviewId={review.reviewId}
                                rating={review.reviewRating}
                                comment={review.description ? review.description : ""}
                            />
                        ))}
                </div>
            </div>
        </>
    )
}


export default UserReviewList