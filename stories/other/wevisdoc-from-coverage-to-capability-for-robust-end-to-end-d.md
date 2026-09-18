---
title: "WeVisDoc: From Coverage to Capability for Robust End-to-End Document Parsing"
category: "Other"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.20423"
authors: ["Hao Yu", "Kang Liu", "Linnan Zhao", "Jiabo Zhan", "Chong Sun", "Chen Li", "Jing Lyu"]
date: "2026-09-16T20:00:00.000Z"
score: ""
guid: "2609.20423"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.20423.png"
generated: "2026-09-18T20:52:59+05:30"
---

Document parsing converts document images into structured content and requires reliable performance across diverse layouts and acquisition conditions. Yet training corpora are biased toward common document types and clean digital pages, while expanding coverage alone does not specify how to address a parser's remaining weaknesses. We present WeVisDoc, a two-stage data-centric framework for robust end-to-end document parsing. Stage I broadens semantic, structural, and appearance coverage through heterogeneous data and structure-preserving degradation synthesis. Stage II uses a held-out probe to measure the Stage I parser's residual errors within fixed visual-structural clusters. These diagnostics guide targeted data construction and reallocation of the target-token budget. WeVisDoc-4B achieves an Overall score of 95.38 on OmniDocBench v1.6 and a mean Overall score of 75.54 across the three PureDocBench tracks, ranking first among the compared end-to-end parsers in all four settings. Compared with Stage I, Stage II improves Overall scores for the 2B and 4B models on both benchmarks, with larger gains on the degraded PureDocBench tracks, including a 4.03-point gain for the 4B model on the Real Degraded track.
