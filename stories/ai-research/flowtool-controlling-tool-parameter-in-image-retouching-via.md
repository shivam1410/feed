---
title: "FlowTool: Controlling Tool Parameter in Image Retouching via Flow Matching"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.35673"
authors: ["Thanh-Long V. Le", "Steven Walton", "Seunghyun Yoon", "Branislav Kveton", "Trung Bui", "Eunho Yang", "Viet Lai"]
date: "2026-09-27T20:00:00.000Z"
score: 55
guid: "2609.35673"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.35673.png"
generated: "2026-09-29T19:09:35+05:30"
---

Tool-based image editing (image retouching) is commonly formulated with autoregressive multimodal large language models (MLLMs) that sequentially generate reasoning, tool selections, and parameter values. In this work, we present a novel approach to tool-based image editing by framing the task as a flow matching problem. We introduce FlowTool, a framework that directly models the distribution of high-quality tool parameters conditioned on the input image and user instruction using conditional rectified flow. FlowTool combines a vision-language model backbone for multimodal understanding with a Diffusion Transformer parameter generator that transforms Gaussian noise into an editing plan. We train FlowTool with a two-stage supervised flow-matching curriculum, followed by reward-based post-training. Across MMArt-Bench, FlowTool-Eval, ArtEdit-Bench, and MIT-Adobe5K, FlowTool achieves significantly stronger reference-based performance than specialized MLLM editing agents and proprietary MLLMs, while remaining competitive with proprietary models under reference-free evaluation. Moreover, FlowTool significantly improves inference efficiency, reducing latency by at least 50times while requiring nearly 2times less memory than the compared baselines. These results demonstrate that tool-based image editing can be effectively modeled as conditional generation over structured continuous editing parameters, without autoregressive reasoning.
