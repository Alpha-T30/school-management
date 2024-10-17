import UserCard from "@/components/UserCard";

const AdminPage = () => {
  return (
    <div className="p-4 flex flex-col md:flex-row gap-4 ">
      {/* Left */}
      <div className=" w-full lg:w-2/3">
        <div className="flex flex-wrap gap-2 items-center justify-between p-2">
          <UserCard userType="student"></UserCard>
          <UserCard userType="teacher"></UserCard>
          <UserCard userType="parents"></UserCard>
          <UserCard userType="modarators"></UserCard>
        </div>
        <div className="flex">
          <div className="w-1/3">1st rounded graph </div>
          <div className="w-2/3">2nd column graph</div>
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
