---
title: "Scene-Designer: Learning Design Intelligence for Agentic 3D Scene Generation"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2610.23121"
authors: ["Xuanyu Liu", "Hongyan Feng", "Miao Pan", "Sunlai Chen", "Lizhou Liang", "Bing Sun", "Wenqi Zhang", "Xuhong Zhang"]
date: "2026-10-15T20:00:00.000Z"
score: 48
guid: "2610.23121"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2610.23121.png"
generated: "2026-10-19T19:03:54+05:30"
---

Generating complete, coherent, and usable 3D indoor scenes from natural language requires strong design intelligence: the ability to design high-quality scenes and critique their quality. However, existing approaches either rely on general-purpose models lacking domain-specific design experience or learn from static scenes. In this work, we introduce Scene-Designer, an agentic framework that learns design intelligence through complementary design and critique experiences. We construct two datasets: Scene-OTA-35K, which provides Observation--Thought--Action supervision for learning scene design and efficient error correction, and Scene-OTC-15K, which provides Observation--Thought--Critic supervision for learning scene quality critique across physical validity, functional correctness, and layout coherence. Based on these experiences, we propose Scene-GRPO, a Critic-guided GRPO framework that improves design decisions and reduces unnecessary trial-and-error corrections. Extensive experiments demonstrate that Scene-Designer achieves superior performance in physical validity, functional correctness, and layout coherence, while the learned Scene-Critic significantly outperforms general-purpose models in scene critique. Moreover, test-time Critic guidance further improves scene generation, showing that the Critic can provide useful guidance beyond training. Additional analysis suggests a trend of mutual enhancement between scene design and critique abilities.
