import * as React from "react";

export interface PersonJsonLdProps {
  name: string;
  jobTitle: string;
  url: string;
  image?: string;
  alumniOf?: string;
}

export const PersonJsonLd: React.FC<PersonJsonLdProps> = ({
  name,
  jobTitle,
  url,
  image,
  alumniOf = "International Islamic University Chittagong (IIUC)",
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    jobTitle,
    url,
    image: image || undefined,
    alumniOf: {
      "@type": "EducationalOrganization",
      name: alumniOf,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export interface WebSiteJsonLdProps {
  name: string;
  url: string;
  description: string;
}

export const WebSiteJsonLd: React.FC<WebSiteJsonLdProps> = ({
  name,
  url,
  description,
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name,
    url,
    description,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export interface CreativeWorkJsonLdProps {
  title: string;
  description: string;
  url: string;
  dateCreated?: number;
  creatorName: string;
}

export const CreativeWorkJsonLd: React.FC<CreativeWorkJsonLdProps> = ({
  title,
  description,
  url,
  dateCreated,
  creatorName,
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: title,
    description,
    url,
    dateCreated: dateCreated ? String(dateCreated) : undefined,
    creator: {
      "@type": "Person",
      name: creatorName,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
