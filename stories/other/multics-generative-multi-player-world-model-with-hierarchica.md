---
title: "Multics: Generative Multi-Player World Model with Hierarchical Communication"
category: "Other"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2610.17201"
authors: ["Kaiyi Huang", "Wangbo Yu", "Yukun Huang", "Jiwen Yu", "Kunhao Liu", "Donglin Yang", "Wenbo Hu", "Ying Shan", "Xihui Liu"]
date: "2026-10-11T20:00:00.000Z"
score: ""
guid: "2610.17201"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2610.17201.png"
generated: "2026-10-14T19:00:21+05:30"
---

Multi-player interactive world models aim to simulate shared environments from multiple players' perspectives, but achieving robust generation while scaling to more players remains challenging. Existing approaches that rely on fully-connected communication (e.g., Solaris) incur quadratic attention costs as the number of players grows, while centralized approaches (e.g., γ-World) suffer from interference between unrelated events in a shared global representation. To address these challenges, we present Multics, a multi-player video generation framework with hierarchical communication that structures information exchange across player, group, and global levels. This hierarchy introduces group tokens into self-attention as intermediate group-level representations that aggregate locally relevant player information. These tokens connect to global tokens for cross-group communication, while the hierarchical topology limits direct mixing between unrelated local events. Group-token parameters are shared across group slots, allowing the same communication module to accommodate varying numbers of players without introducing new group-specific parameters. We further propose budget-constrained dynamic grouping based on recent camera trajectories, which adaptively groups relevant players while limiting unnecessary communication. Experiments demonstrate that Multics achieves state-of-the-art performance in 4- and 6-player settings, with improved cross-player consistency, player-specific action and camera controllability, and interference robustness. Moreover, Multics generalizes from 4-player training to 6-, 8-, and 10-player inference without retraining, while reducing self-attention computation compared with fully-connected communication.
