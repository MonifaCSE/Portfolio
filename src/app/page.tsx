import {
  getSiteData,
  getFeaturedProjects,
  getSkillsList,
  getTeachingExperience,
  getEducationList,
  getCredentialsList,
  getDirectionData,
} from "@/lib/content";

import { Hero } from "@/components/sections/Hero";
import { Intro } from "@/components/sections/Intro";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Stack } from "@/components/sections/Stack";
import { Teaching } from "@/components/sections/Teaching";
import { Direction } from "@/components/sections/Direction";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  const siteData = getSiteData();
  const featuredProjects = getFeaturedProjects();
  const skills = getSkillsList();
  const teachingExp = getTeachingExperience();
  const education = getEducationList();
  const credentials = getCredentialsList();
  const directionData = getDirectionData();

  return (
    <div className="w-full">
      <Hero siteData={siteData} />
      <Intro />
      <SelectedWork projects={featuredProjects} />
      <Stack skills={skills} />
      <Teaching
        experience={teachingExp}
        education={education}
        credentials={credentials}
      />
      <Direction directionData={directionData} />
      <Contact />
    </div>
  );
}
