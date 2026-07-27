---
title: "Show, Don't Tell: Evaluating Spatial Cognition in Generative Pixels Rather Than LLM Text"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.21072"
authors: ["Xu Wang", "Kaixiang Yao", "Miao Pan", "Xiaohe Zhou", "Xuanyu Liu", "Wenqi Zhang", "Xuhong Zhang"]
date: "2026-07-22T20:00:00.000Z"
score: 75
guid: "2607.21072"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.21072.png"
generated: "2026-07-27T19:07:27+05:30"
---

Spatial intelligence is essential for agents to move from static semantic understanding toward interacting with the physical world. Many spatial tasks are grounded in continuous visual scenes, where locations, regions, and paths are more naturally expressed by pointing, marking, or drawing than by reporting precise coordinates or discrete textual symbols. Yet existing spatial reasoning benchmarks usually require coordinates, options, or text, creating an answer-interface mismatch for image-generation models. This makes it difficult to evaluate image-generation models under the same task semantics as text-output VLMs, despite their ability to externalize spatial judgments directly in pixel space. We propose ProVisE (Protocolized Visual Evaluation), a benchmark-agnostic framework that elicits protocol-constrained visual answers from image-generation models and parses them into structured predictions compatible with original metrics. ProVisE also includes an Agentic builder that constructs and validates task-specific protocols for new benchmarks. We further introduce SpatialGen-Bench, a curated diagnostic benchmark of 470 samples across 14 spatial subtasks, four capability levels, and diverse answer forms. We evaluate representative text-output VLMs and image-generation models in a unified setting and validate Agentic protocol construction on six external spatial benchmarks. Results show that image-generation models are competitive when spatial answers can be externalized directly in pixel space, while text-output VLMs retain a clear advantage in compositional spatial reasoning. These findings reveal complementary strengths of pixel-space expression and text-based reasoning and establish a metric-compatible testbed for studying spatial cognition in image-generation models.
