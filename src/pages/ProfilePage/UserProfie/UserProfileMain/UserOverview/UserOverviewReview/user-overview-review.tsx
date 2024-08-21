import React, { useState } from 'react';
import './user-overview-review.css';
import "../../PetSettings/PetItem/user-pet-item.css";
import StarIcon from '@mui/icons-material/Star';
import { Drawer } from '@mui/material';
import api from '../../../../../../service/apiService';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

interface UserOverviewReviewProp {
    reviewId: string;
    rating: number;
    comment: string;
}

const UserOverviewReview: React.FC<UserOverviewReviewProp> = ({ reviewId, rating, comment }) => {
    const [state, setState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const [serviceRating, setServiceRating] = useState<number>(rating);
    const [serviceComment, setServiceComment] = useState<string>(comment);

    const changeRating = (newRating: number, event: React.MouseEvent) => {
        event.stopPropagation();
        setServiceRating(newRating);
    };

    const handleCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        event.stopPropagation();
        setServiceComment(event.target.value);
    };

    const toggleDrawer = (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const handlePostReview = async () => {
        try {
            const value = {
                description: serviceComment,
                rating: serviceRating,
                status: "ACTIVE"
            };
            const response = await api.put(`/review/update/` + reviewId, value);
            toast.success("Update review successful");
            setTimeout(() => {
                window.location.reload;
            }, 1000)
        }
        catch (err) {
            toast.error("Update review failed");
        }
    };

    const handleDeleteReview = async () => {
        try {
            const value = {
                description: serviceComment,
                rating: serviceRating,
                status: "INACTIVE"
            };
            const response = await api.put(`/review/update/` + reviewId, value);
            toast.success("Delete review successful");
            setTimeout(() => {
                window.location.reload;
            }, 1000)
        }
        catch (err) {
            toast.error("Delete review failed");
        }
    };

    const list = (anchor: Anchor) => (
        <div
            className="user-overview-review-drawer"
            role="presentation"
            onClick={(event) => event.stopPropagation()}
            onKeyDown={(event) => event.stopPropagation()}
        >
            {/* <h3>Appointment detail</h3>
            <div className="review-service-detail">
                <p>Doctor incharge: Dr.Johnny</p>
                <p>Service used: Grooming</p>
                <p>This was for: Jake (Dog)</p>
            </div> */}
            <h3>Do you want to change the rating?</h3>
            <div className="service-rate-stars">
                {[1, 2, 3, 4, 5].map((starRating) => (
                    <div
                        key={starRating}
                        onClick={(event) => changeRating(starRating, event)}
                        className={`service-rate-star ${serviceRating >= starRating ? 'rated' : ''}`}
                    >
                        <StarIcon />
                    </div>
                ))}
            </div>
            <h3>Change your comment? (300 words)</h3>
            <div className="service-rate-content">
                <textarea
                    name=""
                    id=""
                    cols={30}
                    rows={10}
                    maxLength={300}
                    onChange={handleCommentChange}
                    value={serviceComment}
                    placeholder="Say something about your experience..."
                    onClick={(event) => event.stopPropagation()}
                    onMouseDown={(event) => event.stopPropagation()}
                />
            </div>
            <div className="service-rate-button-group">
                <button
                    className="service-update-button"
                    onClick={handlePostReview}
                >
                    Update
                </button>
                <button
                    className="service-delete-button"
                    onClick={handleDeleteReview}
                >
                    Delete
                </button>
            </div>
        </div>
    );

    return (
        <>
            <div className="user-overview-review">
                <div className="user-overview-review-rating">
                    {[1, 2, 3, 4, 5].map((starRating) => (
                        <div
                            key={starRating}
                            className={`review-rate-star ${rating >= starRating ? 'review-rated' : ''}`}
                        >
                            <StarIcon />
                        </div>
                    ))}
                </div>
                <div className="user-overview-review-comment">
                    <p>{comment}</p>
                </div>
                <button
                    className="user-overview-review-button"
                    onClick={toggleDrawer("right", true)}
                >
                    View detail
                </button>
                <Drawer
                    anchor={"right"}
                    open={state["right"]}
                    onClose={toggleDrawer("right", false)}
                >
                    {list("right")}
                </Drawer>
                <ToastContainer />
            </div>
        </>
    );
};

export default UserOverviewReview;
