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
    <div className="flex px-8 py-2 flex-col w-full justify-center  text-white">
      <div
        className={`cursor-pointer space-y-4 rounded-lg border-2 border-white p-8 ${
          isHovered ? "bg-CardHover" : "bg-Card"
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => updateSelectedItem({ title, date, user, description })}
      >
        <h1 className="text-lg ">Title: {title}</h1>
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
