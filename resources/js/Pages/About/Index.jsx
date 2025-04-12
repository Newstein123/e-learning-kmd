import React from "react";
import CourseDetailBanner from "../../images/CourseDetailBanner.webp";
import { Breadcrumbs, BreadcrumbItem, Link } from "@heroui/react";
import FrontendLayout from "@/Layouts/FrontendLayout";

const Index = () => {
    return (
        <div className="container mx-auto px-4 py-16">
            <DetialBannerSection />
            <div className="flex justify-start gap-10 mt-10">
                <div className="w-1/2">
                    <h1 className="text-2xl font-bold">
                        Empowering Future Scholars: Your Gateway to
                        Pre-University Excellence
                    </h1>
                </div>
            </div>
            <div className="flex justify-end gap-10 mt-10">
                <div className="w-1/2">
                    <p className="text-sm text-gray-500">
                        At [Your Platform Name], we are dedicated to preparing
                        students for their academic journey beyond high school.
                        Our platform provides comprehensive resources and
                        personalized learning experiences for students in grades
                        10, 11, and 12. With a focus on critical subjects and
                        skills, we offer a range of interactive courses designed
                        to boost confidence and mastery in key areas. Our
                        innovative tools and experienced educators help bridge
                        the gap between high school and higher education,
                        empowering students to excel and confidently pursue
                        their future goals. Join us in creating a strong
                        foundation for success.
                    </p>
                </div>
            </div>
            <div className="flex justify-center items-center mt-10">
                <img
                    src="https://imgs.search.brave.com/HMwrTg0Hy59qs-U7YRw8Iu35-8n9MOV8tm_dcieIPqM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bGVhcm5pbmcuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIx/LzAyL3NodXR0ZXJz/dG9ja182NTQ0MDg0/NjMuanBn"
                    alt=""
                    className="rounded-md"
                />
            </div>
        </div>
    );
};

export default Index;

const DetialBannerSection = () => {
    return (
        <div className="bg-secondary p-5 rounded-md border-2 border-gray-200 text-white">
            <div className="flex justify-between">
                <div>
                    <Breadcrumbs>
                        <BreadcrumbItem>
                            <Link
                                href={route("courses")}
                                className="text-white"
                            >
                                Home
                            </Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <p className="text-white">About</p>
                        </BreadcrumbItem>
                    </Breadcrumbs>
                    <h1 className="text-4xl font-bold my-5">About</h1>
                </div>
                <div>
                    <img
                        src={CourseDetailBanner}
                        alt="About"
                        className="rounded-full"
                    />
                </div>
            </div>
        </div>
    );
};

Index.layout = (page) => <FrontendLayout>{page}</FrontendLayout>;
