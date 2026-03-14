# Capital Compass – Agentic AI Investment Research System

## Overview

Capital Compass is an agentic AI application designed to automate the end-to-end workflow of investment research. The system orchestrates multiple specialized AI agents to gather financial data, analyze market sentiment, perform analyst research and synthesize insights into structured investment recommendations.

The project demonstrates how modern LLM-driven multi-agent architectures can be used to solve complex real-world decision-making problems in financial analysis.

---

## Problem Statement

Traditional investment research is:

* Time-consuming due to manual data collection from multiple sources
* Fragmented across quantitative financial metrics and qualitative news sentiment
* Subjective, often influenced by individual interpretation and bias

The goal of this project was to design an AI system capable of automating the research pipeline while producing balanced, actionable investment insights.

---

## Solution

Capital Compass implements a **stateful multi-agent workflow** that automates:

* Financial data retrieval
* News sentiment analysis
* Analyst consensus research
* Risk vs opportunity evaluation
* Final investment recommendation generation

The system generates structured investment reports with clear decisions such as:

* Invest
* Hold
* Do Not Invest

---

## System Architecture

The core orchestration is implemented using **LangGraph**, enabling a graph-based execution flow between multiple specialist agents.

### Parallel Data Gathering

The workflow begins by collecting three independent information streams:

* Company financial metrics from Alpha Vantage API
* News articles and market sentiment signals
* Analyst ratings and price targets via web search tools

### Specialist Analysis Agents

Each dataset is processed by a dedicated agent:

* **Financial Analyst Agent** – evaluates company fundamentals
* **Sentiment Analyst Agent** – interprets market perception from news
* **Web Research Agent** – summarizes analyst outlook and consensus

### Balanced Review Layer

A **Risk & Opportunity Agent** synthesizes the strongest positive catalyst and the most significant downside risk.

### Final Decision Agent

A senior advisory agent aggregates all insights and produces a decisive investment report with structured reasoning.

This architecture ensures modular reasoning, improved interpretability and more reliable decision synthesis.

---

## Technology Stack

* Python
* LangChain
* LangGraph
* Groq LLM APIs
* Alpha Vantage Financial Data API
* Tavily Web Search
* Streamlit (Frontend Interface)

---

## Key Challenges

* Designing coordinated multi-agent workflows with consistent reasoning
* Managing long-context financial and news inputs
* Ensuring balanced risk-reward synthesis rather than generic summaries
* Handling asynchronous data retrieval pipelines
* Structuring LLM outputs into professional research reports

---

## Results & Impact

* Built an end-to-end working agentic AI research system
* Automated multi-source financial analysis workflow
* Generated structured investment reports with actionable recommendations
* Demonstrated practical real-world use of LLM orchestration frameworks
* Showcased production-oriented system design thinking

---

## Future Improvements

* Add portfolio optimization agent
* Integrate real-time streaming market data
* Improve report evaluation with quantitative scoring
* Deploy scalable backend API version

---

## Links

**ReadyTensor Publication:**
[Read Publication](https://app.readytensor.ai/publications/capital-compass-an-agentic-ai-application-for-investment-research-T1vToFFZgKMr)

**GitHub Repository:**
[View Code](https://github.com/ChidambaraRaju/capital-compass)
