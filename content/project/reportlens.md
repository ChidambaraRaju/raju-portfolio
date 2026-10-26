# ReportLens – Agentic Multimodal RAG with Page-Cited Answers

## Overview

ReportLens is an agentic, multimodal RAG system that answers questions about a long PDF using its text, tables, and charts, and cites the page for every fact. It was built and tested on NVIDIA's 2026 Annual Report: 175 pages of narrative text, financial statements, checkmark tables, charts, diagrams, and two-page spreads.

The project shows that reliable document QA depends less on the answering model and more on parsing, chunking, and deciding what deserves to be embedded.

---

## Problem Statement

Annual reports are hard for text-only RAG:

* Financial tables carry merged headers and span multiple pages, and a single wrong digit is unacceptable
* Charts and diagrams hold answers that never appear in the text layer
* Layouts mix wide spreads, multi-column pages, and symbol-font checkmarks
* At least one page has a broken text layer that reads as gibberish

The goal was an assistant that answers from all of these sources, cites pages so the reader can check the evidence, handles follow-ups, and refuses when the report does not contain the answer.

---

## Solution

ReportLens splits the work into an offline ingestion pipeline and an agentic query path.

### Ingestion (run once)

* **Parse** – LlamaParse's agentic tier reads each page with a vision model, returns markdown with tables as HTML, and crops 202 figures
* **Chunk** – Pages are split at headings; sections under 500 characters merge forward, tables are never cut, and no chunk spans two pages (377 chunks)
* **Describe** – DeepSeek-V4.1-Flash writes searchable descriptions of the 12 charts, including their values; icons, photos, and table crops are skipped
* **Store** – Jina Embeddings v5 vectors go into a local Chroma store (389 documents) with page numbers and chart image paths

### Query Path

* A LangChain agent decides when to call its single `search_document` tool, and can re-search with a new query
* Each search returns the top 3 chunks above a 0.3 relevance cutoff, labelled with page numbers for citation
* A `before_model` middleware attaches the image of any retrieved chart, so the model reads the chart itself, not only its description
* The last 3 turns are kept per conversation for follow-up questions
* FastAPI streams `search`, `text`, `done`, and `error` events to a React UI that turns page mentions into citations and opens per-page excerpts

---

## Technology Stack

* LlamaParse
* LangChain
* DeepSeek-V4.1-Flash
* Jina Embeddings v5
* Chroma
* FastAPI
* React + TypeScript
* LangSmith

---

## Key Challenges

* Choosing a parser: Docling and Unstructured `hi_res` produced duplicated lines, split table columns, and OCR noise on diagrams before LlamaParse fixed all three
* A 42-character heading chunk ranked first for an unrelated question, which led to merging short sections
* Groq's free tier rejected questions that retrieved about 8,100 tokens of financial tables, so the answer model moved to DeepSeek
* Parallel tool calls caused Chroma threading failures and lost figures until both were fixed
* Reasoning tokens count toward `max_tokens`, so chart descriptions needed a 3,000-token budget

---

## Results & Impact

* All six test questions were answered correctly with page citations, covering a financial table, a checkmark table, an architecture diagram, a line chart, a greeting, and a refusal
* For 4 of the 5 document questions, the expected page ranked first in retrieval
* A spot check of 145 parsed numbers across four pages found every one in the PDF's text layer
* A question takes 3 to 7 seconds end to end and costs about $0.0003 with one search

---

## Future Improvements

* Scope the assistant to report-related topics with a small local pre-filter classifier
* Build a 25–30 question evaluation suite as LangSmith experiments
* Support more than one pre-ingested document

---

## Links

**ReadyTensor Publication:**
[Read Publication](https://app.readytensor.ai/publications/reportlens-agentic-multimodal-rag-with-page-cited-answers-from-text-tables-and-charts-iNOkj6Dg5UrVjgh14ktj4)

**GitHub Repository:**
[View Code](https://github.com/ChidambaraRaju/reportlens)
