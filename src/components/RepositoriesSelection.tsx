import { useState } from "react";
import { Repo } from "@/lib/data";

export default function RepositoriesSelection({
  repositories,
  updateSelectedRepo
}: {
  repositories: Repo[];
  updateSelectedRepo: (repo: Repo) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
    <div className="relative">
      <button
        onClick={toggle}
        className="flex items-center rounded bg-gray-600 px-2 py-2 text-white hover:bg-gray-700 focus:bg-gray-700 focus:outline-none"
      >
        Repositories
        <svg
          className="ml-2 h-4 w-4 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 flex flex-col w-48 rounded-md bg-white shadow-lg overflow-y-scroll">
          {repositories.map((repo: Repo) => (
            <button
              onClick={() => {
                updateSelectedRepo(repo);
                setIsOpen(false);
              }}
              key={repo.name}
              className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              {repo.name}
            </button>
          ))}
        </div>
      )}
    </div>
  </>
  );
}
