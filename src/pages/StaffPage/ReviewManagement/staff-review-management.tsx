import React, { useState } from "react";
import Rating from "@mui/material/Rating";

import "./staff-review-management.css";
import { Pagination } from "@mui/material";
import { Link } from "react-router-dom";

interface Review {
  id: number;
  userId: string;
  serviceId: string;
  reviewText: string;
  star: number;
}

const StaffReviewManagement: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([
    {
      id: 1,
      userId: "Meo",
      serviceId: "service1",
      reviewText: "Great service!",
      star: 4,
    },
    {
      id: 2,
      userId: "Mèo",
      serviceId: "service2",
      reviewText: "Good experience.",
      star: 5,
    },
    {
      id: 3,
      userId: "Méo",
      serviceId: "service3",
      reviewText: "Very satisfied with the service.",
      star: 4,
    },
  ]);

  const handleDelete = (id: number) => {
    setReviews(reviews.filter((review) => review.id !== id));
  };

  return (
    <div className="container">
      {/* <header>
        <div className="welcome-message">Welcome Dr.Timothy</div>
      </header> */}
      <main>
        <h1>Reviews</h1>
        <div>
          {reviews.map((review) => (
            <div key={review.id} className="review-card">
              <div className="review-details">
                <span className="review-user">
                  <Link to="#" className="no-underline">{review.userId}</Link>
                </span>
                <span className="review-service">{review.serviceId}</span>
                <span className="review-text">{review.reviewText}</span>
                <Rating name="read-only" value={review.star} readOnly />
              </div>
              <button
                className="delete-button"
                onClick={() => handleDelete(review.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
        <Pagination
          sx={{ display: "flex", justifyContent: "center" }}
          count={10}
          color="primary"
        />
      </main>
    </div>
  );
};

export default StaffReviewManagement;
