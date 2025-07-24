import React from 'react';
import { Project, Experience, EducationItem, SkillCategory } from './types';

export const GITHUB_URL = "https://github.com/joshee2004";
export const LINKEDIN_URL = "https://linkedin.com/in/joshee2004";
export const WEBSITE_URL = "https://joshee2004.vercel.app";
export const EMAIL_ADDRESS = "joshuaroyar232@gmail.com";
export const PHONE_NUMBER = "+91 7892256574";
export const LOCATION = "Bengaluru, India";

export const PROJECTS: Project[] = [
  {
    title: "Senti Trade - Stock Sentiment Analysis",
    description: [
      "Built a full stack React app to predict sentiment of stock tickers like AAPL, GOOGL.",
      "Integrated Google Gemini API to classify sentiment as positive/negative.",
      "Displayed real-time insights, and filtering functionality.",
    ],
  },
  {
    title: "Thrive AI - AI-based Personal Mental Health Assistant",
    description: [
      "Created a full-stack Svelte app serving as a personal wellness chatbot.",
      "Used Gemini API for empathetic conversation, user analytics, and tracking.",
      "Enabled secure authentication for private user sessions.",
    ],
  },
  {
    title: "Tale Stream - Full Stack Storytelling Platform",
    description: [
      "Developed a React + Spring Boot platform for sharing user-generated stories.",
      "Integrated PostgreSQL for database handling and user-authenticated posts/comments.",
      "Focused on building an intuitive UI and efficient backend.",
    ],
  },
];

export const EXPERIENCE: Experience[] = [
  {
    role: "Associate President & Secretary",
    company: "MVJCE Toastmasters Club",
    period: "2023 – 2025",
    description: [
        "Held multiple leadership positions, strengthening club operations and implementing innovative initiatives.",
        "Increased member retention from 60% to 98% by introducing a point-based participation system.",
        "Expanded club membership from 6 to 30 members through social media campaigns and creative content.",
        "Led the club to receive over 20 awards and widespread recognition within the college community."
    ],
  },
  {
    role: "Graphics Designer",
    company: "District 92 Toastmasters",
    period: "2023 – 2024",
    description: [
        "Created visually engaging posters and reels for the district's Instagram handle using Canva.",
        "Contributed to the District Newsletter and designed personalized birthday wishes for members.",
        "Recognized as the Best PR of the Term 2023-24, contributing to District 92 being awarded Best District in Toastmasters International for 2023."
    ],
  },
];

export const EDUCATION: EducationItem[] = [
    {
        institution: "MVJ College of Engineering",
        degree: "Bachelor of Engineering, Artificial Intelligence and Machine Learning",
        period: "2022 – 2026",
    },
    {
        institution: "Bethany Junior College",
        degree: "Grade 12 (ISC)",
        period: "2020 – 2022",
        grade: "Grade: 84%",
    },
    {
        institution: "Bethany High School",
        degree: "Grade 10 (ICSE)",
        period: "2010 – 2020",
        grade: "Grade: 93%",
    },
];


export const SKILLS: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: ["Python", "Java", "C/C++", "JavaScript"],
  },
  {
    title: "AI/ML",
    skills: ["TensorFlow", "Google Gemini API", "NumPy", "Pandas"],
  },
  {
    title: "Web Development",
    skills: ["React", "Svelte", "Spring Boot", "HTML/CSS", "PostgreSQL"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Docker", "WSL", "Linux", "Jupyter Notebook"],
  },
  {
    title: "Design & Multimedia",
    skills: ["Canva", "Photoshop", "Premiere Pro", "DaVinci Resolve"],
  },
];

export const INTERESTS = ["Artificial Intelligence", "Deep Learning", "Data Science", "Cybersecurity", "Blockchain"];
export const LANGUAGES = ["English (Fluent)", "Tamil (Native)", "Kannada (Native)", "French (B1)"];
export const HOBBIES = ["Content Writing", "Digital Marketing", "Prompt Engineering", "Music", "Discord Server Management"];


// Icon components
export const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

export const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export const WebsiteIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
    </svg>
);

export const ArrowUpRightIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline>
    </svg>
);

export const CheckCircleIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
);
