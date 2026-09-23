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
  outcome: string;
  disciplines: string[];
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
function cleanUrl(url: string): string {
  return url.replace(/[)\].,]+$/, "");
}

function findUrl(content: string, pattern: RegExp): string | undefined {
  const match = content.match(pattern);
  return match ? cleanUrl(match[0]) : undefined;
}

function extractLinksFromContent(content: string): Project["links"] {
  const links: Project["links"] = {};

  const github = findUrl(content, /https:\/\/github\.com\/[^\s)]+/);
  const publication = findUrl(content, /https:\/\/app\.readytensor\.ai\/publications\/[^\s)]+/);
  const demo = findUrl(content, /https:\/\/huggingface\.co\/spaces\/[^\s)]+/);
  const model = findUrl(content, /https:\/\/huggingface\.co\/(?!spaces\/|datasets\/)[^\s)]+/);

  if (github) links.github = github;
  if (publication) links.publication = publication;
  if (demo) links.demo = demo;
  if (model) links.model = model;

  return links;
}

/**
 * Get project metadata (icon, short description, display name) by slug
 */
const PROJECT_ORDER = [
  "capital-compass",
  "pixelpersona",
  "medical-slm-qlora",
  "license-plate-rt-detr",
  "story-gpt",
];

function getProjectMetadata(slug: string): {
  icon: string;
  shortDescription: string;
  displayName: string;
  outcome: string;
  disciplines: string[];
} {
  const metadata: Record<string, {
    icon: string;
    shortDescription: string;
    displayName: string;
    outcome: string;
    disciplines: string[];
  }> = {
    "capital-compass": {
      icon: "📊",
      shortDescription: "Agentic AI system automating investment research using multi-agent workflows to analyze financial data, sentiment, and generate actionable recommendations.",
      displayName: "Capital Compass",
      outcome: "A multi-agent desk that turns market data and sentiment into an invest, hold, or pass.",
      disciplines: ["LangGraph", "Multi-agent", "Finance"],
    },
    "license-plate-rt-detr": {
      icon: "👁️",
      shortDescription: "Real-time ALPR system combining RT-DETR v2 transformer detection with optimized OCR pipeline for accurate license plate recognition in surveillance applications.",
      displayName: "License Plate Recognition",
      outcome: "Real-time plate detection with RT-DETR and a tuned OCR pipeline.",
      disciplines: ["RT-DETR", "OCR", "Computer vision"],
    },
    "medical-slm-qlora": {
      icon: "⚕️",
      shortDescription: "Fine-tuned Qwen2.5-0.5B model using QLoRA for empathetic medical Q&A, demonstrating efficient domain adaptation with improved ROUGE metrics.",
      displayName: "Medical SLM with QLoRA",
      outcome: "Qwen2.5-0.5B adapted with QLoRA for empathetic clinical question answering.",
      disciplines: ["QLoRA", "Qwen", "Fine-tuning"],
    },
    "story-gpt": {
      icon: "📖",
      shortDescription: "Pretrained a ~57M parameter decoder-only StoryGPT model from scratch on TinyStories (3.28B tokens) to generate coherent short stories.",
      displayName: "StoryGPT",
      outcome: "A 57M decoder-only model pretrained from scratch on TinyStories.",
      disciplines: ["Pretraining", "Transformers", "TinyStories"],
    },
    "pixelpersona": {
      icon: "💬",
      shortDescription: "RAG-powered AI chat system where each historical persona — Einstein, Tesla, Gandhi — is an autonomous LangGraph agent wired to a dedicated vector database.",
      displayName: "PixelPersona",
      outcome: "Historical figures as LangGraph agents, each with its own retrieval store.",
      disciplines: ["RAG", "LangGraph", "Personas"],
    },
  };

  return metadata[slug] || {
    icon: "🔬",
    shortDescription: "AI and Machine Learning project showcasing advanced capabilities.",
    displayName: slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
    outcome: "An applied AI system built end to end.",
    disciplines: ["Applied AI"],
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
      outcome: metadata.outcome,
      disciplines: metadata.disciplines,
      tags: metadata.disciplines.length > 0 ? metadata.disciplines : (tags.length > 0 ? tags : ["AI", "Machine Learning"]),
      links,
      content,
    };
  });

  return projects.sort((a, b) => {
    const rank = (slug: string) => {
      const index = PROJECT_ORDER.indexOf(slug);
      return index === -1 ? PROJECT_ORDER.length : index;
    };
    return rank(a.slug) - rank(b.slug);
  });
}

/**
 * Get a single project by slug
 */
export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const projects = await getProjects();
  return projects.find((p) => p.slug === slug) || null;
}
