export function ProductCardSkeleton() {
  return (
    <div className="w-72 h-120 bg-brand-white rounded-lg shadow-md flex flex-col overflow-hidden relative">
      <div className="w-72 h-40 bg-gray-300 rounded-t-lg animate-pulse" />
      <div className="p-4 flex flex-col flex-grow">
        <div className="h-4 bg-gray-300 rounded mb-2 animate-pulse" />
        <div className="h-4 w-10 bg-gray-300 rounded mb-2 animate-pulse" />
        <br />
        <div className="flex items-center mb-2 gap-1">
          <span className="text-gray-300 animate-pulse">&#9733;</span>
          <span className="text-gray-300 animate-pulse">&#9733;</span>
          <span className="text-gray-300 animate-pulse">&#9733;</span>
          <span className="text-gray-300 animate-pulse">&#9733;</span>
          <span className="text-gray-300 animate-pulse">&#9733;</span>
        </div>
        <div className="h-4 w-14 bg-gray-300 rounded mb-2 animate-pulse" />
        <div className="h-4 w-14 bg-gray-300 rounded mb-2 animate-pulse" />
      </div>
    </div>
  )
}
