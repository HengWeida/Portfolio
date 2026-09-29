import { useState } from "react";
import { profile } from "../data";

export default function Contact() {
  // useState remembers something that can change.
  // "copied" starts as false. setCopied changes it and React redraws the button.
  const [copied, setCopied] = useState(false);

  function copyEmail() {
    navigator.clipboard.writeText(profile.email); // copy to clipboard
    setCopied(true);                              // show "Copied!"
    setTimeout(() => setCopied(false), 2000);     // back to normal after 2 seconds
  }

  return (
    <section id="contact" className="px-6 py-12 md:px-12">
      <h2 className="text-xl font-bold md:text-2xl">Contact</h2>
      <p className="mt-2 text-muted">Feel free to message me. I'm open to learning and to new opportunities.</p>

      <div className="mt-6 flex flex-wrap gap-3">
        <button onClick={copyEmail} className="rounded bg-white px-6 py-2 font-bold text-black hover:bg-white/80">
          {copied ? "Copied!" : `Copy email: ${profile.email}`}
        </button>
        <a
          href={profile.facebook}
          target="_blank"
          rel="noreferrer"
          className="rounded bg-gray-500/70 px-6 py-2 font-bold hover:bg-gray-500/50"
        >
          Facebook
        </a>
      </div>
    </section>
  );
}
