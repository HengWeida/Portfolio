import { useState } from "react";
import Row from "./Row";
import ProjectModal from "./ProjectModal";
import { projects } from "../data";

export default function Projects() {
  // "selected" is the project that was clicked. null = nothing clicked (modal closed).
  const [selected, setSelected] = useState(null);

  return (
    <>
      <Row id="projects" title="My Projects">
        {projects.map((project) => (
          <button
            key={project.title}
            onClick={() => setSelected(project)} // remember which card was clicked
            className={`flex aspect-video w-72 shrink-0 flex-col justify-end rounded-md bg-gradient-to-br p-4 text-left transition-transform duration-300 hover:scale-105 md:w-80 ${project.color}`}
          >
            <p className="font-display text-4xl">{project.title}</p>
            <p className="text-sm text-white/80">{project.tags[0]}</p>
          </button>
        ))}
      </Row>

      {/* Show the popup only when a project is selected */}
      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </>
  );
}
