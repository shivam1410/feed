---
title: "Are the Financial Reasoning from LLMs Credible? A Real World Test over Long-Horizon Statements"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.28661"
authors: ["Xinke Tong", "Xuanming Zhang", "Tianyi Tang", "An Yang", "Jiatu Hu", "Guojie Lin", "Zhenzhen Shi", "Lingfeng Zeng", "Boyu Yang", "Bing Zhao", "Hu Wei", "Lin Qu", "Dayiheng Liu"]
date: "2026-07-21T20:00:00.000Z"
score: 70
guid: "2607.28661"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.28661.png"
generated: "2026-08-05T20:00:21+05:30"
---

Do Large Language Models (LLMs) possess genuine structural reasoning, or merely rely on surface-level pattern matching? The financial domain, demanding numerical precision and multi-step logic over long contexts, is an ideal testbed. Existing benchmarks fail to capture real-world industrial complexity, predominantly relying on multiple-choice questions or single-hop QA over cropped tables while ignoring intricate cross-statement dynamics and temporal de-cumulation.
  To bridge this gap, we introduce FinIndices, a large-scale benchmark evaluating data-processing fidelity over uncropped financial statements (up to 32K tokens). Utilizing an automated synthesis pipeline with adversarial traps, FinIndices encompasses Single-Index computation and Table-Index tabulation to test complex domain, temporal, and caliber reasoning.
  Our evaluation reveals two severe LLM vulnerabilities. First, a "Knowledge Bottleneck": despite memorizing formulas during pre-training, models demonstrate fragile pattern matching. Removing explicit formula hints causes performance to collapse (e.g., Gemini-3.1-Pro drops from 70.70% to 38.22% on table tasks), exposing fatal flaws in temporal de-cumulation and stock-flow caliber mismatch. Second, a "Structural Bottleneck": the intense cognitive load of generating multi-metric, multi-period tables actively drains reasoning capacity. Under structural pressure, LLMs that flawlessly execute isolated derivations regress to shallow heuristics, such as fetching incorrect adjacent columns or substituting deep accounting adjustments with lazy literal arithmetic. Finally, Supervised Fine-Tuning (SFT) yields substantial zero-hint gains (+8.54% Single, +3.82% Table), validating that structured logic can be partially restored via data-centric alignment.
