import { useState } from "react";

import { Button } from "./components/Button";
import { Tab } from "./components/Tab";
import { Task } from "./components/Task";

function App() {
  const date = new Date().toLocaleDateString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const [tasks, setTasks] = useState([
    { title: "Belajar React", completed: true },
    { title: "Belajar Tailwind CSS", completed: true },
    { title: "Belajar melupakannya", completed: false },
  ]);

  const calculateTabCounts = () => {
    const allCount = tasks.length;
    const openCount = tasks.filter((task) => !task.completed).length;
    const closedCount = tasks.filter((task) => task.completed).length;

    return [
      { status: "all", label: "All", count: allCount },
      { status: "open", label: "Uncomplete", count: openCount },
      { status: "closed", label: "Complete", count: closedCount },
    ];
  };

  const [tabs, setTabs] = useState(calculateTabCounts());

  const [tabCurrent, setTabCurrent] = useState("all");

  function updateTabs(newTasks) {
    const allCount = newTasks.length;
    const openCount = newTasks.filter((task) => !task.completed).length;
    const closedCount = newTasks.filter((task) => task.completed).length;

    setTabs([
      { status: "all", label: "All", count: allCount },
      { status: "open", label: "Uncomplete", count: openCount },
      { status: "closed", label: "Complete", count: closedCount },
    ]);
  }

  function addTask(e) {
    e.preventDefault();
    const input = e.currentTarget.elements.namedItem("task");
    const task = input.value;

    if (task === "") {
      return;
    }

    const newTasks = [...tasks, { title: task, completed: false }];
    setTasks(newTasks);
    input.value = "";
    updateTabs(newTasks);
  }

  function toggleTask(index) {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
    updateTabs(newTasks);
  }

  function deleteTask(index) {
    const newTask = tasks.filter((_, i) => i !== index);
    setTasks(newTask);
    updateTabs(newTask);
  }

  function changeTab(status) {
    setTabCurrent(status);
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md">
        <h1 className="text-xl font-bold text-center">My Task</h1>
        <p className="mb-5 text-center">{date}</p>

        <form className="space-x-2 mb-3 flex" onSubmit={addTask}>
          <input
            type="text"
            className="border rounded-md px-2 py-1 focus:outline-none focus:border-blue-500 w-full"
            placeholder="Add new task..."
            name="task"
            autoComplete="off"
          />
          <Button>Add Task</Button>
        </form>

        <div className="flex space-x-4 justify-center mb-3">
          {tabs.map((tab, index) => (
            <Tab
              key={index}
              {...tab}
              tabCurrent={tabCurrent}
              onClick={() => changeTab(tab.status)}
            />
          ))}
        </div>

        <div>
          {tasks
            .filter((task) =>
              tabCurrent === "all"
                ? true
                : tabCurrent === "open"
                ? !task.completed
                : task.completed
            )
            .map((task, index) => (
              <Task
                key={index}
                {...task}
                toggle={() => toggleTask(index)}
                deleteTask={() => deleteTask(index)}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
