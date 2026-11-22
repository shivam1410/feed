---
title: "WAM-Policy: World Action Models with On-Policy Distillation for Quadrupedal Loco-Manipulation"
category: "Robotics & Engineering"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2611.24011"
authors: ["Junlin Long", "Xu Deng", "Yiran Wang", "Yue Yang", "Yang Zhao", "Zeyu Zhang"]
date: "2026-11-17T19:00:00.000Z"
score: 30
guid: "2611.24011"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2611.24011.png"
generated: "2026-11-22T19:48:55+05:30"
---

Arm-free quadrupeds can perform loco-manipulation, walking on three legs while manipulating with a front leg, yet no existing policy for it follows language instructions. World action models (WAMs) have emerged as effective language-conditioned manipulation policies, but are pretrained for robot arms and sample slowly. WAM-Policy turns one WAM into a quadrupedal loco-manipulation policy via two stages. The first, Cross-Morphology Policy Adaptation and Acceleration, adapts the arm-centric WAM to quadrupeds and distills the transferred policy into a student with one video and two action steps by on-policy self-distillation (OPSD). This student, however, is bounded by its teacher, which only imitates demonstrations. The second stage, Task-Specific Improvement and Merging, therefore tunes the teacher by reinforcement learning (RL) and merges the slow specialists into one few-step student by multi-teacher on-policy distillation (M-OPD). On QLM-Bench, ten simulated tasks with 1,000 demonstrations synthesized without teleoperation, the transferred policy reaches 77.0%, and the OPSD student keeps 76.7% while sampling 14 times faster. Task-specific RL and M-OPD lift it to 85.0%. We also deploy the OPSD student on a real Unitree Go2 Air. WAM-Policy thus achieves a stronger quadrupedal policy at a fraction of the inference cost.
