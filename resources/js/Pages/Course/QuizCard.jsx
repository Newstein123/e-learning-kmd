import { Button } from "@heroui/react";
import React, { useState } from "react";
import QuestionCard from "./QuestionCard";
import { Toaster, toast } from "react-hot-toast";
import { router } from "@inertiajs/react";

const QuizCard = ({ quiz }) => {
    const [score, setScore] = useState(0);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(score);
        router.post(
            route("quiz.submit"),
            {
                quiz_id: quiz.id,
                score: score,
            },
            {
                onSuccess: () => {
                    toast.success("Quiz submitted successfully");
                    setScore(0);
                },
                onError: () => {
                    toast.error("Quiz submission failed");
                },
            }
        );
    };

    return (
        <div>
            <Toaster position="top-right" />
            <div>{quiz.title}</div>
            <div>{quiz.description}</div>
            <div>Score: {quiz.score}</div>
            <form onSubmit={handleSubmit}>
                <div>
                    {quiz.questions.map((question, index) => (
                        <div key={question.id} className="mt-5">
                            <QuestionCard
                                question={question}
                                index={index}
                                setScore={setScore}
                                score={score}
                                correctScore={quiz.score}
                            />
                        </div>
                    ))}
                </div>
                <Button
                    isDisabled={quiz.score}
                    color="secondary"
                    className={`mt-5 ${
                        quiz.score ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    type="submit"
                >
                    Submit
                </Button>
            </form>
        </div>
    );
};

export default QuizCard;
