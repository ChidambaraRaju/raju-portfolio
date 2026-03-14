# Domain Adaptation of a Small Language Model for Medical Question Answering using QLoRA

## Overview

This project focuses on fine-tuning a Small Language Model (SLM) to generate structured and empathetic medical responses using Parameter-Efficient Fine-Tuning (PEFT). The goal was to explore how lightweight transformer models can be adapted for specialized domains such as healthcare while maintaining low computational requirements.

The system was trained to act as a conversational medical assistant capable of responding to patient symptom queries in a professional and structured format.

---

## Problem Statement

General-purpose language models often struggle in domain-specific conversational settings such as healthcare because they:

* Produce overly verbose or poorly structured responses
* Lack consistent professional tone required in clinical dialogue
* Are expensive to fine-tune at scale
* Do not easily adapt to domain-specific conversational patterns

The objective of this project was to adapt a small instruction-tuned language model to follow medical consultation style conversations efficiently using limited compute resources.

---

## Solution

A domain adaptation pipeline was built to fine-tune the **Qwen2.5-0.5B-Instruct** model on a real-world medical consultation dataset using **QLoRA-based parameter-efficient fine-tuning**.

The fine-tuned model was trained to:

* Maintain a professional doctor persona
* Follow structured Patient–Doctor dialogue format
* Provide empathetic responses
* Improve response consistency and formatting

---

## Dataset

* **ChatDoctor-HealthCareMagic-100k dataset**
* Realistic patient symptom queries
* Structured doctor responses
* Informal patient language with clinical conversational patterns

Training Samples: ~39,500
Evaluation Samples: 500

---

## Model & Training Methodology

### Base Model

* Qwen2.5-0.5B-Instruct
* ~0.5 Billion parameters
* Instruction-tuned transformer architecture

### Fine-Tuning Technique

* QLoRA with 4-bit NF4 quantization
* LoRA Rank: 16
* LoRA Alpha: 32
* LoRA Dropout: 0.05
* Optimizer: paged_adamw_8bit
* Max Sequence Length: 512

Training Duration: ~1.5 hours on a single L4 GPU

---

## Evaluation & Results

### Quantitative Improvements (ROUGE Metrics)

* ROUGE-1 improved from **0.2246 → 0.2646**
* ROUGE-2 improved from **0.0187 → 0.0485**
* ROUGE-L improved from **0.1091 → 0.1493**

Training loss decreased steadily while token-level accuracy improved, indicating successful adaptation to medical dialogue structure. 

### Qualitative Observations

The fine-tuned model demonstrated:

* Improved bedside conversational tone
* Consistent professional greetings and closings
* Better adherence to structured consultation format

However, analysis revealed important limitations:

* Responses were sometimes medically generic
* Clinical reasoning depth remained limited
* Occasional pattern-based hallucinations in medication suggestions

These insights highlight the difference between linguistic adaptation and true domain expertise. 

---

## Key Challenges

* Efficient fine-tuning under GPU memory constraints
* Ensuring stylistic adaptation without overfitting
* Evaluating conversational medical quality beyond metrics
* Balancing dataset realism with factual reliability

---

## Learnings & Future Work

* Integrating Retrieval-Augmented Generation (RAG) for factual grounding
* Training on full dataset and multiple epochs
* RLHF alignment using domain experts
* Safety-focused evaluation pipelines for healthcare AI

---

## Impact

This project demonstrates that:

* Small Language Models can be effectively specialized for domain tasks
* Parameter-efficient methods enable affordable experimentation
* Structured evaluation and critical analysis are essential in high-risk AI domains

---

## Links

**ReadyTensor Publication:**
[[Add ReadyTensor Link Here](https://app.readytensor.ai/publications/domain-adaptation-of-a-small-language-model-for-medical-question-answering-using-qlora-6I8t2NhK2w8r)]

**GitHub Repository:**
[[Add GitHub Repo Link Here](https://github.com/ChidambaraRaju/qwen2.5-0.5b-chatdoctor-qlora)]

**HuggingFace Model Card:**
[[Add HuggingFace Model Card Link](https://huggingface.co/justjuu/qwen2.5-0.5b-chatdoctor-qlora-adapters)
