import CompChart from "@/components/CompChart";
import UserCard from "@/components/UserCard";
import Image from "next/image";

const AdminPage = () => {
  return (
    <div className="p-4 flex flex-col md:flex-row gap-4 ">
      {/* Left */}
      <div className=" w-full lg:w-2/3 flex flex-col gap-8">
        <div className="flex flex-wrap gap-2 items-center justify-between p-2">
          <UserCard userType="student"></UserCard>
          <UserCard userType="teacher"></UserCard>
          <UserCard userType="parents"></UserCard>
          <UserCard userType="modarators"></UserCard>
        </div>
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* 1st rounded graph */}
          <div className="w-full lg:w-1/3  h-[450px]">
            <CompChart></CompChart>
          </div>
          {/* 2nd column graph */}
          <div className="w-full lg:w-2/3  h-[450px]">2nd column graph</div>
        </div>
        <div>another graph </div>
      </div>
      {/* right */}
      <div className="w-full lg:w-1/3">
        <div>calendar </div>
        <div>events </div>
        <div>Announcement</div>
      </div>
    </div>
  );
};

export default AdminPage;
