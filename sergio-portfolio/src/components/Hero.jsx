import { profile } from "../data";

// The big "billboard" at the top, like the featured title on Netflix.
export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[85vh] items-end bg-gradient-to-br from-[#5a0b10] via-[#2a0a0d] to-base px-6 pb-28 pt-32 md:px-12"
    >
      {/* Photo on the right (hidden on phones) */}
      <img
        src={profile.photo}
        alt={`Photo of ${profile.name}`}
        className="absolute right-12 top-32 hidden h-72 w-72 rounded-md object-cover md:block"
      />

      {/* Dark fade at the bottom so the hero blends into the page */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-base to-transparent" />

      {/* Text (relative = sits on top of the fade) */}
      <div className="relative max-w-xl">
        <p className="border-l-4 border-brand pl-3 text-sm tracking-widest text-muted">
          PORTFOLIO
        </p>
        <h1 className="mt-4 font-display text-6xl leading-none md:text-8xl">{profile.name}</h1>

        <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
          <span className="border border-white/50 px-1.5">{profile.course}</span>
          <span className="text-muted">{profile.school}</span>
        </div>

        <p className="mt-4 text-xl font-medium">{profile.title}</p>
        <p className="mt-2 text-lg text-white/80">{profile.tagline}</p>

        {/* Netflix-style buttons: white main button, gray second button */}
        <div className="mt-6 flex gap-3">
          <a
            href="#projects"
            className="rounded bg-white px-6 py-2 text-lg font-bold text-black hover:bg-white/80"
          >
            ▶ Projects
          </a>
          <a
            href="#about"
            className="rounded bg-gray-500/70 px-6 py-2 text-lg font-bold hover:bg-gray-500/50"
          >
            ⓘ About me
          </a>
        </div>
      </div>
    </section>
  );
}
