import { profile } from "../data";

// Styled like the "More details" area of a Netflix title page.
export default function About() {
  return (
    <section id="about" className="px-6 py-12 md:px-12">
      <h2 className="text-xl font-bold md:text-2xl">About me</h2>

      <div className="mt-4 grid gap-8 md:grid-cols-3">
        <p className="text-lg leading-relaxed text-white/90 md:col-span-2">{profile.bio}</p>

        <dl className="space-y-3 text-sm">
          <div>
            <dt className="inline text-muted">Studying: </dt>
            <dd className="inline">{profile.course}, {profile.school}</dd>
          </div>
          <div>
            <dt className="inline text-muted">Learning: </dt>
            <dd className="inline">{profile.learning}</dd>
          </div>
          <div>
            <dt className="inline text-muted">Interests: </dt>
            <dd className="inline">{profile.interests}</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
