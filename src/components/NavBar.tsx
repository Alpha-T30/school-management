import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between p-4 ">
      <div className=" hidden md:flex text-xs  p-3 items-center justify-center gap-3 ring-[1.5px] ring-gray-400 rounded-full">
        <Image
          className="ml-3 cursor-pointer"
          src={"/search.png"}
          alt=""
          width={16}
          height={16}
        ></Image>
        <input
          placeholder="Search"
          className="outline-none bg-transparent"
        ></input>
      </div>
      <div className="flex gap-6 items-center justify-end w-full">
        <div className="rounded-full flex items-center justify-center cursor-pointer">
          <Image src={"/message.png"} alt="" width={20} height={20}></Image>
        </div>
        <div className="  p-2 relative rounded-full flex items-center justify-center cursor-pointer">
          <Image
            src={"/announcement.png"}
            alt=""
            width={20}
            height={20}
          ></Image>
          <div className="absolute -top-2 -right-2 w-5 h-5 text-sm rounded-full flex items-center justify-center text-white bg-purple-600 ">
            1
          </div>
        </div>
        {/* this div should move to the profile  */}
        <Link
          href={"/profile"}
          className="flex items-center justify-center gap-5 cursor-pointer"
        >
          <div className="flex flex-col">
            <span className=" text-xs leading-3 font-medium">Sir Rolex</span>
            <span className=" text-green-600 text-[10px] text-right">
              Admin
            </span>
          </div>
          <Image
            src={"/avatar.png"}
            className="rounded-full ring-2 ring-amber-600 "
            alt=""
            width={37}
            height={37}
          ></Image>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
