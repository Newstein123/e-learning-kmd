import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    Image,
    Badge,
    Chip,
    CardFooter,
    Button,
} from "@heroui/react";
import { router } from "@inertiajs/react";
const CourseCard = ({ course }) => {
    return (
        <div>
            <Card className="py-4">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <Image
                        alt="Card background"
                        className="object-cover rounded-xl"
                        src="https://heroui.com/images/hero-card-complete.jpeg"
                        width={270}
                    />
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                    <div className="flex justify-between">
                        <div className="w-1/2">
                            <div className="flex justify-between">
                                <div className="w-1/2">
                                    <Image alt="Instructor Avatar" width={50} />
                                </div>
                                <div className="w-1/2">
                                    <h4 className="font-bold text-large">
                                        {course.instructor.name}
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/2">
                            <Chip color="secondary">
                                {course.category.name}
                            </Chip>
                        </div>
                    </div>
                    <h4 className="font-bold text-large">{course.title}</h4>
                    {/* duration  */}
                    <div className="flex">
                        <div className="w-1/2">
                            <p className="text-default-500">
                                {course.lessons.length} Lessons
                            </p>
                        </div>
                        <div className="w-1/2">
                            <p className="text-default-500">
                                {course.duration}
                            </p>
                        </div>
                    </div>
                    {/* price  */}
                    <div className="flex">
                        <div className="w-1/2">
                            <p className="text-default-500">{course.price}</p>
                        </div>
                    </div>
                </CardBody>
                <CardFooter>
                    <Button
                        color="secondary"
                        onPress={() =>
                            router.visit(route("course.details", course.id))
                        }
                    >
                        Enroll Now
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
};

export default CourseCard;
