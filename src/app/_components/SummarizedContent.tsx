import { Button } from "@/components/ui/button";
import { BookOpen, ChevronLeft, Sparkles } from "lucide-react";

export const SummarizedContent = () => {
  return (
    <div className="flex flex-col h-fit gap-6 mt-12">
      <Button variant={"outline"} className="w-12 h-10">
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
          <h1 className="text-2xl font-semibold">
            Genghis khan
            {/* {title} */}
          </h1>
          <p className="text-sm font-normal wrap-break-word">
            Genghis Khan, born Temüjin around 1162, was the founder of the
            Mongol Empire. After his fas death, Temüins family was left in
            poverty, and he later killed his half-brother to secure his
            position. He built alliances with leaders like Jamukha and Toghrul,
            and despite being defeated in battle and briefly under the Jin
            dynasty, he rose to power by defeating rivals. By 1206, after
            overcoming the Naiman tribe and executing Jamukha, Temüjin became
            the undisputed ruler of the Mongol steppe, eventually leading a
            series of successful military campaigns that expanded his empire
            across China and Central Asia.{/* {content} */}
          </p>
        </div>
        <div className="flex justify-between">
          <Button variant={"outline"} className="">
            See content
          </Button>
          <Button variant={"default"} className="">
            Take a quiz
          </Button>
        </div>
      </div>
    </div>
  );
};
