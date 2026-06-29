import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getProjectBySlug, getAdjacentProjects } from "@/data/projects";
import Hero from "@/components/project/Hero";
import DataOverview from "@/components/project/DataOverview";
import BusinessProblem from "@/components/project/BusinessProblem";
import DataPreview from "@/components/project/DataPreview";
import TimelineCarousel from "@/components/project/TimelineCarousel";
import Dashboard from "@/components/project/Dashboard";
import Insights from "@/components/project/Insights";
import Recommendations from "@/components/project/Recommendations";
import NextProject from "@/components/project/NextProject";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} — Alief Hafid`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.subtitle,
      images: [project.coverImage],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const { prev, next } = getAdjacentProjects(slug);

  return (
    <main className="min-h-screen bg-white dark:bg-neutral-950">
      {/* 01 — Hero */}
      <Hero project={project} />

      {/* 02 — Data Overview */}
      <DataOverview dataset={project.dataset} />

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="h-px bg-neutral-100 dark:bg-neutral-900" />
      </div>

      {/* 03 — Business Problem */}
      <BusinessProblem problems={project.businessProblem} />

      {/* 04 — Data Preview */}
      <DataPreview tablePreview={project.tablePreview} />

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="h-px bg-neutral-100 dark:bg-neutral-900" />
      </div>

      {/* 05 — Timeline Carousel */}
      <TimelineCarousel timeline={project.timeline} />

      {/* 06 — Dashboard */}
      <Dashboard project={project} />

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="h-px bg-neutral-100 dark:bg-neutral-900" />
      </div>

      {/* 07 — Insights */}
      <Insights insights={project.insights} />

      {/* 08 — Recommendations */}
      <Recommendations recommendations={project.recommendations} />

      {/* 09 — Next Project */}
      <NextProject prev={prev} next={next} />
    </main>
  );
}
