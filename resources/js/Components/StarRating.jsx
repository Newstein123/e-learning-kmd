import React from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({ rating, onRatingChange, interactive = true }) => {
    const stars = Array.from({ length: 5 }, (_, index) => index + 1);

    return (
        <div className="flex gap-1">
            {stars.map((star) => (
                <FaStar
                    key={star}
                    className={`cursor-pointer text-2xl ${
                        star <= rating ? "text-yellow-500" : "text-gray-300"
                    } ${interactive ? "hover:text-yellow-500" : ""}`}
                    onClick={() => interactive && onRatingChange(star)}
                />
            ))}
        </div>
    );
};

export default StarRating;
