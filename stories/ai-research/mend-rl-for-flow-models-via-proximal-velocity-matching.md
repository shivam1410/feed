---
title: "MEND: RL For Flow Models via Proximal Velocity Matching"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2610.05954"
authors: ["Shreshth Saini", "Neil Birkbeck", "Yilin Wang", "Balu Adsumilli", "Alan C. Bovik"]
date: "2026-10-05T04:07:18.000Z"
score: 50
guid: "2610.05954"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2610.05954.png"
generated: "2026-10-07T19:11:01+05:30"
---

Reward post-training of flow models either reweights the model's own samples under a KL penalty or a frozen reference, often for thousands of updates, or backpropagates the reward and moves every sample without checking that the move is worth its size. We introduce MEND, a reinforcement learning method built on proximal velocity matching. MEND caps rewards within each prompt group, so samples that already score well receive no move. Below the cap, it proposes moves along the reward gradient and accepts one only when its capped reward gain exceeds a quadratic displacement price. The model then regresses onto the resulting velocity targets, with no KL term, frozen reference model, or advantage weights. In 100 updates, MEND outperforms Flow-GRPO (about 4k updates) on five of six evaluators at the same distance to base-model images. Under an equal-budget protocol, it surpasses ReFL and DiffusionNFT at every evaluated update across four training rewards, reaching PickScore 24.03 versus 23.92 and 23.43, respectively. A 300-update three-reward run also surpasses the five-reward DiffusionNFT model on all three rewards it trains on. MEND is general and easy to adopt: it applies to any flow backbone with a differentiable reward.
