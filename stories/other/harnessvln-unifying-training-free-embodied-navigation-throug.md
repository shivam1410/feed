---
title: "HarnessVLN: Unifying Training-Free Embodied Navigation through an Agent Harness"
category: "Other"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.15195"
authors: ["Yang Chen", "Lirong Che", "Zhenyu Huang", "Wenbo Fu", "Chuang Wang", "Xu Cao", "Daqi Liu", "Yuzhe Yang", "Jian Su", "Lan-Zhe Guo"]
date: "2026-09-13T20:00:00.000Z"
score: ""
guid: "2609.15195"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.15195.png"
generated: "2026-09-17T19:00:24+05:30"
---

Embodied navigation requires agents to interpret visual observations, accumulate spatial knowledge, and execute actions to follow instructions or locate objects. Training-based methods face generalization challenges, while training-free methods exploit multimodal large language models (MLLMs) but often lack mechanisms to reconcile proposed actions with spatial evidence, task progress, and execution failures. We present HarnessVLN, a zero-shot, training-free framework whose Agent Harness coordinates perception, retrieval, grounding, navigation, recovery, and termination through a unified tool interface. The Harness validates planner proposals against spatial evidence, geometric feasibility, and subgoal consistency, incorporating structured tool feedback into subsequent decisions. Hierarchical event memory tracks task progress and execution history, while a persistent Spatiotemporal Graph maintains reusable spatial evidence and failure annotations for verification and recovery. A replaceable Navigation Executor converts validated targets into executable motions, allowing the same Harness protocol to support instruction-following and object-goal navigation. HarnessVLN achieves success rates of 60.8%, 53.9%, 76.0%, and 59.3% on R2R, RxR, HM3D-v2, and HM3D-OVON, respectively, surpassing prior training-free SOTA results. Humanoid deployment further demonstrates its applicability to both tasks in real-world environments. The project page is: https://harnessvln.netlify.app/.
