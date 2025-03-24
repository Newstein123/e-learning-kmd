import React, { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { router, usePage } from "@inertiajs/react";
import CourseCard from "../CourseCard";
import { Button, Link } from "@heroui/react";

const CourseSection = () => {
    const { categories, courses } = usePage().props;
    const [selectedCategory, setSelectedCategory] = useState(null);
    const handleCategoryClick = (id) => {
        setSelectedCategory(id);
        router.get(
            route("home"),
            { category_id: id },
            {
                preserveState: true,
                preserveScroll: true,
                only: ["courses"],
            }
        );
    };
    return (
        <div className="container mx-auto px-4 py-16">
            <div className="p-5 bg-secondary rounded-md">
                <Splide
                    aria-label="My Favorite Images"
                    options={{
                        perPage: 5,
                        perMove: 1,
                        pagination: false,
                        drag: "free",
                    }}
                >
                    {categories.map((category) => (
                        <SplideSlide key={category.id}>
                            <div
                                className={`bg-gray-100 p-4 rounded-md mx-2 cursor-pointer ${
                                    selectedCategory === category.id
                                        ? "bg-primary text-white"
                                        : ""
                                }`}
                                onClick={() => handleCategoryClick(category.id)}
                            >
                                <h1 className="text-2xl font-bold text-center">
                                    {category.name}
                                </h1>
                            </div>
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {courses.length > 0 ? (
                    courses.map((course) => (
                        <CourseCard key={course.id} course={course} />
                    ))
                ) : (
                    <div className="col-span-full text-center text-2xl font-bold my-10">
                        No courses found
                    </div>
                )}
            </div>
            <div className="flex justify-center items-center mt-10">
                <Button as={Link} href="#" color="secondary">
                    View All Courses
                </Button>
            </div>
        </div>
    );
};

export default CourseSection;
