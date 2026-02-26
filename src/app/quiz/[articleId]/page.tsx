"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Sparkles,
  X,
  RotateCcw,
  Bookmark,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import { mockQuizzes } from "@/lib/mock-data";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

// ==============================
// PHASE (Үе шат)
// ==============================
// "quiz" = Асуулт харуулж байна
// "result" = Дүн харуулж байна
type Phase = "quiz" | "result";

export default function QuizPage() {
  // ==============================
  // ROUTER - Хуудас шилжүүлэхэд хэрэглэнэ
  // ==============================
  const router = useRouter();

  // ==============================
  // STATE-ҮҮД (Өгөгдөл хадгалах)
  // ==============================

  // phase: Одоо quiz өгч байна уу, дүн харж байна уу?
  const [phase, setPhase] = useState<Phase>("quiz");

  // currentQuestion: Хэддүгээр асуулт дээр байна? (0 = эхний асуулт)
  const [currentQuestion, setCurrentQuestion] = useState(0);

  // answers: Хэрэглэгчийн бүх хариултууд
  // Жишээ: { 0: "1", 1: "0", 2: "2" } = 1-р асуултад "1", 2-р асуултад "0" ...
  const [answers, setAnswers] = useState<Record<number, string>>({});

  // showCancelDialog: "Are you sure?" dialog харагдаж байна уу?
  const [showCancelDialog, setShowCancelDialog] = useState(false);

  // ==============================
  // ТУСЛАХ ХУВЬСАГЧИД
  // ==============================
  const quizzes = mockQuizzes; // Бүх асуултууд
  const totalQuestions = quizzes.length; // Нийт асуултын тоо (5)

  // ==============================
  // ФУНКЦ: Хариулт сонгох
  // ==============================
  const handleSelectAnswer = (answerIndex: string) => {
    // 1. Хариултыг хадгалах
    setAnswers({ ...answers, [currentQuestion]: answerIndex });

    // 2. Шууд дараагийн асуулт руу (setTimeout БАЙХГҮЙ)
    if (currentQuestion < totalQuestions - 1) {
      // Дараагийн асуулт руу
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Сүүлийн асуулт байсан бол → Дүн харуулах
      setPhase("result");
    }
  };

  // ==============================
  // ФУНКЦ: "Go back" дарах
  // ==============================
  const handleGoBack = () => {
    setShowCancelDialog(false); // Dialog хаах

    if (currentQuestion > 0) {
      // Өмнөх асуулт руу буцах
      setCurrentQuestion(currentQuestion - 1);
    } else {
      // Эхний асуулт дээр байсан бол → Article хуудас руу
      router.back();
    }
  };

  // ==============================
  // ФУНКЦ: "Cancel quiz" дарах
  // ==============================
  const handleCancelQuiz = () => {
    // Home руу шилжих
    router.push("/");
  };

  // ==============================
  // ФУНКЦ: Оноо тооцоолох
  // ==============================
  const calculateScore = () => {
    let correct = 0;
    quizzes.forEach((quiz, index) => {
      if (answers[index] === quiz.answer) {
        correct++;
      }
    });
    return correct;
  };

  // ==============================
  // ФУНКЦ: Дахин эхлүүлэх
  // ==============================
  const handleRestart = () => {
    setPhase("quiz");
    setCurrentQuestion(0);
    setAnswers({});
  };

  // ==============================
  // ФУНКЦ: Хадгалаад гарах
  // ==============================
  const handleSaveAndLeave = () => {
    router.push("/");
  };

  // ==============================
  // UI: QUIZ PHASE (Асуултууд)
  // ==============================
  if (phase === "quiz") {
    return (
      <div className="flex justify-center min-h-screen">
        {/* ----- Header ----- */}
        <div className="mt-30 flex flex-col gap-6 aspect-[558/288] w-[558px]">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="flex items-center gap-1 text-2xl font-semibold">
                <Sparkles className="text-blue-500" />
                Quick test
              </h1>
              <p className="text-[#71717A] font-normal text-base">
                Take a quick test about your knowledge from your content
              </p>
            </div>

            {/* ----- X товч ----- */}
            <Button
              variant={"outline"}
              className="w-10 h-10 rounded-full "
              onClick={() => setShowCancelDialog(true)}
            >
              <X />
            </Button>
          </div>

          {/* ----- Асуулт Card ----- */}
          <div className="bg-white border rounded-sm p-7">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-medium">
                {quizzes[currentQuestion].question}
              </h2>
              <p className="text-medium">
                <span className="text-xl font-medium">
                  {currentQuestion + 1}
                </span>
                /{totalQuestions}
              </p>
            </div>

            {/* ----- Хариултын сонголтууд ----- */}
            <div className="grid grid-cols-2 gap-4">
              {quizzes[currentQuestion].options.map((option, index) => (
                <Button
                  key={index}
                  variant={"outline"}
                  onClick={() => handleSelectAnswer(index.toString())}
                  className=""
                >
                  {option}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* ----- "Are you sure?" Dialog ----- */}
        <Dialog open={showCancelDialog} onOpenChange={setShowCancelDialog}>
          <DialogContent className="[&>button]:hidden border">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">
                Are you sure?
              </DialogTitle>
              <DialogDescription className="text-[#B91C1C]">
                If you press &apos;Cancel&apos;, this quiz will restart from the
                beginning.
              </DialogDescription>
            </DialogHeader>
            <div className="flex justify-between mt-6">
              <Button onClick={handleGoBack}>Go back</Button>
              <Button variant={"outline"} onClick={handleCancelQuiz}>
                Cancel quiz
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    );
  }

  // ==============================
  // UI: RESULT PHASE (Дүн)
  // ==============================
  const score = calculateScore();

  return (
    <div className="flex justify-center min-h-screen">
      <div className="aspect-[428/616] h-[616px] mt-30">
        {/* ----- Header ----- */}
        <div className="">
          <h1 className="flex items-center gap-1 text-2xl font-semibold">
            <Sparkles className="text-blue-500" />
            Quiz completed
          </h1>
          <p className="text-[#71717A] font-normal text-base">
            Let&apos;s see what you did
          </p>
        </div>

        {/* ----- Result Card ----- */}
        <div className="bg-white border rounded-sm p-6 mt-6 ">
          <h2 className="text-2xl font-bold mb-4">
            Your score: {score}
            <span className="text-gray-400 font-normal">/{totalQuestions}</span>
          </h2>

          <div className="space-y-3">
            {quizzes.map((quiz, index) => {
              const userAnswer = answers[index];
              const isCorrect = userAnswer === quiz.answer;

              return (
                <div key={quiz.id} className="flex items-start gap-3">
                  {isCorrect ? (
                    <CheckCircle2
                      className="text-green-500 mt-0.5 shrink-0"
                      size={20}
                    />
                  ) : (
                    <XCircle
                      className="text-red-500 mt-0.5 shrink-0"
                      size={20}
                    />
                  )}
                  <div className="">
                    <p className="text-sm text-gray-600">
                      {index + 1}. {quiz.question}
                    </p>
                    <p className="font-medium">
                      Your answer:{" "}
                      {quiz.options[parseInt(userAnswer)] || "No answer"}
                    </p>
                    {!isCorrect && (
                      <p className="text-green-600 text-sm">
                        Correct: {quiz.options[parseInt(quiz.answer)]}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* ----- Buttons ----- */}
          <div className="flex gap-5 mt-6">
            <Button
              variant="outline"
              className="flex-1"
              onClick={handleRestart}
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Restart quiz
            </Button>
            <Button className="flex-1" onClick={handleSaveAndLeave}>
              <Bookmark className="w-4 h-4 mr-2" />
              Save and leave
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
