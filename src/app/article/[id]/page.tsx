// import { SummarizedContent } from "@/app/_components/SummarizedContent";

// export const mockArticle = {
//   id: "1",
//   title: "Genghis Khan",
//   summary:
//     "Genghis Khan, born Temüjin around 1162, was the founder of the Mongol Empire. After his father's death, Temüjin's family was left in poverty, and he later killed his half-brother to secure his position. He built alliances with leaders like Jamukha and Toghrul, and despite being defeated in battle and briefly under the Jin dynasty, he rose to power by defeating rivals. By 1206, after overcoming the Naiman tribe and executing Jamukha, Temüjin became the undisputed ruler of the Mongol steppe, eventually leading a series of successful military campaigns that expanded his empire across China and Central Asia.",
//   content:
//     "Genghis Khan (born Temüjin; c. 1162 – August 1227), also known as Chinggis Khan, was the founder and first khan of the Mongol Empire. After spending most of his life uniting the Mongol tribes, he launched a series of military campaigns, conquering large parts of China and Central Asia.",
//   createdAt: "2024-02-20",
// };

// export default function ArticlePage() {
//   return (
//     <div className="flex justify-center">
//       <SummarizedContent
//         title={mockArticle.title}
//         summary={mockArticle.summary}
//         content={mockArticle.content}
//       />
//     </div>
//   );
// }

"use client";

import { SummarizedContent } from "@/app/_components/SummarizedContent";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type Article = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
};

export default function ArticlePage() {
  const params = useParams(); // URL-аас id авах
  const router = useRouter();

  // localStorage-аас article хайх
  const [article, setArticle] = useState<Article | null>(() => {
    if (typeof window !== "undefined") {
      const data = localStorage.getItem("articles");
      if (data) {
        const articles: Article[] = JSON.parse(data);
        // ID-аар хайх
        const found = articles.find((a) => a.id === params.id);
        return found || null;
      }
    }
    return null;
  });
  // Олдохгүй бол нүүр рүү буцах
  useEffect(() => {
    if (article === null) {
      router.push("/");
    }
  }, [article, router]);

  if (!article) {
    return <p>Loading...</p>;
  }
  // Mock summary (дараа AI-аар солино)

  const mockSummary = `This is a summary of "${article.title}"...`;
  return (
    <SummarizedContent
      title={article.title} // ← localStorage-аас
      summary={mockSummary}
      content={article.content} // ← localStorage-аас
    />
  );
}
