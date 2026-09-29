import { useState, useEffect } from "react";

// Each link's href matches a section id (example: <section id="about">)
const links = [
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  // "scrolled" remembers if the page was scrolled down.
  const [scrolled, setScrolled] = useState(false);

  // useEffect runs once when the page loads. It listens to scrolling.
  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 40); // true after scrolling 40px
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // cleanup
  }, []);

  // Transparent at the top, solid black after scrolling (like Netflix)
  const background = scrolled ? "bg-base" : "bg-gradient-to-b from-black/80 to-transparent";

  return (
    <header className={`fixed top-0 z-20 w-full transition-colors duration-300 ${background}`}>
      <nav className="flex items-center justify-between px-6 py-4 md:px-12">
        <a href="#home" className="font-display text-3xl tracking-wide text-brand md:text-4xl">
          SERGIO NERI
        </a>
        <ul className="flex gap-4 text-sm md:gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-white/80 hover:text-white">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
