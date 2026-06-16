---
title: "How Should World Models Be Evaluated? A Decision-Making-Centric Position"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.15032"
authors: ["Yang Yu, Shiyuan Zhang, Yifei Sheng, Haoxiang Ren, Haoxin Lin"]
date: "Tue, 16 Jun 2026 00:00:00 -0400"
score: 72
guid: "oai:arXiv.org:2606.15032v1"
image: ""
generated: "2026-06-16T19:05:16+05:30"
---

arXiv:2606.15032v1 Announce Type: new Abstract: World models have rapidly become one of the central abstractions in modern AI. Yet the term now refers to several different objects: action-conditioned environment models, latent imagination models, future-video predictors, interactive neural simulators, latent predictive representations, and synthetic-data engines. Evaluation has broadened with the term. Recent papers measure video realism, perceptual similarity, instruction following, physical plausibility, policy ranking, executability, planning success, and downstream policy improvement. The result is not only metric diversity but also a recurring problem of claim/evidence mismatch: papers frequently make a stronger claim about what their model is useful for than their evaluation can actually establish. This paper surveys the recent literature and argues that the central question is use-dependent. When a model is presented as a world model for embodied decision-making, a more decisive issue is not whether it generates visually compelling videos, but whether it supports reliable counterfactual reasoning, policy evaluation, planning, and policy optimization under intervention, policy-induced distribution shift, and long-horizon rollout. We organize the literature using an L0--L7 ladder that ranges from visual plausibility to policy optimization utility. In our interpretation, L0--L3 are most naturally read as diagnostics of generated artifacts, L4 is often the first genuinely interventional test, and L5--L7 provide the most direct evidence of decision usefulness. Based on this diagnosis, we propose a decision-making-centric evaluation framework and a benchmark protocol that foreground counterfactual action fidelity, closed-loop rollout validity, reward/value prediction, policy-ranking agreement, optimization lift, model exploitability, and uncertainty calibration.
