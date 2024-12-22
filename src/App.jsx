// import "./App.css";

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

  const [tabs, setTabs] = useState([
    {
      status: "semua",
      label: "Semua",
      count: 3,
    },
    {
      status: "open",
      label: "Belum Selesai",
      count: 1,
    },
    {
      status: "closed",
      label: "Selesai",
      count: 2,
    },
  ]);

  const [tabCurrent, setTabCurrent] = useState("semua");
  const [tasks, setTasks] = useState([
    { title: "Belajar React", completed: true },
    { title: "Belajar Tailwind CSS", completed: true },
    { title: "Belajar lagi", completed: false },
  ]);

  function addTask(e) {
    e.preventDefault();
    const input = e.currentTarget.elements.namedItem("task");
    const task = input.value;

    const newTasks = [...tasks, { title: task, completed: false }];
    setTasks(newTasks);

    tabs[0].count = newTasks.length;

    input.value = "";
  }

  function toggleTask(index) {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
    tabs[1].count = newTasks.filter((task) => !task.completed).length;
    tabs[2].count = newTasks.filter((task) => task.completed).length;
  }

  function deleteTask(index) {
    // const newTasks = [...tasks];
    // newTasks.splice(index, 1);
    // setTasks(newTasks);

    setTasks(tasks.filter((_, i) => i !== index));
    tabs[0].count = tasks.length - 1;
    tabs[1].count = tasks.filter((task) => !task.completed).length - 1;
    tabs[2].count = tasks.filter((task) => task.completed).length - 1;
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md">
        <h1 className="text-xl font-bold text-center">Tugas Saya</h1>
        <p className="mb-5 text-center">{date}</p>

        <form className="space-x-2 mb-3 flex" onSubmit={addTask}>
          <input
            type="text"
            className="border rounded-md px-2 py-1 focus:outline-none focus:border-blue-500 w-full"
            placeholder="Tambahkan tugas baru"
            name="task"
          />
          <Button>+</Button>
        </form>

        <div className="flex space-x-4 justify-center mb-3">
          {tabs.map((tab, index) => (
            <Tab key={index} {...tab} tabCurrent={tabCurrent} />
          ))}
        </div>

        <div>
          {tasks.map((task, index) => (
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
