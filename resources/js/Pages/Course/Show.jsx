import FrontendLayout from "@/Layouts/FrontendLayout";
import React from "react";
import {
    Tabs,
    Tab,
    Card,
    CardBody,
    Divider,
    Button,
    Breadcrumbs,
    BreadcrumbItem,
    Link,
} from "@heroui/react";
import {
    FaBook,
    FaClock,
    FaUser,
    FaFacebook,
    FaTwitter,
    FaLinkedin,
    FaInstagram,
} from "react-icons/fa";
import CourseDetailBanner from "../../images/CourseDetailBanner.webp";
const Show = ({ course }) => {
    return (
        <div className="container mx-auto px-4 py-16">
            <DetialBannerSection course={course} />
            <div className="flex flex-col md:flex-row justify-between items-center my-10 gap-10">
                <div className="w-full md:w-2/3">
                    <img src={course.image} alt={course.title} />
                    <h1 className="text-4xl font-bold">{course.title}</h1>
                    <div className="flex justify-between items-center">
                        <div className="w-1/2">
                            {/* instructor profile  */}
                            <div className="flex justify-between items-center">
                                <img
                                    src={course.instructor?.image}
                                    alt={course.instructor?.name}
                                    className="w-10 h-10 rounded-full"
                                />
                                <h1 className="text-2xl font-bold">
                                    {course.instructor?.name}
                                </h1>
                            </div>
                        </div>
                        <div className="w-1/2">{/* review and rating  */}</div>
                    </div>
                    <div className="flex w-full flex-col">
                        <Tabs aria-label="Options">
                            <Tab key="description" title="Description">
                                <Card>
                                    <CardBody>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris
                                        nisi ut aliquip ex ea commodo consequat.
                                    </CardBody>
                                </Card>
                            </Tab>
                            <Tab key="curriculum" title="Curriculum">
                                <Card>
                                    <CardBody>
                                        Ut enim ad minim veniam, quis nostrud
                                        exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis
                                        aute irure dolor in reprehenderit in
                                        voluptate velit esse cillum dolore eu
                                        fugiat nulla pariatur.
                                    </CardBody>
                                </Card>
                            </Tab>
                            <Tab key="instructor" title="Instructor">
                                <Card>
                                    <CardBody>
                                        Excepteur sint occaecat cupidatat non
                                        proident, sunt in culpa qui officia
                                        deserunt mollit anim id est laborum.
                                    </CardBody>
                                </Card>
                            </Tab>
                            <Tab key="reviews" title="Reviews">
                                <Card>
                                    <CardBody>
                                        Excepteur sint occaecat cupidatat non
                                        proident, sunt in culpa qui officia
                                        deserunt mollit anim id est laborum.
                                    </CardBody>
                                </Card>
                            </Tab>
                        </Tabs>
                    </div>
                </div>
                <div className="w-full md:w-1/3">
                    <CorseDetailCard course={course} />
                    <p className="text-2xl font-bold my-5">Share this course</p>
                    <div className="flex items-center gap-2">
                        <Button color="primary">
                            <FaFacebook size={20} />
                        </Button>
                        <Button color="primary">
                            <FaTwitter size={20} />
                        </Button>
                        <Button color="primary">
                            <FaLinkedin size={20} />
                        </Button>
                        <Button color="primary">
                            <FaInstagram size={20} />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Show;
Show.layout = (page) => <FrontendLayout>{page}</FrontendLayout>;

const CorseDetailCard = ({ course }) => {
    return (
        <div className="bg-gray-100 p-5 rounded-md border-2 border-gray-200">
            <h1 className="text-4xl font-bold text-center my-5">
                {course.price} USD
            </h1>
            <Divider />
            {/* instructor */}
            <div className="flex justify-between items-center my-5">
                <div className="w-1/2">
                    <div className="flex items-center gap-2">
                        <FaUser />
                        <p className="text-default-500"> Instructor</p>
                    </div>
                </div>
                <div className="w-1/2">
                    <p className="text-default-500">
                        {course.instructor?.name}
                    </p>
                </div>
            </div>
            <Divider />
            {/* duration  */}
            <div className="flex justify-between items-center my-5">
                <div className="w-1/2">
                    <div className="flex items-center gap-2">
                        <FaClock />
                        <p className="text-default-500"> Duration</p>
                    </div>
                </div>
                <div className="w-1/2">
                    <p className="text-default-500">{course.duration}</p>
                </div>
            </div>
            <Divider />
            {/* lessons  */}
            <div className="flex justify-between items-center my-5">
                <div className="w-1/2">
                    <div className="flex items-center gap-2">
                        <FaBook />
                        <p className="text-default-500"> Lessons</p>
                    </div>
                </div>
                <div className="w-1/2">
                    <p className="text-default-500">
                        {course.lessons?.length} Lessons
                    </p>
                </div>
            </div>
        </div>
    );
};

const DetialBannerSection = ({ course }) => {
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
                                Courses
                            </Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <p className="text-white">Course Details</p>
                        </BreadcrumbItem>
                    </Breadcrumbs>
                    <h1 className="text-4xl font-bold my-5">{course.title}</h1>
                </div>
                <div>
                    <img
                        src={CourseDetailBanner}
                        alt={course.title}
                        className="rounded-full"
                    />
                </div>
            </div>
        </div>
    );
};
