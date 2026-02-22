import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { PanelRightClose, PanelRightOpen } from "lucide-react";

export const Sidebar = () => {
  return (
    <div className="w-[72px] h-full">
      <Sheet>
        <SheetTrigger>
          <PanelRightOpen /> <PanelRightClose />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>This action cannot be undone.</SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};
