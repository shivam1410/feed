---
title: "Personal-Agent Mediated Recommendation with Cross-Platform User History"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2610.07588"
authors: ["Yu Xia", "Jiangfan Zhang", "Jun Xiao", "Julian McAuley", "Xiangjun Fan"]
date: "2026-10-05T20:00:00.000Z"
score: 70
guid: "2610.07588"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2610.07588.png"
generated: "2026-10-07T19:11:01+05:30"
---

Modern recommendation is shifting from platform-centric personalization toward user-governed personalization, where a personal LLM agent can act on the user's behalf across services. We formalize this emerging paradigm as Personal-Agent Mediated Recommendation: a platform recommender ranks a candidate set using platform-local information, and a personal agent uses user-authorized cross-platform history to mediate the resulting ranking and produce the final top-K slate. Such mediation is nontrivial: the platform ranking can encode strong population evidence that the personal agent cannot observe, so effective mediation must therefore balance beneficial rescues against harmful overrides. To study this trade-off, we introduce MediateRec, a benchmark that includes scalable proxy cross-platform environments and a real cross-platform test under a controlled platform-agent information boundary. To train the agent to use cross-platform history effectively, we further propose Personal Attribution Mediation Optimization (PAMO), which counterfactually masks that history to estimate personal mediation support and reallocates rank-aware advantage mass under a platform-relative value floor. We theoretically prove that PAMO preserves cutoff-level advantage mass and is locally optimal among first-order reallocations that preserve this mass without lowering average platform-relative value. Experiments on MediateRec show that personal-agent mediation enables meaningful platform corrections, yet even strong proprietary LLMs introduce non-negligible harmful overrides. PAMO consistently improves over matched outcome-only RL across seen and unseen target platforms and on the real cross-platform test, while achieving a better rescue-harm balance.
