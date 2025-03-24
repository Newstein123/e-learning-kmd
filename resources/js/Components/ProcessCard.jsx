import React from "react";

const ProcessCard = ({ icon, title, description }) => {
    return (
        <div className="p-5 bg-secondary rounded-md text-white">
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-primary my-5">
                {icon}
            </div>
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="">{description}</p>
        </div>
    );
};

export default ProcessCard;
