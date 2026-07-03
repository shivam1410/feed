---
title: "WorldDirector: Building Controllable World Simulators with Persistent Dynamic Memory"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.02517"
authors: ["Hanlin Wang", "Hao Ouyang", "Qiuyu Wang", "Wen Wang", "Qingyan Bai", "Ka Leong Cheng", "Yue Yu", "Yixuan Li", "Yihao Meng", "Zichen Liu", "Yanhong Zeng", "Yujun Shen", "Qifeng Chen"]
date: "2026-07-01T20:00:00.000Z"
score: 79
guid: "2607.02517"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.02517.png"
generated: "2026-07-03T19:05:12+05:30"
---

WorldDirector enables controllable video generation by maintaining persistent object identity across frames through architectural separation of motion planning and visual rendering. The system coordinates semantic motion planning (3D trajectories and camera movements) via large language models, decoupling this from the visual rendering process. This separation allows precise control over object trajectories and scene composition without losing visual consistency. By explicitly managing 3D geometric constraints through LLM-guided planning, the method maintains object persistence better than end-to-end approaches. The architecture enables generating videos where specified objects follow intended paths while the visual quality remains high.
