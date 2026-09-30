---
title: "TabFM-Auto: Self-Evolving Pipelines for Tabular Foundation Models"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.37989"
authors: ["Deqing Fu", "Huangyuan Su", "Rajat Sen", "Taman Narayan", "Sujay Sanghavi", "Abhimanyu Das", "Weihao Kong"]
date: "2026-09-28T20:00:00.000Z"
score: 48
guid: "2609.37989"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.37989.png"
generated: "2026-09-30T19:08:55+05:30"
---

Tabular foundation models achieve strong zero-shot accuracy on structured data by pretraining on synthetic tables, but they ignore the column names, task descriptions, and auxiliary files that carry dataset semantics. Meanwhile, self-evolving machine learning engineering (MLE) agents train models from scratch on each dataset, yet jointly searching over features, architectures, and hyperparameters is noisy and prone to overfitting. We introduce TabFM-Auto, which pairs a tabular foundation model, TabFM, with a language model agent that evolves the data pipeline around it. Guided by dataset metadata and validation feedback, TabFM-Auto iteratively refines data cleaning, feature engineering, context selection, and post-processing to reduce TabFM's error. Across all 51 datasets of the TabArena benchmark, five TabFM-Auto configurations with different agents and language models take the top five overall positions, and the best raises TabFM from 1785 to 2013 Elo. The discovered pipelines also transfer to other frozen tabular foundation models (+69 to +143 Elo) with no further search. On the 8 tabular competitions of MLE-Bench, TabFM-Auto ranks first overall among MLE agents.
