---
title: "Why Do Video Diffusion Models Violate Physics? Unveiling the Flaws in Attention Mechanisms"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.23658"
authors: ["Yueyan Li", "Haibo Wang", "Caixia Yuan", "Xiaojie Wang"]
date: "2026-09-19T20:00:00.000Z"
score: 72
guid: "2609.23658"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.23658.png"
generated: "2026-09-22T19:08:22+05:30"
---

Despite impressive visual quality, state-of-the-art video diffusion models often generate content that violates real-world physical laws. While existing solutions rely on external priors or specialized data, we investigate the root cause by exploring the internal mechanisms of these models. Specifically, we present the first interpretability study on the ''motion planning'' process of text-to-video diffusion models, revealing how motion trajectories form during early denoising stages. Building upon the ''first shape, then details'' finding, we combine cross-attention trajectory patterns with causal head contributions to identify a specific subset of attention heads driving motion planning. Further, our self-attention analysis shows that Rotary Position Embedding (RoPE) induces excessive spatial attention decay. This causes early candidate regions to prematurely lock into physically implausible positions, suppressing reasonable trajectories in adjacent frames and triggering generation failure modes. To address this fundamental flaw, we propose a lightweight architectural modification that scales the frequency of RoPE across different denoising steps. This strategy reduces excessive attention decay, helping the model explore better candidate regions to establish coherent physical motion. Finally, training-free and training-based experiments confirm the effectiveness of our approach in enhancing the physical commonsense of generated videos.
