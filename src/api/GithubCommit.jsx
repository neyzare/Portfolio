import React, { useEffect, useState } from "react";

const GitHubCommits = () => {
  const [commits, setCommits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Remplace par ton username GitHub et le nom de ton repo
  const username = "neyzare";
  const repo = "git-auto";

  useEffect(() => {
    // Faire une requête à l'API GitHub
    fetch(`https://api.github.com/repos/${username}/${repo}/commits`)
      .then((response) => response.json())
      .then((data) => {
        setCommits(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Impossible de charger les commits.");
        setLoading(false);
      });
  }, [username, repo]);

  if (loading) {
    return <div>Chargement...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Derniers Commits</h2>
      <ul>
        {commits.slice(0, 5).map((commit, index) => (
          <li key={index} className="mb-2">
            <a
              href={commit.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {commit.commit.message}
            </a>
            <span className="text-gray-600"> - {commit.commit.author.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GitHubCommits;