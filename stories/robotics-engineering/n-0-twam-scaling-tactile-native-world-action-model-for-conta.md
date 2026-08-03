---
title: "N_0-TWAM: Scaling Tactile-Native World-Action Model for Contact-Rich Manipulation"
category: "Robotics & Engineering"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.23783"
authors: ["NeoteAI Team", "Fudan TEAI Team"]
date: "2026-07-25T20:00:00.000Z"
score: 75
guid: "2607.23783"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.23783.png"
generated: "2026-08-03T19:06:42+05:30"
---

We present N_0-TWAM, a tactile-native world-action model for contact-rich manipulation that predicts both future vision and future contact. To our knowledge, it is the first tactile world-action model trained at large scale, and it shows strong capability on contact-rich tasks. We pre-train N_0-TWAM at large scale with visuo-tactile joint training over tactile-rich demonstrations spanning six embodiments and 450 tasks. We use NeoForce, a unified force-based tactile representation, to form a physically grounded contact signal that conditions action generation. To improve long-horizon and multi-stage manipulation, we introduce tactile contact events for task staging and advance through them during execution. For real-time efficiency, we adopt an asymmetric Mixture-of-Transformers architecture that pairs a full-width expert for video prediction with slim experts for downstream action and tactile prediction. Evaluations on both real and simulated benchmarks justify the capabilities of N_0-TWAM across a range of contact-rich tasks, and demonstrate the benefit of data scaling for precise tactile and action prediction. In summary, N_0-TWAM endows a world-action model with predictive capabilities to foresee vision, touch and action, building a solid foundation for fine-grained manipulation on open contact-rich tasks. The codebase and model checkpoints will be made publicly available to foster further research and development in tactile-enabled robotic manipulation.
