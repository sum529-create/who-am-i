import { useState } from "react";
import { questions } from "../data/questions";

const TestForm = ({onSubmit}) => {
  const [answers, setAnswers] = useState(
    Array(questions.length).fill({ type: "", answer: "" }),
  );

  const handleChange = (index, answer) => {
    const newAnswers = [...answers];
    newAnswers[index] = { type: questions[index].type, answer };
    setAnswers(newAnswers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(answers);
  };

  const progress = answers.filter(answer => answer.answer !== "").length;
  const progressPercentage = (progress / questions.length) * 100;

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* 진행률 바 */}
      <div className="mb-6">
        <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-blue-500 transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
        <p className="text-sm text-gray-600 mt-2">
          {progress} / {questions.length} 문항 완료
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 bg-white rounded-none sm:rounded-xl shadow-lg">
        {questions.map((q, index) => (
          <div key={q.id} className="p-3 sm:p-6 border-b last:border-b-0 sm:border-b-0 sm:border border-gray-200 sm:rounded-xl hover:border-gray-300 transition-all">
            <p className="font-medium text-base sm:text-lg mb-3 sm:mb-4 text-gray-800">
              {index + 1}. {q.question}
            </p>
            <div className="space-y-2 sm:space-y-3">
              {q.options.map((option, i) => (
                <label
                  key={i}
                  className={`flex items-center p-3 sm:p-4 rounded-lg cursor-pointer transition-all ${
                    answers[index]?.answer === option 
                      ? "bg-blue-50 border-blue-200" 
                      : "bg-gray-50 hover:bg-gray-100"
                  } border`}
                >
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={option}
                    checked={answers[index]?.answer === option}
                    onChange={() => handleChange(index, option)}
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <span className="ml-3 text-sm sm:text-base">{option}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
        <div className="p-3 sm:p-6">
          <button
            type="submit"
            disabled={progress !== questions.length}
            className={`w-full py-3 sm:py-4 px-4 sm:px-6 rounded-lg font-semibold transition-all ${
              progress === questions.length
                ? "bg-[var(--button-primary)] text-white hover:bg-[var(--button-hover)]"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            {progress === questions.length ? "제출하기" : `${questions.length - progress}문항 남음`}
          </button>
        </div>
      </form>
    </div>
  );
};

export default TestForm;