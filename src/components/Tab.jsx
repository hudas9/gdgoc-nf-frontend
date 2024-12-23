export function Tab({ status, label, count, tabCurrent, onClick }) {
  return (
    <button
      onClick={onClick}
      className={
        "flex space-x-1 mb-3 px-3 py-1 rounded-md" +
        (tabCurrent === status ? " bg-blue-500 text-white" : " bg-gray-200")
      }
    >
      <p>{label}</p>
      <p>({count})</p>
    </button>
  );
}
