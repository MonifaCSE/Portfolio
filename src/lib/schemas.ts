import { z } from "zod";

export const ProjectSchema = z.object({
  slug: z.string(),
  title: z.string(),
  tagline: z.string().max(140),
  category: z.string(),
  year: z.number(),
  type: z.enum(["personal", "client", "academic", "internal", "agency-demo"]),
  status: z.enum(["live", "built", "in-progress", "academic", "concept"]),
  role: z.string(),
  teamScope: z.enum(["solo", "team"]).optional(),
  featured: z.boolean(),
  order: z.number(),
  publish: z.boolean(),
  accent: z.string().optional(),
  overview: z.string(),
  problem: z.string().optional(),
  objectives: z.array(z.string()).optional(),
  contributions: z.array(z.string()).optional(),
  features: z.array(
    z.object({
      title: z.string(),
      body: z.string().optional(),
      status: z.enum(["implemented", "planned"]).optional(),
    })
  ).optional(),
  stack: z.array(
    z.object({
      name: z.string(),
      area: z.enum(["frontend", "backend", "database", "tooling"]),
    })
  ),
  implementation: z.array(z.string()).optional(),
  architecture: z
    .object({
      diagram: z.string().optional(),
      notes: z.string().optional(),
    })
    .optional(),
  challenges: z.array(z.string()).optional(),
  outcomes: z
    .array(
      z.object({
        text: z.string(),
        verified: z.literal(true),
      })
    )
    .optional(),
  screenshots: z.array(
    z.object({
      src: z.string(),
      alt: z.string(),
      caption: z.string().optional(),
      kind: z.enum(["public", "admin", "mobile", "other"]),
      width: z.number(),
      height: z.number(),
    })
  ),
  video: z
    .object({
      src: z.string(),
      poster: z.string(),
    })
    .optional(),
  links: z
    .object({
      live: z.string().optional(),
      repo: z.string().optional(),
    })
    .optional(),
  verification: z.object({
    stack: z.boolean(),
    role: z.boolean(),
    features: z.boolean(),
    links: z.boolean(),
  }),
});

export type Project = z.infer<typeof ProjectSchema>;

export const SkillSchema = z.object({
  name: z.string(),
  group: z.enum([
    "languages",
    "frameworks",
    "data-and-bi",
    "tools",
    "design",
    "professional",
  ]),
  level: z.enum(["practical-project", "broader-proficiency"]),
  evidence: z.enum(["cv-skills", "cv-project", "cv-teaching", "owner-statement"]),
  confirmed: z.boolean(),
  projects: z.array(z.string()).optional(),
});

export type Skill = z.infer<typeof SkillSchema>;

export const ExperienceSchema = z.object({
  id: z.string(),
  title: z.string(),
  organization: z.string(),
  location: z.string(),
  startDate: z.string(),
  endDate: z.string(),
  isCurrent: z.boolean().default(false),
  category: z.literal("teaching-academic"),
  description: z.array(z.string()),
  courses: z.array(z.string()).optional(),
});

export type Experience = z.infer<typeof ExperienceSchema>;

export const EducationSchema = z.object({
  degree: z.string(),
  institution: z.string(),
  dates: z.string(),
  result: z.string(),
  details: z.string().optional(),
});

export type Education = z.infer<typeof EducationSchema>;

export const CredentialSchema = z.object({
  title: z.string(),
  issuer: z.string(),
  year: z.string().optional(),
  kind: z.enum(["certification", "platform", "extracurricular"]),
});

export type Credential = z.infer<typeof CredentialSchema>;
