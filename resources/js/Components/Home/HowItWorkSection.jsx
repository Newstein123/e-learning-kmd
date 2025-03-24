import React from "react";
import { usePage } from "@inertiajs/react";
import { FaBook, FaCertificate, FaSearch } from "react-icons/fa";
import ProcessCard from "../ProcessCard";
const processes = [
    {
        icon: <FaSearch size={30} />,
        title: "Search for a course",
        description:
            "It has survived not only centurie also leap into electronic.",
    },
    {
        icon: <FaBook size={30} />,
        title: "Book A Seat",
        description: "Choose a course to get started",
    },
    {
        icon: <FaCertificate size={30} />,
        title: "Get Certificate",
        description: "Get your certificate after completing the course",
    },
];
const HowItWorkSection = () => {
    const { totalCourses } = usePage().props;
    return (
        <div className="container mx-auto px-4 py-16">
            <div className="text-center">
                <p className="text-xl font-bold">
                    {totalCourses} + courses available
                </p>
                <h1 className="text-4xl font-bold mt-5">How It Works ? </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
                {processes.map((process) => (
                    <ProcessCard key={process.id} {...process} />
                ))}
            </div>
        </div>
    );
};

export default HowItWorkSection;
