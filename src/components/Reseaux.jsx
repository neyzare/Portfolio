import GitHubCommits from "../api/githubCommit"

export const Reseaux = () => {

  return (
    <>
      <div className="flex flex-col p-6">
        <span>Mes reseaux</span>
        <GitHubCommits/>
      </div>
    </>
  )
}