const Shimmer = () => {
  return (
    <div className="flex items-center flex-wrap gap-4 mt-4">
      {Array(50)
        .fill("")
        .map((e, index) => (
          <div className="w-[200px] h-[220px]  bg-white" key={index}>
            <p className="bg-gray-200 mb-2 w-[200px] h-[160px]"></p>
            <h1 className="mx-auto rounded mb-2 bg-slate-200 h-4 w-[170px]"></h1>
            <h1 className="mx-auto rounded bg-slate-200 h-4 w-[170px]"></h1>
          </div>
        ))}
    </div>
  );
};
export default Shimmer;


