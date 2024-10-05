import { Toaster } from "sonner";
import { ClerkProvider } from "@clerk/nextjs";


import { ModalProvider } from "@/components/providers/modal-provider";
import { QueryProvider } from "@/components/providers/query-provider";

const PlatformLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="h-full"
      style={{
        backgroundImage: `url('bg2.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <ClerkProvider
        appearance={{
          variables: {
            colorBackground: "white",
            colorPrimary: "#4B0082",
            colorText: "#9932CC",
            colorTextOnPrimaryBackground: "#E6E6FA",
            colorTextSecondary: "#4B0082",
            colorInputText: "#4B0082",
            colorInputBackground: "#E6E6FA",
            fontFamily: "serif",
          },
        }}
      >
        <QueryProvider>
          <Toaster />
          <ModalProvider />
          {children}
        </QueryProvider>
      </ClerkProvider>
    </div>
  );
};

export default PlatformLayout;
