import { Button } from "@/components/ui/button";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
export const SignedOutPosition = () => {
  return (
    <SignedOut>
      <SignInButton>
        <Button
          variant={"outline"}
          className="bg-[#6c47ff] text-white rounded-xl font-medium text-sm sm:text-base h-10 sm:h-10 px-4 sm:px-5 cursor-pointer"
        >
          Sign in
        </Button>
      </SignInButton>
      <SignUpButton>
        <Button
          variant={"outline"}
          className="bg-[#6c47ff] text-white rounded-xl font-medium text-sm sm:text-base h-10 sm:h-10 px-4 sm:px-5 cursor-pointer"
        >
          Sign Up
        </Button>
      </SignUpButton>
    </SignedOut>
  );
};
