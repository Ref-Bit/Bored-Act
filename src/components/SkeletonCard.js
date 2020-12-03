export default function SkeletonCard() {
  return (
    <div>
      <div className="animate-pulse p-4" style={{ width: '500px' }}>
        <div className="flex border-b-4 border-gray-900 border-indigo-500 rounded-lg h-full bg-gray-100 dark:bg-gray-800 p-8 flex-col shadow hover:shadow-xl transition duration-300">
          <div className="flex items-center mb-3">
            <div className="w-12 h-12 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0"></div>
            <div className="w-32 rounded border bg-gray-600 dark:bg-gray-300 border-gray-400 h-3"></div>
          </div>
          <div className="flex-grow rounded w-full border bg-gray-600 dark:bg-gray-300 border-gray-400 h-3"></div>
        </div>
      </div>
    </div>
  );
}
