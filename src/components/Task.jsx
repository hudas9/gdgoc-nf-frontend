import { Button } from "./Button";

export function Task({ title, completed, toggle, deleteTask }) {
  return (
    <div className="flex space-x-2 mb-2 justify-between bg-gray-100 p-2 rounded-md">
      <h1 className={completed ? "line-through italic" : ""}>{title}</h1>
      <div className="space-x-2">
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
