---
title: "DiVeR: Decision-Critical Verifier Learning for VLA Test-Time Scaling"
category: "Robotics & Engineering"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2610.04933"
authors: ["Seongheon Park", "Heecheol Kim", "Shulin Tian", "Lilika Makabe", "Namiko Saito", "Katsushi Ikeuchi", "Sharon Li", "Yasuyuki Matsushita"]
date: "2026-10-03T20:00:00.000Z"
score: 70
guid: "2610.04933"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2610.04933.png"
generated: "2026-10-07T19:11:01+05:30"
---

Scaling robot data and model capacity has improved Vision-Language-Action (VLA) policies, but further progress is constrained by the high cost of robotic data. Verifier-guided test-time scaling offers an efficient alternative by sampling multiple action candidates and selecting the one most likely to lead to task success at inference time. Existing classification-based verifiers learn from trajectory-level outcomes but treat all visited states equally, even though their value for candidate discrimination can vary across a trajectory. At many states, plausible actions are similar and provide limited discrimination signal, while only a sparse set of decision-critical states admits meaningfully different actions that can substantially affect downstream outcomes. To address this, we propose DiVeR, which estimates decision criticality from the dispersion of sampled action representations. DiVeR then uses this signal to reweight verifier learning toward states where action selection is most consequential, without requiring step-level annotations or additional environment interaction. Across LIBERO, RoboCasa, and real-world experiments on a Franka Research 3 robot, DiVeR consistently improves task success through more effective verifier-guided action selection, while adding negligible verifier inference overhead.
