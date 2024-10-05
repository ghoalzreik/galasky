import Image from "next/image";
import Link from "next/link";
import { PT_Serif } from "next/font/google";

import { cn } from "@/lib/utils";

const textFont = PT_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const Logo = () => {
  return (
    <Link href="/">
      <div className="hover:opacity-75 transition items-center gap-x-1 hidden md:flex">
        <Image src="/logo.PNG" alt="Logo" height={30} width={45} />
        <p className={cn("text-xl font-bold text-purple-400", textFont.className)}>
          Galasky
        </p>
      </div>
    </Link>
  );
};
