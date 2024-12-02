import React from 'react';

export const ClassSchedule: React.FC = () => {
  const classes = [
    { time: "08:30 AM", course: "CSC 283 - C++", status: "Missed" },
    { time: "09:55 AM", course: "CSC 433 - DBMS", status: "On Time" },
    { time: "11:20 AM", course: "MAT 247 - Numerical", status: "Ongoing" },
  ];

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Class Schedule</h2>
      <div className="space-y-4">
        {classes.map((item, index) => (
          <div
            key={index}
            className={`p-4 rounded flex justify-between text-sm ${
              item.status === "Missed"
                ? "bg-red-500"
                : item.status === "On Time"
                ? "bg-green-500"
                : "bg-yellow-500"
            }`}
          >
            <div>{item.time}</div>
            <div>{item.course}</div>
            <div className="capitalize">{item.status}</div>
          </div>
        ))}
      </div>
      <div className="flex space-x-4 mt-6">
        <button className=" px-4 py-2 rounded">
          Modify
        </button>
        <button className=" px-4 py-2 rounded">
          Add
        </button>
        <button className=" px-4 py-2 rounded">
          Delete
        </button>
      </div>
    </div>
  );
};
