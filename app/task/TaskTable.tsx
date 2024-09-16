import React from "react";

interface Task {
  title: string;
  detail: string;
}

interface TaskList {
  taskList: Task[];
}

const TaskTable = ({ taskList }: TaskList) => {
  return (
    <>
      <table className="w-full border text-left">
        <thead>
          <tr className="border-b text-base ">
            <th className="px-4 py-2 border-r">Task</th>
            <th className="px-4 py-2 border-r">Detail</th>
          </tr>
        </thead>
        <tbody>
          {taskList.length > 0 &&
            taskList?.map(({ title, detail }, index) => (
              <tr key={Date.now() + "-" + index + title}>
                <td className="px-4 py-2 border-r">{title}</td>
                <td className="px-4 py-2 border-r">{detail}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default TaskTable;
