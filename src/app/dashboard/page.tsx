"use client";
import Card from "@/components/Card";
import Details from "@/components/Details";
import Profile from "@/components/Navbar";

import { ICard } from "@/lib/data";
import { useState } from "react";

export default function Dashboard() {
  const [itemSelected, setItemSelected] = useState<ICard | null>(null);

  const handleSelectedItem = (item: ICard) => {
    setItemSelected(item);
  };

  const test: any = [
    {
      title: "issue n1",
      date: "Wed Apr 24 2024 11:53:50 GMT-0400 (Venezuela Time)",
      description: "New issue",
      user: "pastaa",
      key: "issue1",
    },
    {
      date: "Wed Apr 24 2024 11:50:00 GMT-0400 (Venezuela Time)",
      description: "jksnhdjkanhd",
      key: "issue2",
      title: "adadadad",
      user: "John doe",
    },
    {
      date: "Wed Apr 24 2024 13:53:50 GMT-0400 (Venezuela Time)",
      user: "tercer usuario",
      description: "jadadaddad",
      title: "adadad third title",
      key: "issue3",
    },
    {
      date: "Wed Apr 24 2024 18:05:33 GMT-0400 (Venezuela Time)",
      user: "tercer usuario",
      description:
        "jksnhdjkansdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaahdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaahd",
      title: "lmao what am i doing",
      key: "issue4",
    },
  ];

  return (
    <div className="flex h-screen pt-11">
      <div className="flex w-2/4 flex-col items-center space-y-2 overflow-y-auto rounded bg-Issues py-5">
        {test.map((card: any) => (
          <Card
            selectedItem={null}
            updateSelectedItem={handleSelectedItem}
            {...card}
            key={card.key}
          />
        ))}
      </div>

      <div className="flex w-3/4 flex-col items-center justify-center bg-Details  p-2">
        <div className="flex flex-col items-center justify-center space-y-4 overflow-y-hidden">
          <Details {...itemSelected} />
        </div>
      </div>
    </div>
  );
}
