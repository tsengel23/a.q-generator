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

export const SeeContent = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline"> See content</Button>
        </DialogTrigger>
        <DialogContent className="[&>button]:hidden">
          <div className="flex justify-between items-center">
            <DialogHeader>
              <DialogTitle>Sticky Footer</DialogTitle>
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
            {Array.from({ length: 10 }).map((_, index) => (
              <p key={index} className="mb-4 leading-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
