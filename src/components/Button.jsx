export function Button({ children, onClick, color = "blue" }) {
  return (
    <button
      className={`bg-${color}-500 hover:bg-${color}-600 px-4 py-2 rounded-md text-white font-bold transition duration-300 ease-in-out transform hover:scale-105`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
