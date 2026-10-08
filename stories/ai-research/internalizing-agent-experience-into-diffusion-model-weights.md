---
title: "Internalizing Agent Experience into Diffusion Model Weights via On-Policy Context Distillation"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2610.07250"
authors: ["Wenxuan Wang", "Zekai Liu", "Weinan Zhang", "Yu Cheng", "Yang Yang"]
date: "2026-10-04T20:00:00.000Z"
score: 77
guid: "2610.07250"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2610.07250.png"
generated: "2026-10-08T19:08:02+05:30"
---

Wrapping an image generation model in an agentic harness can effectively boost Text-to-Image task performance: the harness can leverage memory, skills, workflow orchestration, result verification, and iterative refinement to continually construct and revise prompts, thereby eliciting better images. These gains, however, remain external to the diffusion model and are realized only while the full harness runs. We propose Diffusion On-Policy Context Distillation (D-OPCD), which treats the agent-improved prompt as privileged context and distills the knowledge encoded in the agent harness into the weights of the diffusion model, so that the model retains part of the harness's benefit when conditioned on the original query alone. Using a Text-to-Image agent equipped with our proposed Auto Skill Evolver (ASE), we show that D-OPCD can internalize harness capabilities into the generator's weights, raising the average direct-generation score from 60.52 to 65.09 across four benchmarks. With this knowledge absorbed into the weights, the harness can shed its saturated skills and resume evolving: a second ASE round on the updated generator improves on a skill-free harness by additional 1.83 points, pointing toward text-to-image systems in which harness and model keep improving each other through continual co-evolution.
