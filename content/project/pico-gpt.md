# Building and Training a GPT-Style Language Model from Scratch (~49M Parameters)

## Overview

Designed and trained a decoder-only GPT-style language model (~49M parameters) from scratch using PyTorch. This project focuses on understanding LLM internals from first principles by building everything from scratch rather than relying on high-level APIs.

The implementation includes the complete LLM pipeline: data preprocessing with streaming and token shards, transformer architecture with pre-layernorm, fused QKV, and Flash Attention via PyTorch SDPA, and a custom training loop. The model was trained on approximately 1 billion tokens from the FineWeb dataset.

---

## Why Build from Scratch?

Understanding LLMs from first principles is essential for:

* Grasping the underlying mechanisms of transformer architectures
* Learning how attention mechanisms work in detail
* Understanding the complexities of training large language models
* Building intuition for debugging and optimizing LLM systems
* Appreciating why certain architectural choices were made

---

## Architecture & Implementation

### Transformer Architecture

* **Decoder-only architecture** similar to GPT-2
* **Pre-layernorm** (RMSNorm before attention and feedforward blocks)
* **Fused QKV** projection for efficient attention computation
* **Flash Attention** via PyTorch SDPA for memory-efficient attention
* **~49M parameters** optimized for single-GPU training

### Key Components

* **Tokenizer**: BPE tokenizer trained on FineWeb data
* **Positional Embeddings**: Rotary Position Embeddings (RoPE)
* **Activation Function**: GELU approximation
* **Weight Tying**: Tied input/output embeddings

---

## Data Pipeline

### Data Preprocessing

* **Streaming**: Efficient handling of large datasets without loading entirely into memory
* **Token Shards**: Preprocessed and saved as shards for fast loading during training
* **~1 Billion tokens** from the FineWeb dataset

### Training Configuration

* **Context Length**: 1024 tokens
* **Batch Size**: Optimized for single A100/L4 GPU
* **Learning Rate**: Cosine schedule with warmup
* **Training Duration**: Full training run on ~1B tokens

---

## Training Details

### Optimization

* **Optimizer**: AdamW with weight decay
* **Learning Rate Schedule**: Cosine decay with linear warmup
* **Gradient Clipping**: Max gradient norm of 1.0
* **Mixed Precision**: FP16/BF16 training for efficiency

### Compute Efficiency

* **Flash Attention**: Reduced memory footprint enabling longer sequences
* **Gradient Checkpointing**: Trade compute for memory when needed
* **Efficient Data Loading**: Multi-worker data loading with prefetching

---

## Results & Artifacts

### Training Outcomes

* Successful training on ~1B tokens
* Loss convergence demonstrating effective learning
* Model generates coherent text given a prompt

### Published Artifacts

The trained model, training logs, and all artifacts have been published for reproducibility on HuggingFace.

---

## Links

**GitHub Repository:**
[pico-gpt - Building GPT from Scratch](https://github.com/ChidambaraRaju/pico-gpt)

**HuggingFace Model:**
[pico-gpt - Trained Model on HuggingFace](https://huggingface.co/justjuu/pico-gpt)
