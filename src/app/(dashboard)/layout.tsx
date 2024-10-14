import Menu from "@/components/Menu";
import NavBar from "@/components/NavBar";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="  w-[16%] md:w-[8%] lg:w-[20%] xl:w-[16%] sm:w-[8%] p-4 h-screen flex flex-col">
        {/* Fixed Link at the top */}
        <div className="flex-shrink-0">
          <Link
            className="flex justify-center lg:justify-start gap-3"
            href={"/"}
          >
            <Image alt="Logo" src={"/logo.png"} width={32} height={32} />
            <span className="hidden lg:block">Dev School</span>
          </Link>
        </div>

        {/* Scrollable Menu */}
        <div className="mt-4 flex-grow overflow-y-auto scrollbar-hide">
          <Menu />
        </div>
      </div>

      {/* Main content area */}
      <div className="w-[84%] md:w-[92%] lg:w-[80%] xl:w-[84%] sm:w-[92%] overflow-y-auto scrollbar-hide bg-[#f7f8fa] ">
        <NavBar />
        {children}
      </div>
    </div>
  );
}
