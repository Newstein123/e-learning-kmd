import React from "react";
import feedback from "../../data/feedback.json";
import FeedbackCard from "../FeedbackCard";
const FeedBackSection = () => {
    return (
        <div className="container mx-auto px-4 py-16">
            <div className="text-center">
                <h1 className="text-4xl font-bold"> Student Testimonials</h1>
                <p className="text-gray-500"> Feedback from Students </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
                {feedback.map((feedback) => (
                    <FeedbackCard key={feedback.id} {...feedback} />
                ))}
            </div>
        </div>
    );
};

export default FeedBackSection;
