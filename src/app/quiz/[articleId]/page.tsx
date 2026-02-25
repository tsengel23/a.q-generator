"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sparkles, X } from "lucide-react";
import { mockQuizzes } from "@/lib/mock-data";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type Phase = "quiz" | "result";

export default function QuizPage() {
  const router = useRouter();
  const [phase, setPhase] = useState<Phase>("quiz");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answer, setAnswer] = useState<Record<number, string>>({});
  const [showCancelDialog, setShowCancelDialog] = useState(false);

  const quizzes = mockQuizzes;
 const totalQuestions = quizzes.length;

 const handleSlectAnswer = (answerIndex: string, selectedAnswer: string) => {
  return <div></div>;
}
