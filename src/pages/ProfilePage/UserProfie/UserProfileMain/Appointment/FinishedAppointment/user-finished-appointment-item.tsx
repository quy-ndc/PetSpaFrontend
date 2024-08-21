import React, { useEffect, useState } from 'react';
import '../../../../../DoctorPage/DashboardItem/doctor-dashboard-item.css';
import './user-finished-appointment-item.css';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import StarIcon from '@mui/icons-material/Star';
import { Drawer } from '@mui/material';
import api from '../../../../../../service/apiService';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface UserAppointmentItemProp {
    appointmentId: string,
    time: string;
    type: string;
    name: string;
    service: string;
}

type Anchor = 'top' | 'left' | 'bottom' | 'right';

const UserFinishedAppointmentItem: React.FC<UserAppointmentItemProp> = ({
    appointmentId, time, type, name, service
}) => {

    const [review, setReview] = useState<any>();
    const [loading, setLoading] = useState(true);
    const fetchReview = async () => {
        try {
            const response = await api.get(`/review/findReviewByAppointmentId/` + appointmentId);
            setReview(response.data.reviewResponseData2);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (appointmentId) {
            fetchReview();
        }
    }, []);


    const [state, setState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const [rating, setRating] = useState<number>(review ? review.reviewRating : 0);
    const changeRating = (newRating: number, event: React.MouseEvent) => {
        event.stopPropagation();
        setRating(newRating);
    };

    const [comment, setComment] = useState<string>(review ? review.description : "")
    const changeComment = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setComment(event.target.value);
    };

    useEffect(() => {
        if (review) {
            if (review.description) {
                setComment(review.description)
            }
            if (review.reviewRating) {
                setRating(review.reviewRating)
            }
        }
    }, [review])

    const handlePostReview = async () => {
        try {
            const value = {
                description: comment,
                rating: rating,
                status: "ACTIVE"
            }
            const response = await api.put(`/review/update/` + review?.reviewId, value);
            setTimeout(() => {
                window.location.reload;
            }, 1000)
        }
        catch (err) {
            console.log(err)
            toast.error("Review failed");
        }
    }

    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }

                setState({ ...state, [anchor]: open });
            };

    const list = (anchor: Anchor) => (
        <div
            className="service-rate-drawer"
            role="presentation"
            onClick={(event) => event.stopPropagation()}
            onKeyDown={(event) => event.stopPropagation()}
        >
            <h3>How would you rate the service</h3>
            <div className="service-rate-stars">
                {[1, 2, 3, 4, 5].map((starRating) => (
                    <div
                        key={starRating}
                        onClick={(event) => changeRating(starRating, event)}
                        className={`service-rate-star ${rating >= starRating ? 'rated' : ''}`}
                    >
                        <StarIcon />
                    </div>
                ))}
            </div>
            <h3>Leave a comment? (300 words)</h3>
            <div className="service-rate-content">
                <textarea
                    name=""
                    id=""
                    cols={30}
                    rows={10}
                    maxLength={300}
                    value={comment}
                    onChange={changeComment}
                    placeholder='Say something about your experience...'
                    onClick={(event) => event.stopPropagation()}
                    onMouseDown={(event) => event.stopPropagation()}
                />
            </div>
            <button
                className='service-rate-button'
                onClick={handlePostReview}
            >
                Post
            </button>
        </div>
    );

    if (loading) {
        return <h1 style={{ color: 'black' }}>LOADING</h1>
    }

    return (
        <>
            <div className="doctor-dashboard-item">
                <span className='item-time'><AccessTimeFilledIcon />{time}</span>
                <h2 className='item-detail'>
                    {type} with
                    <span> Dr. {name} </span>
                </h2>
                <h3 style={{ color: 'black' }} className='item-service'><HealthAndSafetyIcon />{service}</h3>
                <button
                    className='appointment-rate-button'
                    onClick={toggleDrawer("right", true)}
                >
                    <StarIcon />
                    <span>Rate</span>
                </button>
                <Drawer
                    anchor={"right"}
                    open={state["right"]}
                    onClose={toggleDrawer("right", false)}
                >
                    {list("right")}
                </Drawer>
            </div>
            <ToastContainer />
        </>
    );
};

export default UserFinishedAppointmentItem;
