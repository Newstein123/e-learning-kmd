import React from "react";
import { Button } from "@heroui/react";
import Banner from "../../images/Banner.webp";
import { Image } from "@heroui/react";
const HeroSection = () => {
    return (
        <div className="bg-gradient-to-r from-blue-500 to-purple-500">
            <div className="container mx-auto px-4 py-16">
                <div className="flex justify-between items-center">
                    <div className="text-center text-white">
                        <h1 className="text-6xl font-bold mb-4">
                            Welcome to Our Learning Platform
                        </h1>
                        <p className="text-lg mb-8">
                            Learn new skills and advance your career with our
                            comprehensive courses.
                        </p>
                        <div className="flex justify-center">
                            <Button color="secondary">Get Started</Button>
                        </div>
                    </div>
                    <div className="w-2/3">
                        <Image src={Banner} alt="Banner" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
