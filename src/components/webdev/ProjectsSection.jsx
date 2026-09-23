import { useState } from 'react'
import { useReveal } from '../../hooks/useReveal'
import { PROJECTS, PROJECT_CATEGORIES } from '../../data/projects'

const ALL = 'All'
const TABS = [ALL, ...PROJECT_CATEGORIES]
const PAGE_SIZE = 6

function mark(name) {
  const words = name.split(/\s+/).filter(Boolean)
  if (words.length > 1) return (words[0][0] + words[1][0]).toUpperCase()
  return words[0].slice(0, 2).toUpperCase()
}

function ProjectCard({ project, index }) {
  const domain = project.url.replace(/^https?:\/\//, '').replace(/\/$/, '')

  return (
    <a
      className="project-card"
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      style={{ '--i': index }}
    >
      <div className="project-media">
        {project.image ? (
          <img src={project.image} alt={`${project.name} website`} loading="lazy" />
        ) : (
          <span className="project-mark" aria-hidden="true">
            {mark(project.name)}
          </span>
        )}
        {project.placeholder && <span className="project-flag">Sample</span>}
      </div>
      <div className="project-body">
        <span className="project-cat">{project.category}</span>
        <h3>{project.name}</h3>
        <p>{project.blurb}</p>
        <span className="project-foot">
          <span className="project-domain">{domain}</span>
          <span className="project-visit" aria-hidden="true">
            Visit
            <svg viewBox="0 0 16 16" fill="none">
              <path
                d="M3 13L13 3M13 3H6M13 3v7"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="sr-only">Visit {project.name} live site (opens in a new tab)</span>
        </span>
      </div>
    </a>
  )
}

export default function ProjectsSection() {
  const headRef = useReveal()
  const [active, setActive] = useState(ALL)
  const [visible, setVisible] = useState(PAGE_SIZE)

  const list = active === ALL ? PROJECTS : PROJECTS.filter((p) => p.category === active)
  const shown = list.slice(0, visible)
  const remaining = list.length - shown.length

  function selectCategory(tab) {
    setActive(tab)
    setVisible(PAGE_SIZE)
  }

  return (
    <section id="projects">
      <div className="wrap">
        <div className="sec-head reveal" ref={headRef}>
          <p className="num">/02 — Projects</p>
          <h2>Live builds, not mockups</h2>
          <p>Filter by industry, then open any card to visit the site we shipped.</p>
        </div>

        <div className="project-tabs" role="group" aria-label="Filter projects by industry">
          {TABS.map((tab) => (
            <button
              key={tab}
              className="project-tab"
              type="button"
              aria-pressed={active === tab}
              onClick={() => selectCategory(tab)}
            >
              {tab}
              {tab === ALL && <b>{PROJECTS.length}</b>}
            </button>
          ))}
        </div>

        <p className="project-count" aria-live="polite">
          Showing {shown.length} of {list.length} {list.length === 1 ? 'project' : 'projects'}
          {active === ALL ? '' : ` in ${active}`}
        </p>

        {list.length ? (
          <>
            <div className="project-grid" key={active}>
              {shown.map((project, i) => (
                <ProjectCard
                  key={`${project.category}-${project.url}-${i}`}
                  project={project}
                  index={i % PAGE_SIZE}
                />
              ))}
            </div>
            {remaining > 0 && (
              <div className="project-more">
                <button className="btn btn-ghost" type="button" onClick={() => setVisible((v) => v + PAGE_SIZE)}>
                  Load {Math.min(PAGE_SIZE, remaining)} more {remaining === 1 ? 'project' : 'projects'}
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="project-empty">
            <h3>Nothing here yet</h3>
            <p>No builds published in this industry so far. Take a look at everything else we have shipped.</p>
            <button className="btn btn-ghost" type="button" onClick={() => selectCategory(ALL)}>
              Show all projects
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
