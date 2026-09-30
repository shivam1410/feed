---
title: "TabFM: A Zero-Shot Foundation Model for Tabular Data"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.37959"
authors: ["Weihao Kong", "Erez Louidor Ilan", "Shuxin Nie", "Taman Narayan", "Rajat Sen", "Yichen Zhou", "Deqing Fu", "Samet Oymak", "Abhimanyu Das"]
date: "2026-09-28T20:00:00.000Z"
score: 32
guid: "2609.37959"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.37959.png"
generated: "2026-09-30T19:08:55+05:30"
---

Tabular machine learning typically relies on per-dataset workflows, fitting tree ensembles or running AutoML searches from scratch for every task. We present TabFM, a 400M-parameter tabular foundation model that formulates supervised tabular prediction as in-context learning. TabFM produces calibrated zero-shot predictions in a single forward pass without task-specific tuning. Trained entirely on synthetic tables generated from structural causal models, TabFM learns general tabular representations that transfer zero-shot to real-world tasks. Across all 51 benchmark datasets in TabArena (38 classification and 13 regression), zero-shot TabFM ranks first among default tabular foundation models and outperforms tuned AutoML pipelines. Two extensions over the same frozen weights improve performance further on both tracks: multi-view feature expansion with ensembling and post-hoc calibration (TabFM+), and LLM-guided, dataset-specific data processing and feature engineering (TabFM-Auto).
