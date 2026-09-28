---
title: "Morphometric Imitation: From Morphology and Contact Aware Hand Retargeting to Sim-to-Real Visuomotor Policy"
category: "Robotics & Engineering"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.28660"
authors: ["Tara Sadjadpour", "Siming He", "C. K. Wolfe", "Haozhi Qi", "Lea Wilken", "S. Shankar Sastry", "Claire Tomlin", "Jitendra Malik"]
date: "2026-09-22T20:00:00.000Z"
score: 67
guid: "2609.28660"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.28660.png"
generated: "2026-09-28T20:49:59+05:30"
---

Human hand-object interactions (HOIs) provide a rich source of demonstrations for dexterous manipulation, but learning directly from them presents challenges in bridging morphology gaps, ensuring dynamical feasibility, and sim-to-real deployment. We present Morphometric Imitation, a three-stage framework that transforms reconstructed HOIs into zero-shot sim-to-real visuomotor policies. First, morphometric optimization (MMO) kinematically retargets human motion across hand morphologies while preserving demonstrated contacts. Second, residual reinforcement learning (RL) refines the kinematic reference using object pose and contact information from the human motion to produce dynamically feasible robot demonstrations. Third, these demonstrations are distilled into visuomotor policies. Across three robot hands and ten HOIs, MMO improves contact F1 over the strongest of five baselines by at least 8 points for every hand, while also improving the success rate of downstream dynamic retargeting by as much as 35 points. Ablations on the residual RL show complementary benefits from using object pose and contact information. Finally, the visuomotor policies achieve 89.3% zero-shot success in 300 real-world trials on 30 objects. Project page: https://morphometricimitation.github.io{this https URL}
