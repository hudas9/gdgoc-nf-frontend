export function Tab({ status, label, count, tabCurrent }) {
  return (
    <button
      className={
        "flex space-x-1 mb-3" + (tabCurrent === status ? " text-blue-400" : "")
      }
    >
      <p>{label}</p>
      <p>{count}</p>
    </button>
  );
}
