"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { SummarizedContent } from "@/app/_components/SummarizedContent";

export default function NewArticlePage() {
  const router = useRouter();

  const [article, setArticle] = useState<{
    title: string;
    content: string;
  } | null>(() => {
    // Browser дээр ажиллаж байгаа эсэхийг шалгах
    if (typeof window !== "undefined") {
      const data = localStorage.getItem("article");
      if (data) {
        return JSON.parse(data);
      }
    }
    return null;
  });

  // Өгөгдөл байхгүй бол нүүр хуудас руу буцах
  useEffect(() => {
    if (article === null) {
      router.push("/");
    }
  }, [article, router]);

  // Өгөгдөл ачаалж байна
  if (!article) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  // Mock summary (дараа AI-аар солино)

  const mockSummary = `This is a summary of "${article.title}". The article discusses important topics related to ${article.title.toLowerCase()}.This summary was generated based on the content you provided. `;

  return (
    <div className="flex justify-center">
      <SummarizedContent
        title={article.title}
        summary={mockSummary}
        content={article.content}
      />
    </div>
  );
}
