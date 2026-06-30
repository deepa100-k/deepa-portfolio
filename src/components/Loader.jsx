const Loader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950">
      <div className="flex flex-col items-center">

        {/* Logo */}
        <div className="animate-pulse">
          <div className="flex h-28 w-28 items-center justify-center rounded-full border-4 border-violet-500 shadow-[0_0_40px_rgba(139,92,246,0.5)]">
            <span className="text-5xl font-extrabold text-violet-500">
              &lt;D/&gt;
            </span>
          </div>
        </div>

        {/* Name */}
        <h2 className="mt-8 text-3xl font-bold tracking-wide text-white">
          Deepa Portfolio
        </h2>
        {/* Progress Line */}
        <div className="mt-8 h-1 w-64 overflow-hidden rounded-full bg-slate-800">
          <div className="h-full animate-[loading_1.8s_linear_forwards] rounded-full bg-violet-500"></div>
        </div>

      </div>
    </div>
  );
};

export default Loader;