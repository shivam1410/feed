---
title: "EvolvingAvatar: Interactive 3D Head Generation That Adapts as Conversations Unfold"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.35616"
authors: ["Junjie Chen", "Fei Wang", "Kun Li", "Yiqi Nie", "Xun Yang", "Yanbin Hao", "Linfeng Zhang", "Meng Wang"]
date: "2026-09-27T20:00:00.000Z"
score: 58
guid: "2609.35616"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.35616.png"
generated: "2026-09-29T19:09:35+05:30"
---

Interactive 3D head generation requires coordinated speaking and listening motion that responds to an evolving conversation. Existing generators use incoming observations as context but keep their parameters fixed, leaving conversational patterns unused as a learning signal. We introduce EvolvingAvatar, a causal generator that uses test-time training to adapt to user face video and dyadic audio during interaction. Its dyadic context prediction objective provides a self-supervised learning signal from audiovisual context without target motion labels at test time. Persistent fast weights accumulate these updates within each conversation to guide motion generation, while transient jaw adaptation responds to current audiovisual context. Predicted speech activity controls how persistent adaptation guides motion. We also introduce InterHead-Bench, a unified 455.95-hour benchmark built from single-view and dual-view conversation videos. Experiments show improved conversational motion statistics over strong baselines. On the hardest out-of-distribution split, generation improves as conversations unfold, reducing mismatch with recorded user-avatar expression statistics by up to 11.1% from the first interval.
