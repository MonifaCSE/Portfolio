import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { ProjectSchema, Project, Skill, Experience, Education, Credential } from "@/lib/schemas";
import { siteConfig } from "@content/site";
import { profileConfig } from "@content/profile";
import { teachingExperience, professionalExperience } from "@content/experience";
import { educationList } from "@content/education";
import { credentialsList } from "@content/credentials";
import { skillsList } from "@content/skills";
import { directionConfig } from "@content/direction";

const projectsDirectory = path.join(process.cwd(), "content/projects");

export function getPublishedProjects(): Project[] {
  if (!fs.existsSync(projectsDirectory)) return [];

  const fileNames = fs.readdirSync(projectsDirectory);
  const projects: Project[] = [];

  for (const fileName of fileNames) {
    if (!fileName.endsWith(".mdx") && !fileName.endsWith(".md")) continue;

    const fullPath = path.join(projectsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    const parsed = ProjectSchema.safeParse({
      ...data,
      overview: data.overview || content.slice(0, 200),
    });

    if (parsed.success) {
      if (parsed.data.publish || process.env.NODE_ENV !== "production") {
        projects.push(parsed.data);
      }
    } else {
      console.warn(`[Content Warning] Project parse failed for ${fileName}:`, parsed.error.format());
    }
  }

  return projects.sort((a, b) => a.order - b.order);
}

export function getFeaturedProjects(): Project[] {
  return getPublishedProjects().filter((p) => p.featured);
}

export function getProjectBySlug(slug: string): { project: Project | null; content: string } {
  const fullPath = path.join(projectsDirectory, `${slug}.mdx`);
  const altPath = path.join(projectsDirectory, `${slug}.md`);
  
  const targetPath = fs.existsSync(fullPath) ? fullPath : fs.existsSync(altPath) ? altPath : null;
  if (!targetPath) return { project: null, content: "" };

  const fileContents = fs.readFileSync(targetPath, "utf8");
  const { data, content } = matter(fileContents);
  const parsed = ProjectSchema.safeParse(data);

  return {
    project: parsed.success ? parsed.data : null,
    content,
  };
}

export function getSiteData() {
  return siteConfig;
}

export function getProfileData() {
  return profileConfig;
}

export function getTeachingExperience(): Experience[] {
  return teachingExperience;
}

export function getProfessionalExperience(): Experience[] {
  return professionalExperience;
}

export function getEducationList(): Education[] {
  return educationList;
}

export function getCredentialsList(): Credential[] {
  return credentialsList;
}

export function getSkillsList(): Skill[] {
  return skillsList.filter((s) => s.confirmed);
}

export function getDirectionData() {
  return directionConfig;
}
