import React from "react";
import { Header } from "./Header";

const FrontendLayout = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default FrontendLayout;

export const Footer = () => {
    return (
        <footer className="bg-secondary-50 py-6">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-start">
                    {/* Logo and Description */}
                    <div className="flex-1">
                        <h2 className="text-lg font-semibold text-default-800">
                            E-Learn Platform
                        </h2>
                        <p className="text-default-500 mt-2">
                            Enhancing learning one course at a time
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="flex-1">
                        <h3 className="text-md font-semibold text-default-800">
                            Quick Links
                        </h3>
                        <ul className="mt-2">
                            <li>
                                <a
                                    href="/about"
                                    className="text-default-500 hover:text-default-700"
                                >
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/courses"
                                    className="text-default-500 hover:text-default-700"
                                >
                                    Courses
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/contact"
                                    className="text-default-500 hover:text-default-700"
                                >
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/support"
                                    className="text-default-500 hover:text-default-700"
                                >
                                    Support
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="flex-1">
                        <h3 className="text-md font-semibold text-default-800">
                            Contact
                        </h3>
                        <p className="text-default-500 mt-2">
                            Phone: (123) 456-7890
                        </p>
                        <p className="text-default-500">
                            Email: support@elearnplatform.com
                        </p>
                    </div>

                    {/* Social Media */}
                    <div className="flex-1">
                        <h3 className="text-md font-semibold text-default-800">
                            Follow Us
                        </h3>
                        <div className="flex mt-2 space-x-4">
                            <a
                                href="#"
                                className="text-default-500 hover:text-default-700"
                            >
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a
                                href="#"
                                className="text-default-500 hover:text-default-700"
                            >
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a
                                href="#"
                                className="text-default-500 hover:text-default-700"
                            >
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a
                                href="#"
                                className="text-default-500 hover:text-default-700"
                            >
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="flex justify-center mt-6">
                    <p className="text-default-500">
                        © 2025 E-Learn Platform. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};
