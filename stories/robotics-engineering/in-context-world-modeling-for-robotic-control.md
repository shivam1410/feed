---
title: "In-Context World Modeling for Robotic Control"
category: "Robotics & Engineering"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2606.26025"
authors: ["Siyin Wang", "Junhao Shi", "Senyu Fei", "Zhaoyang Fu", "Li Ji", "Jingjing Gong", "Xipeng Qiu"]
date: "2026-06-24T20:00:00.000Z"
score: 70
guid: "2606.26025"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2606.26025.png"
generated: "2026-06-29T19:05:09+05:30"
---

ICWM (In-Context World Modeling) enables robot policies to quickly adapt to novel physical configurations without retraining or updating parameters. The system treats system identification—learning what springs, weights, friction, or geometry a specific robot has—as an in-context learning problem. Robots generate exploratory interactions with their environment, observe the results, and use those observations to infer system variables on-the-fly. This matters because real robots must operate in variable conditions: different payloads, wear, environmental changes, or even different robot instances. Rather than requiring expensive retraining for each scenario, in-context adaptation allows immediate transfer to new configurations, making robots more practical and flexible for deployment across diverse real-world situations.
