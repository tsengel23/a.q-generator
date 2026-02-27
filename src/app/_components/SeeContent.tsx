"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { X } from "lucide-react";
// import { mockArticle } from "../article/[id]/page";

// const mockData = [
//   {
//     question: "",
//     options: ["tului", "ugudei"],
//     answer: "tului",
//     atricleId: "skhdgfk",
//     article: {},
//   },
//   {
//     question: "",
//     options: ["tului", "ugudei"],
//     answer: "tului",
//     atricleId: "skhdgfk",
//     article: {},
//   },
//   {
//     question: "",
//     options: ["tului", "ugudei"],
//     answer: "tului",
//     atricleId: "skhdgfk",
//     article: {},
//   },
// ];

type SeeContentProps = {
  title: string;
  content: string;
};

export const SeeContent = ({ title, content }: SeeContentProps) => {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant={"outline"}>See content</Button>
        </DialogTrigger>
        <DialogContent className="[&>button]:hidden">
          <div className="flex justify-between items-center">
            <DialogHeader>
              <DialogTitle>{title}</DialogTitle>
            </DialogHeader>
            <DialogClose asChild>
              <Button
                variant="outline"
                className="w-10 h-10 rounded-full border border-red-300"
              >
                <X className="text-red-400" />
              </Button>
            </DialogClose>
          </div>
          <div className="no-scrollbar -mx-4 max-h-[50vh] overflow-y-auto px-5">
            {/* {Array.from({ length: 10 }).map((_, index) => (
              <p key={index} className="mb-4 leading-normal">
                {content}
              </p>
            ))} */}
            {content}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
