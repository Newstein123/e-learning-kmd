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
    Accordion,
    AccordionItem,
    Textarea,
    useDisclosure,
    Alert,
    Avatar,
} from "@heroui/react";
import {
    FaBook,
    FaClock,
    FaUser,
    FaFacebook,
    FaTwitter,
    FaLinkedin,
    FaInstagram,
    FaCertificate,
    FaLanguage,
    FaSpinner,
    FaCheckCircle,
} from "react-icons/fa";
import CourseDetailBanner from "../../images/CourseDetailBanner.webp";
import { usePage, useForm } from "@inertiajs/react";
import StarRating from "@/Components/StarRating";
import { Toaster, toast } from "react-hot-toast";
import ReviewCard from "./ReviewCard";
import LessonCard from "./LessonCard";
import EnrollmentModal from "./EnrollmentModal";

const Show = ({ course }) => {
    console.log(course);
    const { auth } = usePage().props;
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const { data, setData, post, errors, processing } = useForm({
        course_id: course.id,
        user_id: auth.user?.id,
        rating: 5,
        review: "",
    });
    const getDuration = (duration) => {
        const hours = Math.floor(duration / 3600);
        const minutes = Math.floor((duration % 3600) / 60);
        const seconds = duration % 60;
        return `${hours}h ${minutes}m ${seconds}s`;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("review-ratings.store", course.id), {
            onError: (errors) => {
                console.log(errors);
            },
            onFinish: () => {
                setData("rating", 5);
                setData("review", "");
                toast.success("Review rating created successfully");
            },
            preserveScroll: true,
            preserveState: true,
        });
    };
    return (
        <div className="container mx-auto px-4 py-16">
            <Toaster position="top-right" reverseOrder={false} />
            <EnrollmentModal
                course={course}
                isOpen={isOpen}
                onOpenChange={onOpenChange}
            />
            <DetialBannerSection course={course} />
            <div className="flex flex-col md:flex-row justify-between items-center my-10 gap-10">
                <div className="w-full md:w-2/3">
                    <img
                        src={course.thumbnail}
                        alt={course.title}
                        className="w-full h-96 object-cover rounded-md"
                    />
                    <h1 className="text-4xl font-bold mt-5">{course.title}</h1>
                    <div className="flex justify-between items-center">
                        <div className="w-1/2">
                            {/* instructor profile  */}
                            <div className="flex items-center gap-2">
                                <Avatar
                                    src={course.instructor?.avatar}
                                    alt={course.instructor?.name}
                                    className="w-16 h-16 rounded-full"
                                    name={course.instructor?.name}
                                />
                                <h1 className="text-2xl font-bold">
                                    {course.instructor?.name}
                                </h1>
                            </div>
                        </div>
                        <div className="w-1/2">{/* review and rating  */}</div>
                    </div>
                    <div className="flex w-full flex-col mt-5">
                        <Tabs aria-label="Options">
                            <Tab key="description" title="Description">
                                <Card>
                                    <CardBody>
                                        <div
                                            className="prose"
                                            dangerouslySetInnerHTML={{
                                                __html: course.description,
                                            }}
                                        />
                                    </CardBody>
                                </Card>
                            </Tab>
                            <Tab key="curriculum" title="Curriculum">
                                <Card>
                                    <CardBody>
                                        {course.lessons.length > 0 ? (
                                            <Accordion variant="splitted">
                                                {course.lessons.map(
                                                    (lesson) => (
                                                        <AccordionItem
                                                            startContent={
                                                                <FaBook />
                                                            }
                                                            key={lesson.id}
                                                            aria-label="Accordion 1"
                                                            title={
                                                                <div>
                                                                    <p className="flex justify-between items-center">
                                                                        <span>
                                                                            {
                                                                                lesson.title
                                                                            }
                                                                        </span>
                                                                        <span>
                                                                            {lesson
                                                                                .quiz
                                                                                ?.score ? (
                                                                                <FaCheckCircle className="text-green-500" />
                                                                            ) : (
                                                                                <div className="flex items-center gap-2">
                                                                                    <FaClock className="text-red-500" />
                                                                                    {getDuration(
                                                                                        lesson.duration
                                                                                    )}
                                                                                </div>
                                                                            )}
                                                                        </span>
                                                                    </p>
                                                                </div>
                                                            }
                                                        >
                                                            <LessonCard
                                                                lesson={lesson}
                                                            />
                                                        </AccordionItem>
                                                    )
                                                )}
                                            </Accordion>
                                        ) : (
                                            <p>No Lesson Found</p>
                                        )}
                                    </CardBody>
                                </Card>
                            </Tab>
                            <Tab key="instructor" title="Instructor">
                                <Card>
                                    <CardBody>
                                        <div className="flex justify-center items-center">
                                            <div className="w-1/2 border-2 border-gray-200 rounded-md p-5 bg-secondary-50">
                                                <div className="flex flex-col items-center gap-2 mb-5">
                                                    <Avatar
                                                        src={
                                                            course.instructor
                                                                ?.avatar
                                                        }
                                                        alt={
                                                            course.instructor
                                                                ?.name
                                                        }
                                                        className="w-16 h-16 rounded-full"
                                                    />
                                                    <h1 className="text-2xl font-bold">
                                                        {
                                                            course.instructor
                                                                ?.name
                                                        }
                                                    </h1>
                                                    <p className="text-default-500">
                                                        {
                                                            course.instructor
                                                                ?.position
                                                        }
                                                    </p>
                                                </div>
                                                <div
                                                    className="prose"
                                                    dangerouslySetInnerHTML={{
                                                        __html: course
                                                            .instructor?.about,
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Tab>
                            <Tab key="reviews" title="Reviews">
                                <Card>
                                    <CardBody>
                                        {course.review_ratings.length > 0 ? (
                                            <div>
                                                {course.review_ratings.map(
                                                    (review) => (
                                                        <ReviewCard
                                                            key={review.id}
                                                            review={review}
                                                        />
                                                    )
                                                )}
                                            </div>
                                        ) : (
                                            <p>No reviews found</p>
                                        )}
                                        <Divider />
                                        <div className="flex justify-between items-center mt-5">
                                            <form
                                                onSubmit={handleSubmit}
                                                className="flex flex-col gap-2 w-full"
                                            >
                                                <StarRating
                                                    rating={
                                                        parseInt(data.rating) ||
                                                        0
                                                    }
                                                    onRatingChange={(value) =>
                                                        setData("rating", value)
                                                    }
                                                />
                                                <span className="text-red-500">
                                                    {errors.rating &&
                                                        errors.rating[0]}
                                                </span>
                                                <Textarea
                                                    label="Review"
                                                    value={data.review}
                                                    required
                                                    errorMessage={errors.review}
                                                    onChange={(e) =>
                                                        setData(
                                                            "review",
                                                            e.target.value
                                                        )
                                                    }
                                                    placeholder="Review"
                                                />
                                                <Button
                                                    color="secondary"
                                                    type="submit"
                                                    disabled={!auth.user}
                                                >
                                                    {processing ? (
                                                        <FaSpinner className="animate-spin" />
                                                    ) : (
                                                        "Submit"
                                                    )}
                                                </Button>
                                            </form>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Tab>
                        </Tabs>
                    </div>
                    {course.has_certificate && auth.user && (
                        <div className="mt-5">
                            <div className="flex justify-between items-center">
                                <Button
                                    as={Link}
                                    href={route("certificate", {
                                        courseId: course.id,
                                        userId: auth.user.id,
                                    })}
                                    isDisabled={!course.has_finished}
                                    color="secondary"
                                    variant="light"
                                    target="_blank"
                                >
                                    View Certificate
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
                <div className="w-full md:w-1/3">
                    <CorseDetailCard course={course} onOpen={onOpen} />
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

const getDuration = (duration) => {
    const hours = Math.floor(duration / 3600);
    const minutes = Math.floor((duration % 3600) / 60);
    const seconds = duration % 60;
    return `${hours}h ${minutes}m ${seconds}s`;
};

const CorseDetailCard = ({ course, onOpen }) => {
    const { auth } = usePage().props;
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
                    <p className="text-default-500">
                        {getDuration(course.duration)}
                    </p>
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
            <Divider />
            {/* level  */}
            <div className="flex justify-between items-center my-5">
                <div className="w-1/2">
                    <div className="flex items-center gap-2">
                        <FaBook />
                        <p className="text-default-500"> Level</p>
                    </div>
                </div>
                <div className="w-1/2">
                    <p className="text-default-500">{course.level}</p>
                </div>
            </div>
            <Divider />
            {/* language  */}
            <div className="flex justify-between items-center my-5">
                <div className="w-1/2">
                    <div className="flex items-center gap-2">
                        <FaLanguage />
                        <p className="text-default-500"> Language</p>
                    </div>
                </div>
                <div className="w-1/2">
                    <p className="text-default-500">{course.language}</p>
                </div>
            </div>
            <Divider />
            {/* has certificate  */}
            <div className="flex justify-between items-center my-5">
                <div className="w-1/2">
                    <div className="flex items-center gap-2">
                        <FaCertificate />
                        <p className="text-default-500"> Certificate</p>
                    </div>
                </div>
                <div className="w-1/2">
                    <p className="text-default-500">
                        {course.has_certificate ? "Yes" : "No"}
                    </p>
                </div>
            </div>
            <Divider className="my-5" />
            {auth.user && course.payment_status === "pending" && (
                <Alert color="warning">
                    Please wait for the payment to be approved
                </Alert>
            )}
            {auth.user && !course.is_enrolled && (
                <Button
                    isDisabled={course.payment_status === "pending"}
                    color="secondary"
                    className="w-full mt-5"
                    onPress={onOpen}
                >
                    Enroll Now
                </Button>
            )}
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
