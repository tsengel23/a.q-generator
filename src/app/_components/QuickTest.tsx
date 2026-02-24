"use client";

import { Button } from "@/components/ui/button";
import { Sparkles, X } from "lucide-react";

export const QuickTest = () => {
  return (
    <div className="mt-30 flex flex-col gap-6 aspect-[558/288] w-[558px]">
      <div className="flex justify-between items-center ">
        <div>
          <h1 className="flex gap-1 text-2xl font-semibold items-center">
            <Sparkles className="text-blue-500 " /> Quick test
          </h1>
          <p className="text-[#71717A] font-normal text-base">
            Take a quick test about your knowledge from your content
          </p>
        </div>
        <Button variant={"outline"} className="w-10 h-10 rounded-full ">
          <X />
        </Button>
      </div>
      <div className="bg-white border rounded-sm ">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-medium">AI genetaring answer 1</h1>
          <p className="text-medium">
            <span className="text-xl">1</span>/5
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Button variant={"outline"}>answer 1 </Button>
          <Button variant={"outline"}>answer 2</Button>
          <Button variant={"outline"}>answer 3</Button>
          <Button variant={"outline"}>answer 4</Button>
        </div>
      </div>
    </div>
  );
};
