// components/GithubProfile.jsx
import { useEffect, useState } from "react";

const GithubProjects = () => {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/vinaydangodra28")
      .then(res => res.json())
      .then(data => setProfile(data))
      .catch(() => setError("Failed to load GitHub profile."));
  }, []);

  if (error) return <p>{error}</p>;
  if (!profile) return <p>Loading GitHub profile...</p>;

  return (
    <div className="github-profile rounded-md shadow-sm  p-4">
      <div className="flex items-center gap-4">
        <img
          src={profile.avatar_url}
          alt="GitHub avatar"
          className="w-16 h-16 rounded-full"
        />
        <div>
          <h2 className="text-xl font-semibold">{profile.name}</h2>
          <p className="text-sm">@{profile.login}</p>
          <a
            href={profile.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline text-sm"
          >
            View on GitHub
          </a>
        </div>
      </div>
      {profile.bio && <p className="mt-4">{profile.bio}</p>}
      <div className="mt-4 text-sm">
        <p>📍 {profile.location || "Unknown location"}</p>
        <p>📦 {profile.public_repos} Public Repositories</p>
        <p>👥 {profile.followers} Followers • {profile.following} Following</p>
      </div>
    </div>
  );
};

export default GithubProjects;
