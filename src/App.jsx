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

  const tabs = [
    {
      status: "semua",
      label: "Semua",
      count: 0,
    },
    {
      status: "open",
      label: "Belum Selesai",
      count: 0,
    },
    {
      status: "closed",
      label: "Selesai",
      count: 0,
    },
  ];

  const [tabCurrent, setTabCurrent] = useState("semua");
  const [tasks, setTasks] = useState([
    { title: "Belajar React", completed: true },
    { title: "Belajar Tailwind CSS", completed: true },
    { title: "Belajar melupakannya", completed: false },
  ]);

  function addTask(e) {
    e.preventDefault();
    const input = e.currentTarget.elements.namedItem("task");
    const task = input.value;

    const newTasks = [...tasks, { title: task, completed: false }];
    setTasks(newTasks);

    input.value = "";
  }

  function toggleTask(index) {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  }

  function deleteTask(index) {
    // const newTasks = [...tasks];
    // newTasks.splice(index, 1);
    // setTasks(newTasks);

    setTasks(tasks.filter((_, i) => i !== index));
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
