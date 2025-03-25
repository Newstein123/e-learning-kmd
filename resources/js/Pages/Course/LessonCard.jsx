import React, { useState, useEffect } from "react";
import { usePage } from "@inertiajs/react";
const LessonCard = ({ lesson }) => {
    const [isLocked, setIsLocked] = useState(false);
    const { auth } = usePage().props;
    return (
        <div>
            {auth.user ? (
                <iframe
                    src={lesson.video_url}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    width="100%"
                    height="300px"
                ></iframe>
            ) : (
                "Locked"
            )}
            <p className="mt-5">{lesson.description}</p>
        </div>
    );
};

export default LessonCard;
