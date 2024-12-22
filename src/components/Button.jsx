export function Button({ children, onClick }) {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-600 px-2 py-0.5 rounded-md text-white font-bold"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
