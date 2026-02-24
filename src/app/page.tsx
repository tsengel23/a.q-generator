import { QuickTest } from "./_components/QuickTest";
import { QuizGenerator } from "./_components/QuizGenerator";
import { SummarizedContent } from "./_components/SummarizedContent";
import { mockArticle } from "./article/[id]/page";

export default function Home() {
  return (
    <main className="flex justify-center bg-gray-50 min-h-screen">
      <QuizGenerator />

      {/* <QuickTest /> */}
    </main>
  );
}
