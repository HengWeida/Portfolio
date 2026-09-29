// ALL your personal info lives here. To change the website text,
// edit this file only. You don't need to touch the components.

export const profile = {
  name: "Sergio Jr. Neri",
  title: "Aspiring Web Developer",
  tagline: "Still a beginner, learning web development one step at a time.",
  school: "University of Cebu - Main Campus",
  course: "BSIT, 3rd year",
  // Put your real photo in the "public" folder (example: public/profile.jpg)
  // then change this to "/profile.jpg"
  photo: "/portfolioprofile.png",
  bio: "Hi, I'm Sergio. I'm a 3rd year BSIT student and still a beginner, learning web development one step at a time. I started with HTML, CSS, PHP, and MariaDB, and now I'm practicing React and Tailwind. Outside of coding, I love watching sci-fi movies, listening to music, and playing the guitar a little bit.",
  interests: "Sci-fi movies, music, guitar",
  learning: "React, Tailwind CSS",
  email: "gioneri1022@gmail.com",
  phone: "0945 451 7705",
  facebook: "https://www.facebook.com/sergio.neri.789461",
};

// "color" is a Tailwind gradient. It gives each card its own background.
export const skills = [
  { name: "HTML", level: "Basic", color: "from-red-800 to-neutral-900" },
  { name: "CSS", level: "Basic", color: "from-blue-800 to-neutral-900" },
  { name: "PHP", level: "Basic", color: "from-indigo-800 to-neutral-900" },
  { name: "MariaDB (SQL)", level: "Basic", color: "from-teal-800 to-neutral-900" },
  { name: "React", level: "Learning", color: "from-cyan-800 to-neutral-900" },
  { name: "Tailwind CSS", level: "Learning", color: "from-sky-800 to-neutral-900" },
];

export const projects = [
  {
    title: "MoBook",
    description: "A movie booking website we made as a school project. Add here what you worked on and the tools you used.",
    tags: ["School project", "Movie booking"],
    link: "https://github.com/Lancesatorre/Movie-Booking-System",
    color: "from-red-700 to-neutral-900",
  },
  {
    title: "This Portfolio",
    description: "My personal website, built while practicing React components and Tailwind CSS.",
    tags: ["React", "Tailwind CSS"],
    link: "", // empty = no button shown
    color: "from-zinc-600 to-neutral-900",
  },
];
