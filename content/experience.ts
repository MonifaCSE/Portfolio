import type { Experience } from "@/lib/schemas";

export const professionalExperience: Experience[] = [
  {
    id: "sevix-global-role",
    title: "Web Developer",
    organization: "Sevix Global",
    location: "Chattogram",
    startDate: "Current", // [NEEDS USER CONFIRMATION Q-14: exact start date unconfirmed]
    endDate: "Present",
    isCurrent: true,
    category: "professional",
    description: [
      "Web Developer role at Sevix Global agency platform.",
    ],
    confirmed: true,
  },
];

export const teachingExperience: Experience[] = [
  {
    id: "aims-academy",
    title: "IT Lecturer",
    organization: "AIMS Academy",
    location: "Mehedibag, Chittagong",
    startDate: "May 2026",
    endDate: "Present",
    isCurrent: true,
    category: "teaching-academic",
    description: [
      "Lecturing OTHM Level 3, Level 4, Level 5, and Level 6 IT diploma modules.",
      "Delivering core computing coursework, practical lab demonstrations, and student project supervision.",
    ],
    courses: [
      "OTHM Level 3 Diploma in IT",
      "OTHM Level 4 Diploma in IT",
      "OTHM Level 5 Extended Diploma in IT",
      "OTHM Level 6 Diploma in IT",
    ],
  },
  {
    id: "gmit-academy",
    title: "Instructor (AI & ML)",
    organization: "GMIT Academy",
    location: "Chawkbazar, Chittagong",
    startDate: "Nov 2025",
    endDate: "Apr 2026",
    isCurrent: false,
    category: "teaching-academic",
    description: [
      "Instructed AI and Machine Learning introductory and lab courses.",
      "Guided hands-on coding labs covering data preprocessing, Python machine learning libraries, and model evaluation.",
    ],
    courses: ["AI and Machine Learning Courses", "Practical Machine Learning Labs"],
  },
  {
    id: "iiuc-adjunct",
    title: "Adjunct Lecturer",
    organization: "Dept. of CSE, International Islamic University Chittagong (IIUC)",
    location: "Kumira, Chittagong",
    startDate: "Jan 2024",
    endDate: "Mar 2025",
    isCurrent: false,
    category: "teaching-academic",
    description: [
      "Taught fundamental and advanced CSE courses including Computer Fundamentals, Software Development, and Compiler Design.",
      "Guided student web application projects using Python, Flask, Django, HTML, CSS, and JavaScript.",
    ],
    courses: ["Computer Fundamentals", "Software Development", "Compiler Design"],
  },
  {
    id: "iiuc-ta",
    title: "Teaching Assistant",
    organization: "Dept. of CSE, International Islamic University Chittagong (IIUC)",
    location: "Kumira, Chittagong",
    startDate: "Jan 2022",
    endDate: "Feb 2023",
    isCurrent: false,
    category: "teaching-academic",
    description: [
      "Conducted weekly lab sessions for C++, Python, Flask, JavaScript, HTML, and CSS.",
      "Assisted students with algorithm implementation, debugging, and web application assignment reviews.",
    ],
    courses: ["Structured Programming (C++)", "Web Programming Labs (Flask/JS)"],
  },
];

