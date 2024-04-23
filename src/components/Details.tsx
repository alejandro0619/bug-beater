"use client";

import { useState } from "react";

export default function Details({
  title = "No hay título",
  user = "No hay usuario",
  description = "Sin descripcion",
  date = new Date(),
}) {
  const defaultValues = {
    title: "No hay título",
    user: "No hay usuario",
    description: "Sin descripcion",
    date: new Date(),
  };
  const [isDeletePressed, setIsDeletePressed] = useState(false);
  const handleDltPressed = () => setIsDeletePressed(true);
  return (
    <>
      <div className="flex p-4 justify-center flex-col space-y-4 w-full rounded bg-DetailSection">
        <div className="flex flex-row space-x-3 w-full">
          <h2 className="text-xl font-bold text-white">Title:</h2>
          <p className="text-xl text-white">
            {isDeletePressed ? defaultValues.title : title}
          </p>
        </div>
        <div className="flex flex-row space-x-3 w-full">
          <h2 className="text-xl font-bold text-white">User:</h2>
          <p className="text-xl text-white">
            {isDeletePressed ? defaultValues.user : user}
          </p>
        </div>
        <div className="flex flex-row space-x-3 w-full">
          <h2 className="text-xl font-bold text-white">Date:</h2>
          <p className="text-xl text-white">
            {isDeletePressed ? defaultValues.date.toString() : date.toString()}
          </p>
        </div>
        <div className="flex flex-col space-y-2 w-full">
          <h2 className="text-xl font-bold text-white">Description</h2>
          <p className="text-lg text-white">
            {isDeletePressed ? defaultValues.description : description}
          </p>
        </div>
      </div>

      <button
        onClick={handleDltPressed}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        Delete selection
      </button>
    </>
  );
}
