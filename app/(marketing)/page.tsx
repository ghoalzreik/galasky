// import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";
import { Lobster } from "next/font/google";
import { PT_Serif } from "next/font/google";
import { Sparkles } from "lucide-react";


import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const headingFont = localFont({
  src: "../../public/fonts/font.woff2",
});

const textFont1= Lobster({
  subsets: ["latin"],
  weight: ["400"],
})

const textFont = PT_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const MarketingPage = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div
        className={cn(
          "flex items-center justify-center flex-col", // when we use cn we pass our default classes,
          textFont.className // then we write the dynamic class.
        )}
      >
        <div className="flex items-center text-white mb-2 text-4xl md:text-5xl font-bold">
          <Sparkles className="h-20 w-20 text-white fill-transparent" />
          <span className="mx-2">Achieve With Galasky</span>
          <Sparkles className="h-20 w-20 mr-2 text-white fill-transparent" />
        </div>
        <h1
          className={cn(
            "text-3xl md:text-4xl text-center text-white mb-4",
            textFont1.className
          )}
        >
          Unlock Your Full Potential
        </h1>
        <h1
          className={cn(
            "text-2xl md:text-3xl text-center text-white mb-4",
            textFont1.className
          )}
        >
          From Idea To Completion
        </h1>
      </div>
      <div
        className={cn(
          "text-sm md:text-xl text-white mt-2 mb-4 max-w-xs md:max-w-xl text-center mx-auto",
          textFont.className
        )}
      >
        "Feeling overwhelmed by tasks? Organize, Prioritize, & Succeed.
        Collaborate effortlessly and turn your ideas into reality. Let Galasky
        handle the heavy lifting so you can focus on what truly matters and
        boost productivity for both you and your teams!"
      </div>
      <Button variant="primaryblue" size="lg" asChild>
        <Link href="/sign-up">Get Galasky For Free</Link>
      </Button>
    </div>
  );
};

export default MarketingPage;

