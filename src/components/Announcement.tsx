const Announcement = () => {
  return (
    <div className="flex flex-col gap-7 w-full h-full p-3">
      <div className="flex items-center justify-between">
        <h1 className="font-bold">Announcement</h1>
        <span className="text-sm text-gray-400 cursor-pointer">View All</span>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-3 bg-rolexSkyLight p-3 rounded-lg">
          <div className="flex  items-center justify-between">
            <h4 className="font-semibold">Lorem ipsum dolor</h4>
            <span className="p-1 bg-white text-sm text-gray-400">
              2025-02-10
            </span>
          </div>
          <p className="text-sm text-gray-400">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum,
            officia.
          </p>
        </div>
        <div className="flex flex-col gap-3 bg-rolexYellowLight p-3 rounded-lg">
          <div className="flex  items-center justify-between">
            <h4 className="font-semibold">Lorem ipsum dolor</h4>
            <span className="p-1 bg-white text-sm text-gray-400">
              2025-02-10
            </span>
          </div>
          <p className="text-sm text-gray-400">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum,
            officia.
          </p>
        </div>
        <div className="flex flex-col gap-3 bg-rolexSkyLight p-3 rounded-lg">
          <div className="flex  items-center justify-between">
            <h4 className="font-semibold">Lorem ipsum dolor</h4>
            <span className="p-1 bg-white text-sm text-gray-400">
              2025-02-10
            </span>
          </div>
          <p className="text-sm text-gray-400">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum,
            officia.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
