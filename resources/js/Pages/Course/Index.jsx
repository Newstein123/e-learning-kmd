import CourseCard from "@/Components/CourseCard";
import FrontendLayout from "@/Layouts/FrontendLayout";
import React, { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { router } from "@inertiajs/react";
import { Pagination } from "@heroui/react";
const Index = ({ courses, categories }) => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [currentPage, setCurrentPage] = useState(courses.current_page);
    const handleCategoryClick = (id) => {
        setSelectedCategory(id);
        router.get(
            route("courses"),
            { category_id: id },
            {
                preserveState: true,
                preserveScroll: true,
                only: ["courses"],
            }
        );
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
        router.get(
            route("courses"),
            { category_id: selectedCategory, page },
            {
                preserveState: true,
                preserveScroll: true,
            }
        );
    };

    return (
        <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold text-center my-5">All Courses</h1>
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
            {courses.data.length > 0 ? (
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {courses.data.map((course) => (
                            <CourseCard key={course.id} course={course} />
                        ))}
                    </div>
                    <div className="flex flex-wrap gap-4 items-center justify-center my-10">
                        <Pagination
                            color="secondary"
                            initialPage={currentPage}
                            total={courses.totalPages}
                            onChange={(page) => handlePageChange(page)}
                        />
                    </div>
                </div>
            ) : (
                <div className="col-span-full text-center text-2xl font-bold my-10">
                    No courses found
                </div>
            )}
        </div>
    );
};

export default Index;
Index.layout = (page) => <FrontendLayout>{page}</FrontendLayout>;
