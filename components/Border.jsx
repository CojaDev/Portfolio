const Border = () => {
  return (
    <div
      className="absolute top-0 left-0 w-screen h-screen pointer-events-none select-none opacity-55 z-40 flex flex-col p-4 lg:pr-6"
      data-scroll
      data-scroll-speed="0.2"
    >
      <div className="flex justify-between">
        <div className="origin-top-left">
          <div className="w-28 h-1.5 bg-white"></div>
          <div className="h-28 w-1.5 bg-white"></div>
        </div>
        <div className="origin-top-right">
          <div className="w-28 h-1.5 bg-white"></div>
          <div className="ml-auto h-28 w-1.5 bg-white"></div>
        </div>
      </div>
      <div className="flex mt-auto justify-between">
        <div className="origin-bottom-left">
          <div className="h-28 w-1.5 bg-white"></div>
          <div className="w-28 h-1.5 bg-white"></div>
        </div>
        <div className="origin-bottom-right">
          <div className="ml-auto h-28 w-1.5 bg-white"></div>
          <div className="w-28 h-1.5 bg-white"></div>
        </div>
      </div>
    </div>
  );
};

export default Border;
