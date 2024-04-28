"use client";
import Card from "@/components/Card";
import Details from "@/components/Details";

import { useContext, useEffect, useState } from "react";
import { fecthRepos, fetchPRs } from "../api/services/fetching";
import { AuthContext } from "@/providers/AuthProvider";
import { Repo, Cards, PullRequest } from "@/lib/data";
import RepositoriesSelection from "@/components/RepositoriesSelection";

export default function Dashboard() {
  const [selectedItem, setSelectedItem] = useState<PullRequest | undefined>(
    undefined,
  );
  const [repos, setRepos] = useState<Repo[]>([]);
  const [selectedRepo, setSelectedRepo] = useState<Repo | undefined>(undefined);
  const [pullrequests, setPullRequests] = useState<PullRequest[]>([]);
  const user = useContext(AuthContext);

  const handleSelectedItem = (item: PullRequest) => setSelectedItem(item);

  useEffect(() => {
    if (!user) return;
    fecthRepos(user.login).then((data) => setRepos(data));
  }, [user]);

  useEffect(() => {
    if (!selectedRepo || !user) return;
    fetchPRs(user.login, selectedRepo.name).then((data) =>
      setPullRequests(data),
    );
  }, [selectedRepo]);
console.log("repos",selectedRepo)
console.log("pullrequests",pullrequests)
  return (
    <div className="flex h-screen pt-14">
      <div className="flex w-2/4 flex-col items-center space-y-2  overflow-y-auto rounded bg-Issues py-5">
        <RepositoriesSelection
          repositories={repos}
          updateSelectedRepo={setSelectedRepo}
        />

        {pullrequests.map((card: PullRequest) => (
          <Card
            key={card.id}
            updateSelectedItem={handleSelectedItem}
            {...card}
          />
        ))}
      </div>

      <div className="flex w-3/4 flex-col justify-center border-b border-l border-t border-r-white border-opacity-20 bg-Details p-8">
        <div className="flex flex-col justify-center space-y-6 overflow-y-hidden">
          {selectedItem && <Details {...selectedItem} />}
        </div>
      </div>
    </div>
  );
}
