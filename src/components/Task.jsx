import { Button } from "./Button";

export function Task({ title, completed, toggle, deleteTask }) {
  return (
    <div className="flex space-x-2 mb-2 justify-between bg-gray-100 p-2 rounded-md">
      <h1 className={completed ? "line-through" : ""}>{title}</h1>
      <div className="space-x-2">
        <Button onClick={toggle}>{completed ? "-" : "✓"}</Button>
        <Button onClick={deleteTask}>X</Button>
      </div>
    </div>
  );
}
