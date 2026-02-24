"use client";
import { Button } from "@/components/ui/button";
import { BookOpen, ChevronLeft, Sparkles } from "lucide-react";
import { SeeContent } from "./SeeContent";
import { TakeQuiz } from "./TakeQuiz";

import { useRouter } from "next/navigation";

export type SummarizedContentProps = {
  title: string;
  summary: string;
};

export const SummarizedContent = ({
  title,
  summary,
}: SummarizedContentProps) => {
  const router = useRouter();
  return (
    <div className="flex flex-col h-fit gap-6 mt-12 aspect-[856/356] w-[856px]">
      <Button
        variant={"outline"}
        className="w-12 h-10"
        onClick={() => router.push("/")}
      >
        <ChevronLeft className="text-black w-4 h-4" />
      </Button>
      <div className="border rounded-sm p-7 flex flex-col gap-5">
        <h1 className="flex gap-1 text-2xl font-semibold items-center">
          <Sparkles className="text-blue-500 " /> Article Quiz Generator
        </h1>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 items-center">
            <BookOpen className="w-4 h-4 " />
            <p className="text-[#737373] text-sm font-semibold">
              Summarized content
            </p>
          </div>
          <h1 className="text-2xl font-semibold">{title}</h1>
          <p className="text-sm font-normal wrap-break-word">{summary}</p>
        </div>
        <div className="flex justify-between">
          <SeeContent />
          {/* <TakeQuiz /> */}
          <Button variant={"default"}>Take a quiz</Button>
        </div>
      </div>
    </div>
  );
};
