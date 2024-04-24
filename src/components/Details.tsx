"use client";

import { useState } from "react";

export default function Details({
  title = "No hay título",
  user = "No hay usuario",
  description = "Sin descripcion",
  date = "Wed Apr 24 2024 00:00:00 GMT-0400 (Venezuela Time)",
}) {
  const defaultValues = {
    title: "No hay título",
    user: "No hay usuario",
    description: "Sin descripcion",
    date: "Wed Apr 24 2024 00:00:00 GMT-0400 (Venezuela Time)",
  };
  const [isDeletePressed, setIsDeletePressed] = useState(false);
  const handleDltPressed = () => setIsDeletePressed(true);
  return (
    <>
      <div className="w-full flex-col justify-center overflow-y-auto min-h-[200px] space-y-4 rounded bg-DetailSection p-4 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
        
        <div className="flex w-full flex-row space-x-3">
          <h2 className="text-xl font-bold text-white">Title:</h2>
          <p className="text-xl text-white">
            {isDeletePressed ? defaultValues.title : title}
          </p>
        </div>
        <div className="flex w-full flex-row space-x-3">
          <h2 className="text-xl font-bold text-white">User:</h2>
          <p className="text-xl text-white">
            {isDeletePressed ? defaultValues.user : user}
          </p>
        </div>
        <div className="flex w-full flex-row space-x-3">
          <h2 className="text-xl font-bold text-white">Date:</h2>
          <p className="text-xl text-white">
            {isDeletePressed ? defaultValues.date : date}
          </p>
        </div>
        <div className="flex w-full flex-col space-y-2">
          <h2 className="text-xl font-bold text-white">Description</h2>
          <p className="break-all text-lg text-white">
            {isDeletePressed ? defaultValues.description : description}
          </p>
        </div>
      </div>

      <button
        onClick={handleDltPressed}
        className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
      >
        Delete selection
      </button>
    </>
  );
}
