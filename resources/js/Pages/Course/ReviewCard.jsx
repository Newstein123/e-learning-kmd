import React from "react";
import { FaStar } from "react-icons/fa";

const ReviewCard = ({ review }) => {
    return (
        <div className="flex items-center mt-5 border-b pb-5">
            <div className="flex items-center gap-2 w-1/2">
                <img
                    src={review.user.avatar}
                    alt={review.user.name}
                    className="w-10 h-10 rounded-full"
                />
                <p>{review.user.name}</p>
            </div>
            <div className="w-1/2">
                <div className="flex items-center gap-2">
                    {Array.from({ length: review.rating }).map((_, index) => (
                        <FaStar
                            key={index}
                            className="text-yellow-500 d-inline"
                        />
                    ))}
                </div>
                <p>{review.review}</p>
            </div>
        </div>
    );
};

export default ReviewCard;
