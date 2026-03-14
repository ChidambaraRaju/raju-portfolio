# PROJECT.md

## Project Title

Applied AI Engineer Portfolio Website

---

## Goal

Build a modern, recruiter-focused personal portfolio website that positions the owner as a strong candidate for Applied AI / Generative AI / Machine Learning Engineer roles.

The portfolio must demonstrate:

* Real-world AI system building capability
* Strong understanding of LLMs, Agentic AI and Computer Vision
* End-to-end product engineering mindset
* Clear technical storytelling
* Modern UI/UX design

---

## Target Audience

* AI startup founders
* Hiring managers
* Applied ML engineers
* Technical recruiters

---

## Content Architecture

All textual content and structured data must be loaded from the `/content` folder.

### Content Files

* `content/about.md` → About section description
* `content/tech-stack.json` → Technology skill cards
* `content/certifications.json` → Certification list
* `content/projects/*.md` → Detailed project case studies

This ensures modular architecture and easy content updates.

---

## Page Structure

### 1. Hero Section

Must include:

* Name
* Title: Applied AI Engineer
* Short tagline about building production-ready AI systems
* CTA Buttons:

  * View Projects
  * Resume Download
  * Contact

Visual direction:

* Dark futuristic gradient background
* Subtle AI-themed animated elements
* Bold typography

---

### 2. About Section

Load content from:

`content/about.md`

Below the description, display:

#### Tech Stack

Load from:

`content/tech-stack.json`

Display as:

* Minimal rounded skill cards
* Grid layout
* Hover glow animation

#### Certifications

Load from:

`content/certifications.json`

Display as:

* Minimal link cards
* Provider name visible
* External link icon
* Clean compact layout

---

### 3. Featured Projects Section

Load all projects dynamically from:

`content/projects/*.md`

Each project card on homepage must show:

* Project title
* One-line description
* Tech tags
* “View Details” interaction

Detailed project page must include:

* Problem
* Solution
* Architecture
* Tech stack
* Challenges
* Results
* Impact
* Links (GitHub / Demo / Publication)

Initial projects:

1. Capital Compass – Agentic Investment Research System
2. Medical Small Language Model Fine-Tuning (QLoRA)
3. Real-Time License Plate Recognition (RT-DETR)

---

### 4. Interactive Demo Section

Optional but recommended:

* Embed live AI demo iframe (Hugging Face Spaces or Streamlit deployment)
* Allow recruiter to interact with AI system

---

### 5. Contact Section

Must include:

* Email
* GitHub
* LinkedIn
* Resume download
* Optional contact form

---

## UI/UX Design Direction

* Dark theme
* Minimal futuristic AI aesthetic
* Soft gradients
* Glassmorphism where appropriate
* Subtle motion using Framer Motion
* Fully responsive
* Clean typography hierarchy

---

## Tech Stack

* Next.js (App Router)
* TypeScript
* TailwindCSS
* Framer Motion
* shadcn/ui

---

## Non-Functional Requirements

* Fast load time (<2 seconds)
* SEO optimized
* Mobile responsive
* Clean component architecture
* Easily extensible content system
* Deployment ready for Vercel

---

## Success Criteria

The portfolio should:

* Impress recruiters within 30 seconds
* Clearly communicate AI engineering depth
* Demonstrate real project execution
* Encourage interview callbacks

---
