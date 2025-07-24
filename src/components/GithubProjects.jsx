import { useEffect, useState } from "react";
import "./GithubProjects.css";

const GithubIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.686-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.593 1.028 2.686 0 3.847-2.337 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .267.18.577.688.48C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"/></svg>
);

const GlobeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 0 20M12 2a15.3 15.3 0 0 0 0 20"/></svg>
);

const LockIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
);

const GithubProjects = () => {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setLoading(true);
        
        // Fetch profile data
        const profileResponse = await fetch("https://api.github.com/users/vinaydangodra28");
        if (!profileResponse.ok) {
          throw new Error(`Profile fetch failed: ${profileResponse.status}`);
        }
        const profileData = await profileResponse.json();
        setProfile(profileData);

        // Fetch repositories
        const reposResponse = await fetch("https://api.github.com/users/vinaydangodra28/repos?sort=updated&per_page=6");
        if (!reposResponse.ok) {
          throw new Error(`Repos fetch failed: ${reposResponse.status}`);
        }
        const reposData = await reposResponse.json();
        setRepos(Array.isArray(reposData) ? reposData : []);
        
      } catch (err) {
        console.warn("GitHub API error:", err.message);
        // Set fallback data when API fails
        setProfile({
          name: "Vinay Dangodra",
          login: "vinaydangodra28",
          avatar_url: "https://avatars.githubusercontent.com/u/vinaydangodra28?v=4",
          bio: "Web Developer & Designer",
          html_url: "https://github.com/vinaydangodra28"
        });
        setRepos([
          {
            id: 1,
            name: "FlowTile",
            description: "A React-based canvas tool for creating infinitely repeating patterns",
            html_url: "https://github.com/vinaydangodra28/flowtile",
            language: "JavaScript",
            stargazers_count: 0,
            private: false
          },
          {
            id: 2,
            name: "AR-Card",
            description: "A marker-based AR system using MindAR.js",
            html_url: "https://github.com/vinaydangodra28/ar-card",
            language: "JavaScript",
            stargazers_count: 0,
            private: false
          },
          {
            id: 3,
            name: "Portfolio",
            description: "My personal portfolio website built with React",
            html_url: "https://github.com/vinaydangodra28/portfolio",
            language: "JavaScript",
            stargazers_count: 0,
            private: false
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  if (loading) return <div className="github-creative-loading">Loading GitHub profile...</div>;
  if (!profile) return <div className="github-creative-error">Unable to load GitHub data</div>;

  return (
    <>
      {/* Simple Header */}
      <div className="github-header">
        <div className="github-avatar-container">
          <img
            src={profile.avatar_url}
            alt="GitHub avatar"
            className="github-avatar"
          />
        </div>
        <div className="github-header-text">
          <h2 className="github-name">{profile.name || profile.login}</h2>
          <p className="github-username">@{profile.login}</p>
          {profile.bio && <p className="github-bio">{profile.bio}</p>}
        </div>
      </div>

      {/* Top Projects */}
      <div className="github-projects">
        <h3 className="projects-title"><span style={{verticalAlign:'middle',marginRight:6}}><GithubIcon /></span>Top Projects</h3>
        <div className="projects-grid">
          {repos && repos.length > 0 ? (
            repos.slice(0, 6).map((repo) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card"
              >
                <div className="project-header">
                  <h4 className="project-name">{repo.name}</h4>
                  <span className="project-visibility">
                    {repo.private ? <LockIcon /> : <GlobeIcon />}
                  </span>
                </div>
                {repo.description && (
                  <p className="project-description">{repo.description}</p>
                )}
                <div className="project-meta">
                  <span className="project-language">
                    {repo.language || 'Code'}
                  </span>
                  {/* <span className="project-stars">⭐ {repo.stargazers_count}</span> */}
                </div>
              </a>
            ))
          ) : (
            <div className="no-projects">
              <p>No projects available</p>
            </div>
          )}
        </div>
      </div>

      {/* Simple Call to Action */}
      <div className="github-cta">
        <a
          href={profile.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="github-cta-button"
        >
          <span>View All Projects</span>
          <span className="cta-arrow">→</span>
        </a>
      </div>
    </>
  );
};

export default GithubProjects; 