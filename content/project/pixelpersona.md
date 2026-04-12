# PixelPersona: RAG-Powered AI Chat with Historical Personas

## Overview

PixelPersona is a RAG-powered AI chat system where each persona — Einstein, Nikola Tesla, APJ Abdul Kalam, Mahatma Gandhi — is an autonomous LangGraph agent wired to a dedicated vector database. When you ask Gandhi about his philosophy of nonviolent resistance, the system doesn't guess. It retrieves chunks from Wikipedia articles and Wikiquote quotes, then generates a response grounded in that verified biographical context.

---

## Why RAG for Historical Personas?

* **Grounded responses**: Each persona retrieves from verified sources like Wikipedia and Wikiquote
* **Agentic behavior**: LangGraph enables autonomous reasoning per persona
* **Vector similarity**: Semantic search ensures contextually relevant document retrieval
* **Authentic voice**: Responses reflect actual biographical data, not hallucinated facts

---

## Architecture & Implementation

### Multi-Agent System

* **LangGraph agents**: Each historical figure is a separate agent with dedicated graph
* **Vector databases**: ChromaDB stores embedded Wikipedia and Wikiquote chunks per persona
* **Retrieval pipeline**: Embedding-based similarity search retrieves top-k relevant documents
* **Generation**: Responses are synthesized from retrieved context, not pure memory recall

### Key Components

* **Persona definitions**: Structured prompts defining each historical figure's character and expertise
* **Document chunking**: Preprocessing of source materials into retrievable segments
* **Embedding models**: Sentence transformers for high-quality semantic embeddings
* **Conversation memory**: Maintaining context within each persona session

---

## Data Pipeline

### Document Sources

* **Wikipedia articles**: Biographical information for each historical figure
* **Wikiquote**: Famous quotes and philosophical statements
* **Structured knowledge**: Key dates, achievements, and contributions

### Retrieval Process

* **Query embedding**: User question is embedded using sentence transformers
* **Similarity search**: Top-k relevant chunks retrieved from persona's vector store
* **Context injection**: Retrieved documents are prepended to the prompt
* **Response generation**: Model generates answer grounded in retrieved context

---

## Results & Observations

### Quality Improvements

* Responses grounded in verified biographical facts
* Reduced hallucination compared to pure parametric memory
* Authentic voice matching each persona's known perspectives

### Technical Challenges

* Balancing retrieval relevance with conversational coherence
* Managing context window limits with multiple retrieved chunks
* Persona-specific tuning for natural dialogue flow

---

## Links

**GitHub Repository:**
[PixelPersona - Meet the Great Minds](https://github.com/ChidambaraRaju/PixelPersona)

**ReadyTensor Publication:**
[PixelPersona - Meet the Great Minds](https://app.readytensor.ai/publications/pixelpersona-meet-the-great-minds-QMuGdivMsnBT)