---
title: "PanoVLN: Towards Effective Panoramic Vision-and-Language Navigation"
category: "Robotics & Engineering"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.34759"
authors: ["Zhen Wang", "Changpeng Wang", "Zhe Liu", "Zhangyang Qi", "Yuxiang Lu", "Zimo Zeng", "Donglian Qi", "Xi Chen"]
date: "2026-09-27T20:00:00.000Z"
score: 73
guid: "2609.34759"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.34759.png"
generated: "2026-09-30T19:08:55+05:30"
---

Recent vision-language models (VLMs) have advanced vision-and-language navigation (VLN), enabling models to predict navigation actions from visual observations and language instructions. In this work, we explore VLN with panoramic observations and introduce PanoVLN. The motivation is straightforward: more complete visual context should enable better-informed navigation decisions. For example, a panorama can reveal a passage outside a perspective camera's field of view, allowing the model to identify the intended route without additional exploration. However, we find that simply replacing perspective images with panoramas yields only limited gains. Our diagnosis suggests that fully exploiting wider visibility requires modifications to action prediction, training supervision, and visual representation. First, wider visibility supports longer-horizon action planning. We make the model predict longer action sequences, enabling larger turns and subsequent movement from a single panorama. Specifically, we introduce a confidence-guided execution (CGE) strategy that dynamically determines how many predicted actions to execute before replanning. Second, wider visibility also brings more complex route choices. We therefore construct training routes with frequent branching points and clear instructions to provide targeted supervision for route selection. Third, panoramic navigation requires understanding spatial relationships across viewing directions, beyond recognizing individual landmarks. We combine semantic and geometric features from RGB panoramas to capture both scene content and spatial layout without adding visual tokens. With a 4B backbone and RGB-only input, PanoVLN surpasses the previous SOTA by 11.9% and 8.7% in success rate on R2R-CE and RxR-CE Val-Unseen. Real-world experiments on a quadruped further demonstrate faster navigation with fewer pauses than prior VLN methods.
