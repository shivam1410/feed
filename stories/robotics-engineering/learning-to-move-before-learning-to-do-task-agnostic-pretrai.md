---
title: "Learning to Move Before Learning to Do: Task-Agnostic pretraining for VLAs"
category: "Robotics & Engineering"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.02466"
authors: ["Junhao Shi", "Siyin Wang", "Xiaopeng Yu", "Li Ji", "Jingjing Gong", "Xipeng Qiu"]
date: "2026-07-01T20:00:00.000Z"
score: 81
guid: "2607.02466"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.02466.png"
generated: "2026-07-03T19:05:12+05:30"
---

Task-agnostic pretraining framework trains robotic models using self-supervised inverse dynamics on unlabeled data, followed by lightweight language grounding. This approach enables robots to learn general movement capabilities before task-specific training, reducing dependence on expert demonstrations. By first learning predictive models of how actions affect the world without labeled data, the system builds a foundation of physical understanding. The language grounding stage then efficiently connects this movement knowledge to task instructions with minimal expert input. This method achieves superior performance compared to approaches that require extensive labeled demonstrations from the start, making robot learning more practical and scalable.
