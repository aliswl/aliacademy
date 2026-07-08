export default function Skeleton() {
  return (
    <div className="pt-10 animate-pulse pb-10">
      {/* Header */}
      <div className="flex items-center justify-center gap-3 mb-6">
        <div className="w-16 h-16 rounded-lg bg-gray-300" />

        <div>
          <div className="w-36 h-6 bg-gray-300 rounded mb-2" />
          <div className="w-20 h-4 bg-gray-200 rounded" />
        </div>
      </div>

      {/* Subject Cards */}
      <div className="flex justify-center gap-4 flex-wrap">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="w-40 h-12 rounded-xl bg-gray-300" />
        ))}
      </div>
    </div>
  );
}
