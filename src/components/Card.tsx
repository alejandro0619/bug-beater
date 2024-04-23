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
  key
}: {
  selectedItem: ICard | null;
  updateSelectedItem: (item: ICard) => void;
} & ICard) {

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div className="flex justify-center items-center">
      <div
        className={`shadow-lg max-w-sm rounded p-4 ${
          isHovered ? "bg-gray-400" : "bg-Card"
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => updateSelectedItem({ title, date, user, description, key})}
      >
        <h1 className="text-lg font-bold">Title: {title}</h1>
        <p className="text-sm">Date: {date.toString()}</p>
        <p className="text-sm">User: {user}</p>
        <p className="text-sm">Description: {description}</p>
      </div>
    </div>
  );
}
