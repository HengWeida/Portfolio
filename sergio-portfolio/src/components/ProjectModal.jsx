// The popup that opens when you click a project card.
// It receives two things (props): the project, and the onClose function.
export default function ProjectModal({ project, onClose }) {
  return (
    // Dark background. Clicking it closes the popup.
    <div onClick={onClose} className="fixed inset-0 z-30 flex items-center justify-center bg-black/70 p-4">
      {/* stopPropagation = clicking inside the box does NOT close it */}
      <div onClick={(e) => e.stopPropagation()} className="w-full max-w-2xl overflow-hidden rounded-md bg-panel">
        <div className={`relative flex aspect-video items-end bg-gradient-to-br p-6 ${project.color}`}>
          <button
            onClick={onClose}
            className="absolute right-3 top-3 h-9 w-9 rounded-full bg-base text-lg hover:bg-neutral-700"
            aria-label="Close"
          >
            ✕
          </button>
          <h3 className="font-display text-5xl">{project.title}</h3>
        </div>

        <div className="p-6">
          <p className="text-lg text-white/90">{project.description}</p>

          <div className="mt-4 flex flex-wrap gap-2 text-sm text-muted">
            {project.tags.map((tag) => (
              <span key={tag} className="rounded bg-neutral-800 px-2 py-1">
                {tag}
              </span>
            ))}
          </div>

          {/* Only show the button if the project has a link */}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-block rounded bg-white px-6 py-2 font-bold text-black hover:bg-white/80"
            >
              View on GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
