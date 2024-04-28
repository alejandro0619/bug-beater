import { User, PullRequest, Repo } from "@/lib/data";

export const fecthRepos = async (username: string): Promise<Repo[]> => {
  const response = await fetch(
    `https://api.github.com/users/${username}/repos`,
  );
  const data: Repo[] = await response.json();

  return data;
};

export const fetchPRs = async (username: string, repo: string): Promise<PullRequest[]> => {
  const response = await fetch(
    `https://api.github.com/repos/${username}/${repo}/pulls`,
  );
  const data: PullRequest[] = await response.json();
  return data;
};

export const fecthUser = async (
  id: string,
): Promise<User> => {
  const response = await fetch(`https://api.github.com/user/${id}`);

  const user: User = await response.json();
  return user;
};
