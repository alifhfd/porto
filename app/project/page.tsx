import Link from "next/link";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div>
      <h1>Projects</h1>

      {projects.map((project) => (
        <div key={project.slug}>
          <Link href={`/projects/${project.slug}`}>
            {project.title}
          </Link>
        </div>
      ))}
    </div>
  );
}