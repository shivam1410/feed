---
title: "Outcome-Routed Distillation and Reinforcement Learning for Diffusion Language Models"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.19271"
authors: ["Wentao Lu, Tianyu Zhu, Jesse Clark"]
date: "Thu, 15 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.19271v1"
image: ""
generated: "2026-10-15T19:00:19+05:30"
---

On-policy distillation provides dense supervision on the student's own samples, but its targets still come from the teacher. Verifier reinforcement learning (RL) instead uses an outcome signal, but it provides no direct constraint on capabilities outside the verifier. Combining the two is difficult for diffusion language models (dLLMs), because bidirectional denoising makes the policy likelihoods required by ratio-based RL unreliable. We develop a likelihood-free pipeline for a mixture-of-experts dLLM. Each rollout group is routed by verifier outcome. Mixed groups use ratio-free, group-centred REINFORCE. If every student rollout fails but a teacher succeeds, the model receives dense KL supervision on the student's denoising canvases. All other groups are skipped. A KL term anchored to the distilled checkpoint limits changes outside the verifier reward. The tool-calling teacher succeeds on only 18.6% of the training prompts. At 24 denoising steps, distillation exceeds the teacher by 6.77 percentage points, and routing improves the distilled checkpoint by a further 18.31 points. Routing lowers reasoning-trace accuracy by 0.71 points but raises direct-answer accuracy on the same items by 13.21 points. The anchored arm restores trace accuracy. Its tool-calling score differs by -0.16 points, with a confidence interval that includes zero, although this comparison also removes a small fallback distillation route. A domain-conditional recipe retains a 16.37-point tool-calling gain; a second seed gives 18.23 points and reproduces both preservation results, but the math result is seed-dependent. We pre-registered every arm and evaluated each comparison on paired items in a single sweep on one machine.
