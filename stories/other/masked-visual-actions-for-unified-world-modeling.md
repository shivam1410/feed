---
title: "Masked Visual Actions for Unified World Modeling"
category: "Other"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.19343"
authors: ["Hadi Alzayer", "Wenlong Huang", "Haonan Chen", "Christopher Luey", "Lvmin Zhang", "Maneesh Agrawala", "Gordon Wetzstein", "Li Fei-Fei", "Yilun Du", "Jiajun Wu", "Jia-Bin Huang"]
date: "2026-07-20T20:00:00.000Z"
score: ""
guid: "2607.19343"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.19343.png"
generated: "2026-07-23T04:03:36+05:30"
---

Video models absorb rich priors over how the visual world moves, interacts, and responds to contact, making them promising substrates for robotic world modeling. The central challenge is how to communicate action to such models in a form aligned with the visual space in which they learned these interaction priors, yet still grounded in physical manipulation. We introduce Masked Visual Actions, a pixel-space control interface that expresses action as a partially revealed trajectory of an arbitrary entity in a video. Revealing robot motion makes the model act as a forward dynamics model that predicts the scene's response to low-level robot actions, while revealing desired object motion makes the same model recover robot behavior consistent with that outcome. Finetuned with only 15 hours of masked examples from real videos and simulation, a single checkpoint achieves strong visual fidelity and controllability across diverse scenes and multiple embodiments. In downstream manipulation settings, the model produces imagined rollouts whose outcomes correlate with real-world execution for policy evaluation, improves decision making by ranking candidate futures in model-based planning, and supports inverse modeling by synthesizing robot motion from desired object motion.
