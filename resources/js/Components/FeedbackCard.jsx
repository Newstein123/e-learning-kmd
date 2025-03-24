import React from "react";
import { FaStar } from "react-icons/fa";
const FeedbackCard = ({ avatar, name, position, feedback, rating }) => {
    return (
        <div className="flex flex-col items-center justify-center p-5 bg-secondary rounded-md text-white">
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-primary my-5">
                <img
                    src={avatar}
                    alt={name}
                    className="w-25 h-25 rounded-full"
                />
            </div>
            <div className="flex items-center justify-center">
                {Array.from({ length: rating }).map((_, index) => (
                    <FaStar key={index} className="text-yellow-500" />
                ))}
            </div>
            <p className="text-gray-100">{feedback}</p>
            <h1 className="text-2xl font-bold">{name}</h1>
            <p className="text-gray-100">{position}</p>
        </div>
    );
};

export default FeedbackCard;
