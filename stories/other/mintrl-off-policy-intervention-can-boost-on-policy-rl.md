---
title: "MInTRL: Off-policy Intervention can boost On-policy RL"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.12419"
authors: ["Mingyu Chen, Yefan Tao, Gerald Friedland, Xuezhou Zhang, Chris Kong"]
date: "Mon, 14 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.12419v1"
image: ""
generated: "2026-09-14T19:00:19+05:30"
---

arXiv:2609.12419v1 Announce Type: new Abstract: Reinforcement learning with verifiable rewards is typically performed on-policy, keeping training data close to the current policy but limiting learning to trajectories that the policy can discover itself. Off-policy methods such as supervised fine-tuning, on the other hand, can leverage external knowledge beyond the base model's capabilities, but may suffer from large distribution shift. The key challenge is thus to expand exploration without sacrificing learnability. In this work, we introduce Minimal Intervention Reinforcement Learning (MInTRL), which expands the exploration frontier through sparse, local interventions in otherwise on-policy rollouts. During generation, a judge-intervention policy periodically reviews the current policy's output, replaces erroneous suffixes with short corrections, and immediately returns control to the policy. During training, MInTRL adopts a sequence-level advantage-regression objective that eliminates the need for importance sampling. We show that sparse, local interventions can substantially improve coverage beyond finite-budget on-policy sampling while preserving the overall on-policy nature of the resulting trajectories. Across math and code benchmarks, MInTRL consistently outperforms standard on-policy and off-policy baselines. Ablations show that MInTRL remains effective with self-intervention and across different judge policies, while performance peaks at moderate intervention intensity, highlighting the importance of intervening minimally. These results establish minimal intervention as an effective paradigm for enhancing on-policy RL.
