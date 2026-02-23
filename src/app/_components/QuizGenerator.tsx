import { Input } from "@/components/ui/input";
import { FileText, Sparkles } from "lucide-react";
import { Label } from "@/components/ui/label";

import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export const QuizGenerator = () => {
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
          <Input id="title" placeholder="Enter a title for your article..." />
        </Field>
      </div>
      <div className="flex gap-1 w-full">
        <Field>
          <FieldLabel htmlFor="title" className="flex gap-1 ">
            <FileText className="w-4 h-4 text-orange-500" /> Article Content
          </FieldLabel>
          <Textarea
            id="title"
            placeholder="Paste your article content here..."
            className="h-30 resize-none overflow-hidden"
          />
        </Field>
      </div>
      <Button variant={"outline"} className="bg-gray-500 text-white">
        Generate summary
      </Button>
    </div>
  );
};
