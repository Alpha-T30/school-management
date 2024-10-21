import Announcement from "@/components/Announcement";
import BarGraph from "@/components/BarGraph";
import CompChart from "@/components/CompChart";
import Events from "@/components/Events";
import SimpleLineChart from "@/components/SimpleLineChart";
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
          <div className="w-full lg:w-2/3  h-[450px] rounded-lg bg-white p-5">
            <BarGraph />
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl h-[450px] w-full">
          <SimpleLineChart />
        </div>
      </div>
      {/* right */}
      <div className="flex flex-col gap-10 w-full lg:w-1/3 ">
        <div className="bg-white rounded-xl p-4 w-full">
          <Events></Events>
        </div>

        <div className="bg-white rounded-xl w-full p-4s">
          <Announcement></Announcement>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
