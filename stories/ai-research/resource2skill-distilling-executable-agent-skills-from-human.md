---
title: "RESOURCE2SKILL: Distilling Executable Agent Skills from Human-Created Multimodal Resources"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2606.29538"
authors: ["Yijia Fan", "Zonglin Di", "Zimo Wen", "Yifan Yang", "Mingxi Cheng", "Qi Dai", "Bei Liu", "Kai Qiu", "Yue Dong", "Ji Li", "Chong Luo"]
date: "2026-07-15T20:00:00.000Z"
score: 64
guid: "2606.29538"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2606.29538.png"
generated: "2026-07-21T19:05:01+05:30"
---

Skills are a useful abstraction for software agents, turning human and agent experience into reusable procedural knowledge. Yet existing skill libraries are mostly hand-written, text-centric, or derived from agent traces, leaving tutorial videos and other multimodal human resources largely underused. We present RESOURCE2SKILL, a framework that distills multimodal resources, including tutorial videos, repositories, articles, and reference artifacts, into executable skills for software agents. RESOURCE2SKILL organizes these skills as a hierarchical multimodal Skill Wiki, where each entry combines structured text, code, visual examples, metadata, and provenance. This design preserves complementary signals from different resources: videos capture temporal operations and visual effects, code captures executable tool patterns, and articles or artifacts provide conceptual and stylistic grounding. At inference time, agents retrieve and compose relevant skills from the wiki; when coverage is insufficient, the same construction operator can acquire new skills online. Across seven practical authoring domains, RESOURCE2SKILL improves average overall score by +11.9 percentage points over no-skill agents and outperforms strong harness baselines in 26 of 28 main-aggregate model-domain cells. Ablations confirm the value of multimodal skill format, hierarchical organization, source diversity, selection strategy, and online acquisition.
