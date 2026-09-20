---
title: "VākQA: A Benchmark and Evaluation Study for Telugu Spoken Factoid Question Answering"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.19879"
authors: ["Bhavana Akkiraju", "Ravi Sastry Kolluru", "Sri Charan D", "Srihari Bandarupalli", "Santosh Kesiraju", "Anil Vuppala"]
date: "2026-09-16T20:00:00.000Z"
score: 58
guid: "2609.19879"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.19879.png"
generated: "2026-09-20T21:43:11+05:30"
---

Question answering has advanced rapidly with large language models, but predominantly for high-resource languages, in both text and spoken settings. Spoken question answering (SQA) benchmark for Telugu remains unexplored, and the reliability of automatic evaluation in this setting remains unquantified. We introduce VākQA, a Telugu SQA benchmark of 2,001 factoid question-answer pairs across six domains, with 2.53 hours of speech audio, bilingual transcriptions, and human-verified reference answers. We first validate evaluation methods against human judgements: Gemini-as-a-judge best approximates human ratings but is non-uniformly strict, while open-weight judges systematically penalize correct Telugu answers that differ in surface form from the reference. Using this validated setup, we benchmark proprietary and open-weight models across input modality, language, and domain. We observe that Telugu phrasing retains cultural specificity that is lost in translation, speech input introduces phonetic confusions that alter question meaning, and cascaded ASR-MT errors compound progressively. VākQA is publicly released.
