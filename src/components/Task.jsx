import { Button } from "./Button";

export function Task({ title, completed, toggle, deleteTask }) {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-2 md:space-y-0 md:space-x-2 mb-5 sm:md-2 bg-gray-100 p-4 rounded-md shadow-md">
      <h1
        className={`flex-1 text-lg ${
          completed ? "line-through italic text-gray-500" : "font-semibold"
        }`}
      >
        {title}
      </h1>
      <div className="flex space-x-2">
        <Button onClick={toggle} color={completed ? "yellow" : "green"}>
          {completed ? "Uncomplete" : "Complete"}
        </Button>
        <Button onClick={deleteTask} color={"red"}>
          Delete
        </Button>
      </div>
    </div>
  );
}
