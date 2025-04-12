import React from "react";
import CourseDetailBanner from "../../images/CourseDetailBanner.webp";
import {
    Breadcrumbs,
    BreadcrumbItem,
    Link,
    Divider,
    Button,
} from "@heroui/react";
import FrontendLayout from "@/Layouts/FrontendLayout";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { useForm } from "@inertiajs/react";
import { Input } from "@heroui/react";
import { toast, Toaster } from "react-hot-toast";
const Index = () => {
    const { data, setData, post, errors, processing, reset, clearErrors } =
        useForm({
            name: "",
            email: "",
            message: "",
        });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("contact.store"), {
            preserveScroll: true,
            onSuccess: () => {
                toast.success("Contact form submitted successfully");
                reset();
            },
            onError: () => {
                toast.error("Contact form submission failed");
            },
        });
    };

    return (
        <div className="container mx-auto px-4 py-16">
            <DetialBannerSection />
            <Toaster position="top-right" />
            <div className="w-full h-[500px] bg-white rounded-md border-2 border-gray-200 mt-10">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30539.75115635211!2d96.083288329456!3d16.90214736988459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c195ce696dd4f7%3A0x8e6136e36e0ca442!2sInsein%20Township%2C%20Yangon%2C%20Myanmar%20(Burma)!5e0!3m2!1sen!2smy!4v1744296224515!5m2!1sen!2smy"
                    width="100%"
                    height="100%"
                    style={{ border: "0" }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            {/* contact form  */}
            <div className="w-full  bg-white rounded-md border-2 border-gray-200 mt-10 py-10 px-5">
                <div className="flex gap-2 flex-row">
                    <div className="w-1/2">
                        <div className="bg-secondary p-5 rounded-md">
                            {/* phone  */}
                            <div className="flex gap-5 items-center">
                                <FaPhone size={50} className="text-white" />
                                <div className="flex flex-col gap-2">
                                    <p className="text-white">Phone Number</p>
                                    <p className="text-white">09123456789</p>
                                </div>
                            </div>
                            <Divider className="my-10 bg-white" />
                            {/* email address  */}
                            <div className="flex gap-5 items-center">
                                <FaEnvelope size={50} className="text-white" />
                                <div className="flex flex-col gap-2">
                                    <p className="text-white"> Email Address</p>
                                    <p className="text-white">
                                        info@example.com
                                    </p>
                                </div>
                            </div>
                            <Divider className="my-10 bg-white" />
                            {/* office address  */}
                            <div className="flex gap-5 items-center">
                                <FaMapMarkerAlt
                                    size={50}
                                    className="text-white"
                                />
                                <div className="flex flex-col gap-2">
                                    <p className="text-white">Office Address</p>
                                    <p className="text-white">
                                        No. 123, Main Street, Yangon, Myanmar
                                    </p>
                                </div>
                            </div>
                            <Divider className="my-10 bg-white" />
                        </div>
                    </div>
                    <div className="w-1/2">
                        <h1 className="text-2xl font-bold">
                            Get In Touch With Us
                        </h1>
                        <p className="text-gray-500">
                            We are always here to help you. Please feel free to
                            contact us.
                        </p>
                        <form onSubmit={handleSubmit}>
                            <div className="flex flex-col gap-10">
                                <Input
                                    labelPlacement="outside"
                                    className="mt-5"
                                    label="Name"
                                    placeholder="Enter your name"
                                    value={data.name}
                                    onChange={(e) => {
                                        setData("name", e.target.value);
                                        clearErrors("name");
                                    }}
                                    errorMessage={errors.name}
                                    errorMessagePlacement="below"
                                    isInvalid={errors.name}
                                />
                                <Input
                                    labelPlacement="outside"
                                    className="mt-5"
                                    label="Email"
                                    placeholder="Enter your email"
                                    value={data.email}
                                    onChange={(e) => {
                                        setData("email", e.target.value);
                                        clearErrors("email");
                                    }}
                                    errorMessage={errors.email}
                                    errorMessagePlacement="below"
                                    isInvalid={errors.email}
                                />
                                <Input
                                    labelPlacement="outside"
                                    className="mt-5"
                                    label="Message"
                                    placeholder="Enter your message"
                                    value={data.message}
                                    onChange={(e) => {
                                        setData("message", e.target.value);
                                        clearErrors("message");
                                    }}
                                    errorMessage={errors.message}
                                    errorMessagePlacement="below"
                                    isInvalid={errors.message}
                                />
                            </div>
                            <Button
                                className="mt-5 bg-secondary text-white"
                                type="submit"
                            >
                                Submit
                            </Button>
                        </form>
                    </div>
                </div>
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
                            <p className="text-white">Contact</p>
                        </BreadcrumbItem>
                    </Breadcrumbs>
                    <h1 className="text-4xl font-bold my-5">Contact</h1>
                </div>
                <div>
                    <img
                        src={CourseDetailBanner}
                        alt="Contact"
                        className="rounded-full"
                    />
                </div>
            </div>
        </div>
    );
};

Index.layout = (page) => <FrontendLayout>{page}</FrontendLayout>;
