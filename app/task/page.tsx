"use client";
import React, { useState } from "react";
import NewTaskForm from "./NewTaskForm";
import TaskTable from "./TaskTable";

interface Task {
  title: string;
  detail: string;
}

const TaskPage = () => {
  const [taskList, setTaskList] = useState<Task[]>([]);

  const addNewTask = (newTask: Task): void => {
    setTaskList([...taskList, newTask]);
  };

  return (
    <div className="p-5 flex flex-col items-center">
      <h1 className="mb-5">To Do List</h1>
      <NewTaskForm addNewTask={addNewTask} />

      {/* List of tasks */}
      <div className="mt-10 w-full md:max-w-md">
        <TaskTable taskList={taskList} />
      </div>
    </div>
  );
};

export default TaskPage;
