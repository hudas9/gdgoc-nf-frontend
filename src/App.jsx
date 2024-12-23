import "./App.css";
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
    { title: "Belajar lagi", completed: false },
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
    const task = input.value.trim();

    if (task === "") {
      return;
    }

    const newTasks = [...tasks, { title: task, completed: false }];
    setTasks(newTasks);
    input.value = "";
    updateTabs(newTasks);
  }

  function toggleTask(index) {
    const filteredTasks = tasks.filter((task) =>
      tabCurrent === "all"
        ? true
        : tabCurrent === "open"
        ? !task.completed
        : task.completed
    );
    const taskIndex = tasks.indexOf(filteredTasks[index]);
    const newTasks = [...tasks];
    newTasks[taskIndex].completed = !newTasks[taskIndex].completed;
    setTasks(newTasks);
    updateTabs(newTasks);
  }

  function deleteTask(index) {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
    updateTabs(newTasks);
  }

  function changeTab(status) {
    setTabCurrent(status);
  }

  return (
    <div className="flex items-center justify-center mt-10 px-4">
      <div className="w-full max-w-lg">
        <h1 className="text-2xl font-bold text-center mb-4">My Task</h1>
        <p className="mb-5 text-center text-gray-500">{date}</p>

        <form className="space-x-2 mb-3 flex" onSubmit={addTask}>
          <input
            type="text"
            className="border rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 w-full"
            placeholder="Add new task..."
            name="task"
            autoComplete="off"
          />
          <Button>Add Task</Button>
        </form>

        <div className="flex space-x-2 justify-center mb-3 flex-wrap">
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
