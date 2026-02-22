import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
export const Header = () => {
  return (
    <div className="flex justify-between px-6 py-2 bg-white w-full h-[56px] border">
      <h1 className="text-black font-semibold text-2xl">Quiz app</h1>
      <Avatar className="w-10 h-10">
        <AvatarImage src="https://github.com/shadcn.png" className="" />
        <AvatarFallback>MT</AvatarFallback>
      </Avatar>
    </div>
  );
};
