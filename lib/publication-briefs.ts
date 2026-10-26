export interface PublicationBrief {
  title: string;
  summary: string;
  points: string[];
}

/**
 * Short excerpts taken from each project's ReadyTensor publication.
 * Not rewritten beyond light trimming of the source wording.
 */
export const publicationBriefs: Record<string, PublicationBrief> = {
  reportlens: {
    title: "ReportLens: Agentic Multimodal RAG with Page-Cited Answers from Text, Tables and Charts",
    summary:
      "ReportLens is an agentic, multimodal RAG system that answers questions about one long PDF, using its text, tables, and charts, and cites the page for each fact. It was tested on NVIDIA's 2026 Annual Report (175 pages).",
    points: [
      "LlamaParse's agentic tier reads each page with a vision model and returns tables as HTML. The report becomes 377 text chunks plus 12 chart descriptions from DeepSeek-V4.1-Flash, embedded with Jina v5 into Chroma.",
      "A LangChain agent searches only when needed, attaches the image of any retrieved chart before calling the model, cites pages, and refuses when the report is silent.",
      "All six test questions were answered correctly with page citations. A question takes 3 to 7 seconds and costs about $0.0003 when it makes one search.",
    ],
  },
  "capital-compass": {
    title: "Capital Compass: An Agentic AI Application for Investment Research",
    summary:
      "Capital Compass is an agentic AI application that automates the end-to-end workflow of investment research. It leverages a multi-agent LangGraph workflow to fetch financial data, analyze news sentiment, perform web-based analyst research, and synthesize these inputs into a decisive investment report.",
    points: [
      "Specialized agents cover financials, news sentiment, and web research, followed by a critique layer and a final report.",
      "The report recommends Invest, Do Not Invest, or Hold.",
      "Stack listed in the publication: Streamlit, LangChain / LangGraph, Groq, Alpha Vantage, Tavily, and Python.",
    ],
  },
  "medical-slm-qlora": {
    title: "Domain Adaptation of a Small Language Model for Medical Question Answering using QLoRA",
    summary:
      "This publication documents the end-to-end fine-tuning of Qwen2.5-0.5B-Instruct for specialized medical dialogue using QLoRA with 4-bit quantization on the ChatDoctor-HealthCareMagic-100k dataset. The work is conducted strictly for educational and certification purposes and is not intended for real-world medical use.",
    points: [
      "39,500 training samples and 500 evaluation samples. Training took about 1.5 hours on a single L4 GPU.",
      "On 100 test samples, ROUGE-1 moved from 0.2246 to 0.2646, ROUGE-2 from 0.0187 to 0.0485, and ROUGE-L from 0.1091 to 0.1493.",
      "Training loss fell from about 3.0 to 2.25, and token-level accuracy rose from 0.42 to 0.53.",
    ],
  },
  "license-plate-rt-detr": {
    title: "Real-Time Automatic License Plate Recognition Using RT-DETR v2",
    summary:
      "This project presents an end-to-end ALPR pipeline that combines RT-DETR v2 for object detection with an optimized EasyOCR implementation for text extraction. The final system was fine-tuned on a custom dataset and deployed as an interactive web application on Hugging Face Spaces.",
    points: [
      "Detector: RT-DETR v2 with a ResNet-50 backbone, fine-tuned for the single class license_plate.",
      "Recognizer: EasyOCR, with canvas_size set to 512. The interface is Gradio.",
      "Held-out test results: mAP@0.5 of 0.97, mAP at 0.5:0.95 of 0.97, and recall (MAR@100) of 0.98.",
    ],
  },
  "story-gpt": {
    title: "StoryGPT — Pretraining a Small Language Model from Scratch on TinyStories",
    summary:
      "StoryGPT is a causal decoder-only small language model trained from scratch on the roneneldan/TinyStories dataset. It uses a 10-layer transformer with a context length of 256 tokens and is trained on approximately 3.28 billion tokens.",
    points: [
      "About 57M parameters: embedding dimension 512, 8 attention heads, 10 layers, dropout 0.1. Tokenizer is GPT-2 BPE via tiktoken (vocabulary 50,257).",
      "50,000 training steps. At the final step, training loss was 1.0924 and validation loss was 1.1218.",
      "Reported footprint is about 4–5 GB of VRAM, with a total training time of about 3–4 hours. Weights are on Hugging Face at justjuu/story-gpt.",
    ],
  },
};
