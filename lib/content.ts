import path from "path";
import matter from "gray-matter";
import fs from "fs";

// Ensure this module is only used on the server
export const runtime = "nodejs";

// Paths to content files
const CONTENT_DIR = path.join(process.cwd(), "content");
const PROJECTS_DIR = path.join(CONTENT_DIR, "project");

export interface Certification {
  title: string;
  provider: string;
  link: string;
}

export interface Project {
  slug: string;
  title: string;
  displayName: string;  // For renamed project titles
  description: string;
  shortDescription: string;  // 120-char description for cards
  tags: string[];
  icon: string;  // Emoji icon for project
  links: {
    github?: string;
    demo?: string;
    publication?: string;
    model?: string;
  };
  content: string;
}

export interface SkillsData {
  skills: string[];
}

export interface CertificationsData {
  certifications: Certification[];
}

/**
 * Get about content from markdown file
 */
export async function getAboutContent(): Promise<string> {
  const filePath = path.join(CONTENT_DIR, "about.md");
  const fileContent = fs.readFileSync(filePath, "utf-8");
  return fileContent;
}

/**
 * Get skills from JSON file
 */
export async function getSkills(): Promise<string[]> {
  const filePath = path.join(CONTENT_DIR, "skills.json");
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(fileContent) as SkillsData;
  return data.skills;
}

/**
 * Get certifications from JSON file
 */
export async function getCertifications(): Promise<Certification[]> {
  const filePath = path.join(CONTENT_DIR, "certifications.json");
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(fileContent) as CertificationsData;
  return data.certifications;
}

/**
 * Extract links from markdown content
 */
function extractLinksFromContent(content: string): Project["links"] {
  const links: Project["links"] = {};

  // Extract GitHub link
  const githubMatch = content.match(/\*\*GitHub Repository:\*\*\s*\[([^\]]+)\]\(([^)]+)\)/);
  if (githubMatch) {
    links.github = githubMatch[2];
  }

  // Extract Demo link
  const demoMatch = content.match(/\*\*Live Demo[^\*]*:\*\*\s*\[([^\]]+)\]\(([^)]+)\)/);
  if (!demoMatch) {
    const demoMatch2 = content.match(/\*\*Demo[^\*]*:\*\*\s*\[([^\]]+)\]\(([^)]+)\)/);
    if (demoMatch2) {
      links.demo = demoMatch2[2];
    }
  } else {
    links.demo = demoMatch[2];
  }

  // Extract HuggingFace Model link
  const hfMatch = content.match(/\*\*HuggingFace Model:\*\*\s*\[([^\]]+)\]\(([^)]+)\)/);
  if (hfMatch) {
    links.model = hfMatch[2];
  }

  // Extract Publication link (ReadyTensor)
  const pubMatch = content.match(/\*\*ReadyTensor Publication:\*\*\s*\[([^\]]+)\]\(([^)]+)\)/);
  if (pubMatch) {
    links.publication = pubMatch[2];
  }

  return links;
}

/**
 * Get project metadata (icon, short description, display name) by slug
 */
function getProjectMetadata(slug: string): { icon: string; shortDescription: string; displayName: string } {
  const metadata: Record<string, { icon: string; shortDescription: string; displayName: string }> = {
    "capital-compass": {
      icon: "📊",
      shortDescription: "Agentic AI system automating investment research using multi-agent workflows to analyze financial data, sentiment, and generate actionable recommendations.",
      displayName: "Capital Compass"
    },
    "license-plate-rt-detr": {
      icon: "👁️",
      shortDescription: "Real-time ALPR system combining RT-DETR v2 transformer detection with optimized OCR pipeline for accurate license plate recognition in surveillance applications.",
      displayName: "License Plate Recognition using RT-DETR V2"
    },
    "medical-slm-qlora": {
      icon: "⚕️",
      shortDescription: "Fine-tuned Qwen2.5-0.5B model using QLoRA for empathetic medical Q&A, demonstrating efficient domain adaptation with improved ROUGE metrics.",
      displayName: "Domain Adaptation of SLM using QLoRA"
    },
    "pico-gpt": {
      icon: "🧠",
      shortDescription: "Built and trained a decoder-only GPT-style language model (~49M params) from scratch using PyTorch on ~1B tokens from FineWeb dataset.",
      displayName: "Building GPT from Scratch"
    },
    "pixelpersona": {
      icon: "💬",
      shortDescription: "RAG-powered AI chat system where each historical persona — Einstein, Tesla, Gandhi — is an autonomous LangGraph agent wired to a dedicated vector database.",
      displayName: "PixelPersona"
    }
  };

  return metadata[slug] || {
    icon: "🔬",
    shortDescription: "AI and Machine Learning project showcasing advanced capabilities.",
    displayName: slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())
  };
}

/**
 * Get all projects from markdown files in project directory
 */
export async function getProjects(): Promise<Project[]> {
  // Check if projects directory exists
  if (!fs.existsSync(PROJECTS_DIR)) {
    return [];
  }

  const fileNames = fs.readdirSync(PROJECTS_DIR).filter(
    (name) => name.endsWith(".md")
  );

  const projects = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const filePath = path.join(PROJECTS_DIR, fileName);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    // Extract description from the Overview section
    const overviewMatch = content.match(/## Overview\s+([^\n]+)/);
    const description = overviewMatch ? overviewMatch[1].trim() : "AI Project";

    // Extract tags from Technology Stack or Model & Training Methodology sections
    const techMatch = content.match(/## Technology Stack\s+([\s\S]+?)(?=##|$)/);
    const trainingMatch = content.match(/## Model & Training Methodology\s+([\s\S]+?)(?=##|$)/);
    const datasetMatch = content.match(/## Dataset\s+([\s\S]+?)(?=##|$)/);
    const techContent = techMatch?.[1] || trainingMatch?.[1] || datasetMatch?.[1] || "";

    // Extract bullet points as tags
    const tagMatches = techContent.matchAll(/^\*\s+([^*]+)/gm);
    const tags = Array.from(tagMatches)
      .map((match) => match[1].trim())
      .filter((tag) => tag.length < 50) // Filter out long descriptions
      .slice(0, 6); // Limit to 6 tags

    // Extract links from content
    const links = extractLinksFromContent(content);

    // Get project metadata
    const metadata = getProjectMetadata(slug);

    return {
      slug,
      title: (data.title as string) || slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
      displayName: metadata.displayName,
      description,
      shortDescription: metadata.shortDescription,
      icon: metadata.icon,
      tags: tags.length > 0 ? tags : ["AI", "Machine Learning"],
      links,
      content,
    };
  });

  return projects;
}

/**
 * Get a single project by slug
 */
export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const projects = await getProjects();
  return projects.find((p) => p.slug === slug) || null;
}
