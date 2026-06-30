---
title: "Can AI Draw Science? A Benchmark for Evaluating Scientific Figure Generation by Text-to-Image and Multimodal Models"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.28406"
authors: ["Davie Chen"]
date: "Tue, 30 Jun 2026 00:00:00 -0400"
score: 68
guid: "oai:arXiv.org:2606.28406v1"
image: ""
generated: "2026-06-30T19:06:59+05:30"
---

arXiv:2606.28406v1 Announce Type: new Abstract: Text-to-image and multimodal generative models are increasingly used to produce scientific figures such as mechanism diagrams, experimental-design schematics, conceptual frameworks, and graphical abstracts. Yet existing image-generation benchmarks (e.g., GenEval, T2I-CompBench, DPG-Bench) evaluate natural images and measure compositionality, object counting, or photorealism. None of them measure what makes a generated scientific figure usable: correct and legible text labels, faithful depiction of entities and their relations, coherent diagrammatic structure, and adherence to disciplinary drawing conventions. We introduce SciDraw-Bench, a benchmark of 32 structured scientific-figure generation tasks spanning eight figure types and ten disciplines, where each task pairs a natural-language prompt with a machine-checkable specification of required labels, relations, components, conventions, and negative constraints. We propose a four-dimensional evaluation protocol: Text Fidelity (OCR-based label recall and character error rate), Semantic Correctness (vision-language-model judging against the specification), Structural Quality, and Convention Adherence, together with a meta-evaluation protocol and a preliminary inter-judge reliability analysis (human-rating validation is ongoing). We evaluate a domain-specific system, SciDraw AI, against representative general-purpose text-to-image models, and outline a code-to-figure baseline as a planned extension. In a pilot over all eight figure types, the domain-specific system substantially outperforms the general-purpose baselines on every dimension and figure type, with the largest gaps on semantic correctness and convention adherence; text fidelity remains the hardest dimension for all systems.
