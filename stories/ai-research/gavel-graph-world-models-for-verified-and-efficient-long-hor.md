---
title: "GAVEL: Graph World Models for Verified and Efficient Long-Horizon LLM Task Planning"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.19315"
authors: ["Ruiyang Wang", "Hao-Lun Hsu", "Swarajh Mehta", "Jiwoo Kim", "Zhihao Dou", "Miroslav Pajic"]
date: "2026-09-15T20:00:00.000Z"
score: 72
guid: "2609.19315"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.19315.png"
generated: "2026-09-21T19:05:57+05:30"
---

Large language models (LLMs) provide a flexible interface for long-horizon robot planning, but generated plans often fail to respect embodiment constraints, recover from planning errors, or reason effectively under partial observability. We present GAVEL, a framework for verifying and repairing long-horizon LLM planning built around an explicit graph world model. The graph represents relevant object-relations, action pre-conditions and effects, and probabilistic beliefs over unobserved object locations. This model can predict the consequences of LLM-generated actions before execution, detect violations, and repair those whose corrections follow directly from the world model. This method also reserves LLM replanning solely for errors requiring semantic reasoning. For multi-task instructions, GAVEL reasons over distributions of possible object locations to reorder remaining subtasks and minimize expected search cost. We evaluate GAVEL on BEHAVIOR-1K across 100 single long-horizon tasks and 500 multi-task instructions. With Qwen3-8B, GAVEL improves single-task success from 41.2% to 91.8% and multi-task success from 19.9% to 92.6%. Distributional belief reasoning also reduces travel distance by approximately 5.4% compared with a static variant. These improvements show that an explicit graph world model harness can substantially improve the reliability and efficiency of long-horizon embodied planning across compact and frontier hosted LLM capabilities.
