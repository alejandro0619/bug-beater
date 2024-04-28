"use client";

import { useState } from "react";
import {PullRequest} from "@/lib/data";

export default function Details(selectedtPr : PullRequest ) {

  const [isDeletePressed, setIsDeletePressed] = useState(false);
  const handleDltPressed = () => setIsDeletePressed(true);

  return (
    <>
    {/* Details of the selected Item*/}
      <div className="min-h-[200px] w-full flex-col justify-center space-y-4 overflow-y-auto rounded-xl border-2 bg-inherit  p-4 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
        <div className="flex w-full flex-row space-x-3">
          <h2 className="text-xl font-bold text-white">Title:</h2>
          <p className="text-xl text-white">
            {isDeletePressed ? '': selectedtPr.title}
          </p>
        </div>
        <div className="flex w-full flex-row space-x-3">
          <h2 className="text-xl font-bold text-white">User:</h2>
          <p className="text-xl text-white">
            {isDeletePressed ? '' : selectedtPr.user.login}
          </p>
        </div>
        <div className="flex w-full flex-row space-x-3">
          <h2 className="text-xl font-bold text-white">Created at:</h2>
          <p className="text-xl text-white">
            {isDeletePressed ? '' : selectedtPr.created_at}
          </p>
        </div>
        <div className="flex w-full flex-row space-x-3">
          <h2 className="text-xl font-bold text-white">Updated at at:</h2>
          <p className="text-xl text-white">
            {isDeletePressed ? '' : selectedtPr.updated_at}
          </p>
        </div>
        <div className="flex w-full flex-col space-y-2">
          <h2 className="text-xl font-bold text-white">Description</h2>
          <p className="break-all text-lg text-white">
            {isDeletePressed ? '' : selectedtPr.body}
          </p>
        </div>
      </div>

      {/* Button to delete the selected Item*/}
      <div className="flex flex-col items-center justify-center ">
        <button
          onClick={handleDltPressed}
          className="rounded-lg bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
        >
          Delete selection
        </button>
      </div>
    </>
  );
}
