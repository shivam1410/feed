---
title: "EviScene: Beyond \"Is It AI?\" for Agentic Image Factuality Assessment"
category: "Other"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2610.14609"
authors: ["ZiAn Wang", "Ruiqi Liu", "Zhengbo Zhang", "Yi Han", "Jialiang Shen", "Ruoxin Chen", "Manni Cui", "Ximo Zhu", "Jin Jiang", "Mingzhe Liu", "Linhao Wang", "Wenhao Wang", "Shu Wu"]
date: "2026-10-09T20:00:00.000Z"
score: ""
guid: "2610.14609"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2610.14609.png"
generated: "2026-10-14T19:00:21+05:30"
---

Determining whether an image is AI-generated does not establish whether the situation it depicts is factually supported. We formulate Image Factuality Assessment: given an image and a generic verification instruction, a system returns a supported or refuted verdict with an evidence-grounded explanation. Without a supplied textual claim, the system must progressively refine factual questions during investigation and align external evidence with the specific situation depicted. We introduce EviLens, an expert-reviewed benchmark of 10,174 supported and refuted images from controlled construction and web collection, covering twelve factual error types and evaluating both verdict accuracy and evidence sufficiency. We develop EviScene, a multimodal ReAct agent that interleaves visual inspection, external retrieval, and evidence analysis, using new findings to refine its questions and revisit relevant image details. We train a compact policy with supervised fine-tuning on reviewed teacher trajectories, followed by privileged on-policy self-distillation applied to verified decisions from the policy's own investigations. On the 1,527-image test set, the trained Qwen3.5-9B agent achieves 79.05% balanced accuracy and a Strict Evidence Sufficiency Rate (SESR) of 52.26%, improving over the same-backbone base agent by 6.71 and 9.37 percentage points, respectively. Its SESR is the highest among the evaluated agents.Code, models, and data will be released at https://github.com/wangzian828/EVISCENE and https://huggingface.co/ZiAnwang/EviScene.
