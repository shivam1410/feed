---
title: "VLA-Precision: Asymmetric Co-Bootstrapping for Efficient Real-World Online RL of Vision-Language-Action Models"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.04355"
authors: ["Chenyu Su", "Zhaolong Shen", "Yuan Qian", "Chen Qian", "Rui Zhang", "Feng Yan", "Weixing Chen", "Fei Zhang", "Jiamin Wang", "Shuang Cong", "Weiwei Shang"]
date: "2026-09-17T20:00:00.000Z"
score: 78
guid: "2609.04355"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.04355.png"
generated: "2026-09-28T20:49:59+05:30"
---

Pretrained vision-language-action (VLA) models enable broad manipulation but remain unreliable in tasks demanding precision and repeatability. Applying real-world online reinforcement learning (RL) to VLA post-training enables autonomous trial-and-error improvement beyond demonstrations alone, but exposes two bottlenecks: 1) unreliable value signals can induce policy drift; 2) large-VLA overhead constrains throughput and sample efficiency. To address these challenges, we present VLA-Precision, an efficient real-world online RL framework featuring the Asymmetric Co-Bootstrapping (ACoB) algorithm and the ACoB-Stream architecture. Specifically, ACoB establishes asymmetric co-bootstrapping across timescales: early intervention-guided behavioral learning rapidly improves policy performance while enhancing online experience quality. As autonomous experience accumulates, global return propagation and local preference ranking progressively calibrate value estimates, yielding relative action advantages for reference-regularized policy improvement while suppressing drift. To enable ACoB on large VLAs, we develop ACoB-Stream, a closed-loop experience--policy architecture that establishes invariant-state decoupling and on-demand streaming as design principles, delivering up to 10.9times improvements in throughput and computational efficiency. Extensive evaluations on nine high-precision chemistry tasks across four categories and four robot embodiments show that VLA-Precision achieves 98.3\% mean success rate in 45.8 min/task, with 27.6 s episodes running at 1.2times and 1.8times the speeds of VLA and RL baselines. Resources are available at https://vla-precision.github.io.
