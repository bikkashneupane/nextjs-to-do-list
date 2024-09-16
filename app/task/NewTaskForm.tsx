"use client";
import React, { useState } from "react";

interface Task {
  title: string;
  detail: string;
}

interface AddFunction {
  addNewTask: (newTask: Task) => void;
}

const initialState: Task = {
  title: "",
  detail: "",
};

const NewTaskForm = ({ addNewTask }: AddFunction) => {
  const [form, setForm] = useState<Task>(initialState);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (form.title === "" && form.detail === "") {
      return alert("All information must be provided");
    }
    addNewTask(form);
    setForm(initialState);
  };

  return (
    <div className="flex justify-center">
      <form className="flex gap-5" onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title..."
          className="rounded px-2 text-black"
          required
          value={form.title}
          onChange={handleOnChange}
        />
        <input
          type="text"
          name="detail"
          placeholder="Detail..."
          className="rounded px-2 text-black"
          required
          value={form.detail}
          onChange={handleOnChange}
        />
        <button
          type="submit"
          className="px-4 py-2 rounded bg-sky-700 font-bold"
        >
          Add To List
        </button>
      </form>
    </div>
  );
};

export default NewTaskForm;
