import { profile } from "../data";

export default function Footer() {
  return (
    <footer className="px-6 pb-10 pt-6 text-sm text-muted md:px-12">
      <p>Questions? Call (Globe) {profile.phone}</p>
      <p className="mt-4">
        © {new Date().getFullYear()} {profile.name}. Built with React and Tailwind.
      </p>
    </footer>
  );
}
