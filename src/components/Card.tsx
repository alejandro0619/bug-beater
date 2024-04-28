"use client";
import { useState } from "react";
import { Cards, PullRequest } from "@/lib/data";

export default function Card(pr: {
  updateSelectedItem: (item: PullRequest) => void;
} & PullRequest) {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div className="flex px-8 py-2 flex-col w-full justify-center  text-white">
      <div
        className={`cursor-pointer space-y-4 rounded-lg border-2 border-white p-8 ${
          isHovered ? "bg-CardHover" : "bg-Card"
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => pr.updateSelectedItem(pr as PullRequest)}
      >
        <h1 className="text-lg ">Title: {pr.title}</h1>
        <p className="text-sm">
          <strong> Date </strong>: {pr.created_at}
        </p>
        <p className="text-sm">
          <strong> User </strong>: {pr.user.login}
        </p>
        <p className="break-all text-sm">
          {" "}
          <strong> Description</strong>: {pr.body}
        </p>
      </div>
    </div>
  );
}
