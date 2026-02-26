"use client";

import { Input } from "@/components/ui/input";
import { FileText, Sparkles } from "lucide-react";

import { Field, FieldLabel } from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import { useState } from "react";
import { useRouter } from "next/navigation";

export const QuizGenerator = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();

  const handleSubmit = () => {
    // 1. Шалгах
    if (!title || !content) {
      alert("please fill in both fields");
      return;
    }
    // 2. Шинэ article объект үүсгэх
    const newArticle = {
      id: Date.now().toString(), // Давтагдашгүй ID
      title, // Хэрэглэгчийн бичсэн title
      content, // Хэрэглэгчийн бичсэн content
      createdAt: new Date().toISOString(), // Үүсгэсэн огноо
    };
    // 3. Одоогийн articles жагсаалт авах

    const existingArticles = JSON.parse(
      localStorage.getItem("articles") || "[]",
    );

    // 4. Шинэ article-ийг эхэнд нэмэх

    const updatedArticles = [newArticle, ...existingArticles];

    // 5. localStorage-д хадгалах
    localStorage.setItem("articles", JSON.stringify(updatedArticles));
    // 6. Шинэ хуудас руу очих
    router.push(`/article/${newArticle.id}`);
  };

  return (
    <div className="border border-[#E4E4E7] bg-white rounded-sm  h-fit flex flex-col gap-5 p-7 mt-12 items-end">
      <div className="flex flex-col gap-1">
        <h1 className="flex gap-1 text-2xl font-semibold items-center">
          <Sparkles className="text-blue-500 " /> Article Quiz Generator
        </h1>
        <p className="text-[#71717A] font-normal text-base">
          Paste your article below to generate a summarize and quiz question.
          Your articles will saved in the sidebar for future reference.
        </p>
      </div>
      <div className="flex gap-1 w-full">
        <Field>
          <FieldLabel htmlFor="title" className="flex gap-1 ">
            <FileText className="w-4 h-4 text-orange-500" /> Article Title
          </FieldLabel>
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            id="title"
            placeholder="Enter a title for your article..."
          />
        </Field>
      </div>
      <div className="flex gap-1 w-full">
        <Field>
          <FieldLabel htmlFor="title" className="flex gap-1 ">
            <FileText className="w-4 h-4 text-orange-500" /> Article Content
          </FieldLabel>
          <Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            id="content"
            placeholder="Paste your article content here..."
            className="h-30 resize-none overflow-hidden"
          />
        </Field>
      </div>
      <Button
        onClick={handleSubmit}
        variant={"default"}
        className="bg-gray-500 text-white"
      >
        Generate summary
      </Button>
    </div>
  );
};
