import Row from "./Row";
import { skills } from "../data";

export default function Skills() {
  return (
    <Row id="skills" title="My Skills">
      {/* One card for each skill in data.js */}
      {skills.map((skill) => (
        <div
          key={skill.name}
          className={`flex aspect-video w-56 shrink-0 flex-col justify-end rounded-md bg-gradient-to-br p-4 transition-transform duration-300 hover:scale-105 md:w-64 ${skill.color}`}
        >
          <p className="font-display text-3xl">{skill.name}</p>
          <p className="text-sm text-white/80">{skill.level}</p>
        </div>
      ))}
    </Row>
  );
}
