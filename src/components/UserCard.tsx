import Image from "next/image";

const UserCard = ({ userType }: { userType: string }) => {
  return (
    <div className="rounded-xl flex flex-col justify-between flex-1 odd:bg-rolexPurple even:bg-rolexYellow min-w-[150px] p-3 min-h-[100px] bg-purple-400">
      <div className="flex items-center justify-between">
        <span className="rounded-md p-1 bg-slate-100">17/10/2024</span>
        <Image
          className="cursor-pointer"
          src="/more.png"
          alt=""
          width={20}
          height={20}
        />
      </div>
      <span className="text-left text-2xl my-2 font-semibold">12354</span>
      <span className="capitalize text-sm font-medium text-gray-900">
        {userType}
      </span>
    </div>
  );
};

export default UserCard;
