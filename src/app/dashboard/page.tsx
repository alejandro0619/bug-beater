"use client";
import Card from "@/components/Card";
import Details from "@/components/Details";
import Profile from "@/components/Profile";

import { ICard } from "@/lib/data";
import { useState } from "react";

export default function Dashboard() {
  const [itemSelected, setItemSelected] = useState<ICard | null>(null);

  const handleSelectedItem = (item: ICard) => {
    setItemSelected(item);
  };

  const test: ICard[] = [
    {
      title: "issue n1",
      date: new Date(),
      description: "New issue",
      user: "pastaa",
      key: "issue1",
    },
    {
      date: new Date(),
      user: "John doe",
      description: "jksnhdjkanhd",
      title: "adadadad",
      key: "issue2",
    },
    {
      date: new Date(),
      user: "tercer usuario",
      description: "jadadaddad",
      title: "adadad third title",
      key: "issue3",
    },
    {
      date: new Date(),
      user: "tercer usuario",
      description: "jksnhdjkanhd",
      title: "lmao what am i doing",
      key: "issue4",
    },
  ];

  return (
    <div className="flex h-screen">
      <div className="flex items-center p-2 flex-col space-y-2 w-2/4 bg-Issues overflow-y-auto">
        {/* <Profile user="alejandro0619" /> */}
        <h1 className="text-2xl font-bold">Issues</h1>
        {test.map((card) => (
          <Card
            selectedItem={null}
            updateSelectedItem={handleSelectedItem}
            {...card}
            key={card.key}
          />
        ))}
      </div>
      <div className="flex flex-col justify-start items-center p-2 w-3/4 overflow-y-auto bg-Details">
        <h1 className="text-2xl font-bold mt-4 mb-28">Details</h1>{" "}
        {/* Adjust margins for spacing */}
        <div className="flex justify-center items-center flex-col space-y-4">
          <Details {...itemSelected} />
        </div>
      </div>
    </div>
  );
}
