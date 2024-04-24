"use client";
import { useState } from "react";
import { ICard } from "@/lib/data";

export default function Card({
  selectedItem,
  updateSelectedItem,
  title,
  date,
  user,
  description,
}: {
  selectedItem: ICard | null;
  updateSelectedItem: (item: ICard) => void;
} & ICard) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div className="flex items-center justify-center">
      <div
        className={`max-w-sm cursor-pointer rounded p-4 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] ${
          isHovered ? "bg-gray-400" : "bg-Card"
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => updateSelectedItem({ title, date, user, description })}
      >
        <h1 className="text-lg font-bold">Title: {title}</h1>
        <p className="text-sm">
          <strong> Date </strong>: {date.toString()}
        </p>
        <p className="text-sm">
          <strong> User </strong>: {user}
        </p>
        <p className="break-all text-sm">
          {" "}
          <strong> Description</strong>: {description}
        </p>
      </div>
    </div>
  );
}
