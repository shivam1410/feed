---
title: "DocOCR-Eval: A Correction-Based Framework for OCR Tool Selection Without Ground Truth"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.16203"
authors: ["Zihan Xu, Puzhen Wu, Lawrence Chun Man Lau, Wei Liu, Sirui Li, Yifan Peng, Yihao Ding"]
date: "Tue, 21 Jul 2026 00:00:00 -0400"
score: 35
guid: "oai:arXiv.org:2607.16203v1"
image: ""
generated: "2026-07-21T19:05:01+05:30"
---

arXiv:2607.16203v1 Announce Type: new Abstract: Document parsing is a foundational step for document understanding tasks such as visual question answering and key information extraction, as it transforms unstructured scanned images into structured representations by extracting textual, visual, and layout information. While numerous Optical Character Recognition (OCR) engines and multimodal large language models (MLLMs) have been developed for this purpose, selecting an appropriate document parsing solution for a given document collection remains challenging, particularly in label-scarce settings. In this work, we conduct a systematic evaluation of text recognition performance across a diverse set of OCR engines and state-of-the-art MLLMs on multiple scanned document benchmarks spanning different domains and languages. Motivated by the limited contextual reasoning capabilities of many OCR engines and the high cost of manual annotations, we propose DocOCR-Eval, an annotation-free evaluation framework for automatic OCR assessment and selection. DocOCR-Eval employs a three-staged correction and ranking strategy to approximate annotation-based tool ordering without ground-truth labels. We show that aggregating across multiple MLLMs progressively improves alignment with annotation-based rankings. Extensive experiments further demonstrate that reliable OCR tool selection can be achieved in realistic, label-limited settings, providing practical guidance for deploying document parsing systems across diverse real-world document collections.
