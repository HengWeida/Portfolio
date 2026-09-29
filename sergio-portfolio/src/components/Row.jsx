import { useRef } from "react";

// A reusable row with a title and cards that scroll sideways.
// "children" is whatever we put inside <Row> ... </Row> (the cards).
export default function Row({ id, title, children }) {
  // useRef lets us grab the scrolling <div> so we can move it with the arrows
  const rowRef = useRef(null);

  function scroll(direction) {
    // direction is -1 (left) or 1 (right)
    rowRef.current.scrollBy({ left: direction * 600, behavior: "smooth" });
  }

  const arrowStyle =
    "absolute top-0 z-10 hidden h-full w-12 bg-black/60 text-4xl opacity-0 transition-opacity group-hover:opacity-100 md:block";

  return (
    <section id={id} className="group relative py-4">
      <h2 className="px-6 text-xl font-bold md:px-12 md:text-2xl">{title}</h2>

      <div className="relative">
        <button onClick={() => scroll(-1)} className={`${arrowStyle} left-0`} aria-label="Scroll left">
          ‹
        </button>

        <div ref={rowRef} className="no-scrollbar flex gap-2 overflow-x-auto px-6 py-4 md:px-12">
          {children}
        </div>

        <button onClick={() => scroll(1)} className={`${arrowStyle} right-0`} aria-label="Scroll right">
          ›
        </button>
      </div>
    </section>
  );
}
