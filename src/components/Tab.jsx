export function Tab({ status, label, count, tabCurrent, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center space-x-1 mb-3 px-4 py-2 rounded-md transition duration-300 ease-in-out transform hover:scale-105 ${
        tabCurrent === status
          ? "bg-blue-500 text-white shadow-md"
          : "bg-gray-200 hover:bg-gray-300"
      }`}
    >
      <p>{label}</p>
      <p>({count})</p>
    </button>
  );
}
