import React from "react";
import { usePage } from "@inertiajs/react";
import QuizCard from "./QuizCard";
import { FaLock } from "react-icons/fa";
const LessonCard = ({ lesson }) => {
    const { course } = usePage().props;
    const { auth } = usePage().props;
    return (
        <div>
            {auth.user && course.is_enrolled ? (
                <iframe
                    src={lesson.video_url}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    width="100%"
                    height="300px"
                ></iframe>
            ) : (
                <div className="w-full h-[300px] bg-gray-200 flex justify-center items-center">
                    <FaLock className="text-gray-500 text-2xl" />
                </div>
            )}
            <div
                dangerouslySetInnerHTML={{ __html: lesson.description }}
                className="mt-5"
            ></div>
            {auth.user && course.is_enrolled && lesson.quiz && (
                <QuizCard quiz={lesson.quiz} />
            )}
        </div>
    );
};

export default LessonCard;
