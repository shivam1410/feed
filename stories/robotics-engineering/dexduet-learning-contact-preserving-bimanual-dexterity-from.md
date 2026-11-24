---
title: "DexDuet: Learning Contact-Preserving Bimanual Dexterity from Human Demonstrations"
category: "Robotics & Engineering"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2611.30495"
authors: ["Haoran Zhang", "Haokai Ding", "Han Zhou", "Zuxing Lu", "Heng Zhang", "Xingxing Zuo"]
date: "2026-11-22T19:00:00.000Z"
score: 40
guid: "2611.30495"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2611.30495.png"
generated: "2026-11-24T19:04:06+05:30"
---

Human demonstrations provide a rich source of bimanual dexterous skills, yet transferring them to robot hands remains challenging. Existing methods primarily optimize object trajectory tracking, often overlooking how human hands interact with the object. Even with accurate tracking, robots may contact incorrect object parts or slide their fingers, resulting in unstable manipulation. We present DexDuet, a framework that learns contact-preserving bimanual dexterity from a single human demonstration. DexDuet employs two interaction rewards to preserve human hand-object configurations and contacts. To enable coordinated manipulation, we factorize the bimanual policy into two weight-sharing per-hand policies that condition on each other's states. We further propose assisted reference-state initialization (A-RSI), an adaptive curriculum that adjusts object assistance and training starts across demonstration segments to overcome difficult manipulation phases. Across four benchmarks spanning three simulators and five robot embodiments, DexDuet improves object-tracking ADD-AUC by 11 to 41 points over the corresponding baselines while consistently achieving better contact preservation. Notably, among 122 paired runs with comparable object-tracking accuracy, DexDuet preserves the human's contacts better in 117 cases. Code and videos are available at https://rcl-robotics.github.io/Dexduet.io/
