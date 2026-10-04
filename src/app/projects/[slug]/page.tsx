import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getPublishedProjects, getProjectBySlug, getSiteData } from "@/lib/content";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Tag } from "@/components/ui/Tag";
import { TextLink } from "@/components/ui/TextLink";
import { FactSheet } from "@/components/project/FactSheet";
import { FeatureList } from "@/components/project/FeatureList";
import { BrowserFrame } from "@/components/project/BrowserFrame";
import { MDXRenderer } from "@/components/project/MDXRenderer";
import { CreativeWorkJsonLd } from "@/components/seo/JsonLd";
import { ArrowLeft, ArrowRight } from "lucide-react";

export interface ProjectPageProps {
  params: {
    slug: string;
  };
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://monifasultana.com";
const siteData = getSiteData();

// Statically generate every published project route at build time for SSG & GitHub Pages
export async function generateStaticParams() {
  const projects = getPublishedProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { project } = getProjectBySlug(params.slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title}`,
    description: project.tagline,
    openGraph: {
      title: `${project.title} — Monifa Sultana`,
      description: project.tagline,
      url: `${siteUrl}/projects/${project.slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — Monifa Sultana`,
      description: project.tagline,
    },
  };
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  const { project, content } = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const allProjects = getPublishedProjects();
  const currentIndex = allProjects.findIndex((p) => p.slug === project.slug);
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : null;
  const nextProject = currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : null;

  const primaryScreenshot = project.screenshots[0];

  return (
    <article className="py-12 md:py-20 bg-ink-950 min-h-screen">
      <CreativeWorkJsonLd
        title={project.title}
        description={project.tagline}
        url={`${siteUrl}/projects/${project.slug}`}
        dateCreated={project.year}
        creatorName={siteData.name}
      />

      <div className="max-w-content mx-auto px-5 sm:px-8 space-y-12 md:space-y-16">
        {/* Top Breadcrumb & Navigation */}
        <div className="flex items-center justify-between text-xs font-mono text-textMute hairline-bottom pb-4">
          <Link
            href="/#work"
            className="inline-flex items-center gap-1 hover:text-bone transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Work</span>
          </Link>
          <div className="uppercase tracking-wider">
            {project.category} · {project.year}
          </div>
        </div>

        {/* Header Title Block */}
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <StatusBadge status={project.status} />
            <span className="text-xs font-mono uppercase tracking-wider text-textMute">
              {project.type} project
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-bone leading-tight">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-textSoft font-sans max-w-3xl leading-relaxed">
            {project.tagline}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {project.stack.map((tech) => (
              <Tag key={tech.name} variant="muted">
                {tech.name}
              </Tag>
            ))}
          </div>
        </div>

        {/* Fact Sheet Card */}
        <FactSheet project={project} />

        {/* Hero Media: Primary Screenshot Frame */}
        <div className="space-y-3">
          <h3 className="text-xs font-mono tracking-widest text-textMute uppercase font-semibold">
            Primary Application Visual
          </h3>
          <BrowserFrame
            src={primaryScreenshot?.src}
            alt={primaryScreenshot?.alt || project.title}
            urlLabel={project.links?.live || `${project.slug}.preview`}
          />
        </div>

        {/* Overview & Core Purpose */}
        <div className="space-y-4 max-w-3xl">
          <h3 className="text-xl font-serif text-bone hairline-bottom pb-3">
            Overview
          </h3>
          <p className="text-textSoft leading-relaxed font-sans text-base sm:text-lg">
            {project.overview}
          </p>
        </div>

        {/* Feature List Component */}
        {project.features && project.features.length > 0 && (
          <FeatureList features={project.features} className="max-w-3xl" />
        )}

        {/* MDX Body Content */}
        {content && content.trim().length > 0 && (
          <div className="space-y-4 max-w-3xl hairline-top pt-8">
            <MDXRenderer source={content} />
          </div>
        )}

        {/* Footer Case Study Navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 hairline-top pt-12">
          {prevProject ? (
            <Link
              href={`/projects/${prevProject.slug}`}
              className="p-6 rounded-lg border border-ink-700 bg-ink-900/50 hover:border-ink-600 transition-colors group space-y-2"
            >
              <div className="text-xs font-mono text-textMute group-hover:text-ember-400 flex items-center gap-1">
                <ArrowLeft className="w-3.5 h-3.5" /> Previous Project
              </div>
              <div className="font-serif text-lg text-bone group-hover:text-ember-400 transition-colors">
                {prevProject.title}
              </div>
            </Link>
          ) : <div />}

          {nextProject ? (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="p-6 rounded-lg border border-ink-700 bg-ink-900/50 hover:border-ink-600 transition-colors group space-y-2 text-right"
            >
              <div className="text-xs font-mono text-textMute group-hover:text-ember-400 flex items-center justify-end gap-1">
                Next Project <ArrowRight className="w-3.5 h-3.5" />
              </div>
              <div className="font-serif text-lg text-bone group-hover:text-ember-400 transition-colors">
                {nextProject.title}
              </div>
            </Link>
          ) : <div />}
        </div>
      </div>
    </article>
  );
}
