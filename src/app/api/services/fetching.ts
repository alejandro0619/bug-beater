import { GithubUserResponse, Repo } from "@/lib/data";

export const fecthRepos = async (username: string): Promise<Repo[]> => {
  const response = await fetch(
    `https://api.github.com/users/${username}/repos`,
  );
  const data: Repo[] = await response.json();
  console.log(data);
  return data;
};

export const fetchPRs = async (username: string, repo: string) => {
  const response = await fetch(
    `https://api.github.com/repos/${username}/${repo}/pulls`,
  );
  const data = await response.json();
  return data;
};

export const retrieveUserFromId = async (
  id: string,
): Promise<GithubUserResponse> => {
  const response = await fetch(`https://api.github.com/user/${id}`);

  const user: GithubUserResponse = await response.json();
  return user;
};
