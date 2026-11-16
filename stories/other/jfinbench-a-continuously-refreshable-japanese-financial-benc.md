---
title: "JFinBench: A Continuously Refreshable Japanese Financial Benchmark from the Latest Certification Exams"
category: "Other"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2611.18130"
authors: ["Issa Sugiura", "Taro Makino", "Takashi Ishida"]
date: "2026-11-12T19:00:00.000Z"
score: ""
guid: "2611.18130"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2611.18130.png"
generated: "2026-11-16T20:51:01+05:30"
---

Large language models (LLMs) are increasingly applied to finance, creating a need for benchmarks that evaluate their capabilities across financial systems with different regulations and practices. However, existing financial benchmarks provide limited coverage of country-specific financial systems, and they are difficult to keep up to date as released questions leak into training data. We introduce JFinBench, a Japanese financial benchmark comprising 321 examples from the 2026 editions of six regularly administered certification exams covering accounting, tax, financial planning, and banking. To construct it, we develop a human-in-the-loop agentic pipeline in which a coding agent writes exam-specific conversion code and a review page, while a human verifies every example and feeds corrections back to the agent. This pipeline adapts to heterogeneous exam formats and reduces the effort of incorporating new exam editions, enabling periodic refreshes that mitigate data contamination. Evaluating 12 recent LLMs, we find that Claude Fable 5 and GPT-6 Astra exceed 93% overall, while even the best open-weight model, Kimi K3.1 Pro, trails Claude Fable 5 by 12 percentage points. When models can additionally use a terminal and web access, they retrieve the knowledge they lack and every model improves. The gap narrows but about 4 points remain, and the ranking of models stays largely the same, suggesting that knowledge held in the model itself remains valuable even with tools. We release the dataset, the evaluation code, and the construction pipeline.
