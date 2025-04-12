import { RadioGroup, Radio, Alert } from "@heroui/react";
import React from "react";

const QuestionCard = ({ question, index, setScore, score, correctScore }) => {
    const handleChange = (e) => {
        if (e.target.value == question.correct_answer) {
            setScore(score + 1);
        } else {
            if (score > 0) {
                setScore(score - 1);
            }
        }
    };
    return (
        <div>
            <div>
                {index + 1}. {question.question}
            </div>
            <RadioGroup>
                {question.options.map((option, index) => (
                    <div key={option.id} className="mt-2">
                        <Radio
                            value={option.option_text}
                            onChange={handleChange}
                            required
                        />
                        {option.option_text}
                    </div>
                ))}
            </RadioGroup>
            {correctScore && (
                <Alert
                    color={"success"}
                    title={`Correct Answer: ${question.correct_answer}`}
                    className="mt-2"
                />
            )}
        </div>
    );
};

export default QuestionCard;
