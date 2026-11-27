---
title: "DRBench Pro: A Knowledge-Centric Benchmark for Professional Deep Research Agents"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2611.34852"
authors: ["Han Huang", "Yuchen Yan", "Xingyu Wu", "Yijun Li", "Chao Deng", "Jie Liu", "Jin Ma", "Yongliang Shen"]
date: "2026-11-24T19:00:00.000Z"
score: 58
guid: "2611.34852"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2611.34852.png"
generated: "2026-11-27T19:03:37+05:30"
---

Deep research agents gather information from multiple sources and synthesize it into reports on complex, open-ended questions. Existing benchmarks assess report quality along several dimensions, but lack a dedicated knowledge-centric evaluation of which research directions a report covers and how deeply it explores them. We introduce DRBench Pro, a benchmark that makes structured knowledge coverage the primary evaluation target. Our automated pipeline builds local knowledge trees from Wikipedia and uses sampled subgraphs to generate research queries and evidence-grounded rubrics. Each rubric corresponds to a relation in the tree, preserving the structure of the knowledge being evaluated. Agents receive only the research query. This structure allows us to measure breadth across major research directions and depth along related knowledge chains, with their geometric mean giving overall coverage. The benchmark includes 144 cases across 24 domains and 44,102 rubrics. Evaluating 16 deep research agents reveals different strengths in breadth and depth, with the best-performing agent reaching 57.04% overall coverage. Rubric judgments agree closely with human annotations, and agent rankings remain stable across the tested metric configurations.
