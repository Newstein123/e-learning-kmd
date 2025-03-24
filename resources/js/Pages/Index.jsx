import FrontendLayout from "@/Layouts/FrontendLayout";
import React from "react";
import HeroSection from "@/Components/Home/HeroSection";
import CourseSection from "@/Components/Home/CourseSection";
import HowItWorkSection from "@/Components/Home/HowItWorkSection";
import FeedBackSection from "@/Components/Home/FeedBackSection";

const Index = () => {
    return (
        <div>
            <HeroSection />
            <CourseSection />
            <HowItWorkSection />
            <FeedBackSection />
        </div>
    );
};
export default Index;
Index.layout = (page) => <FrontendLayout>{page}</FrontendLayout>;
