export function Button({ children, onClick, color = "blue" }) {
  return (
    <button
      className={`bg-${color}-500 hover:bg-${color}-600 px-2 py-0.5 rounded-md text-white font-bold`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
