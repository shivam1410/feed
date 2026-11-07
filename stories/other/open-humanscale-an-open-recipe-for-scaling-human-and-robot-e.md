---
title: "Open-HumanScale: An Open Recipe for Scaling Human and Robot Experience for Embodied Foundation Models"
category: "Other"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2611.06817"
authors: ["Juncheng Ma", "Jiaxin Li", "Jiankai Tu", "Bo Liang", "Guodong Lv", "Yufan Deng", "Junzhe Tang", "Liangzhu Yang", "Chen Bian", "Zicong Cao", "Baohao Zhu", "Jianxin Bi", "Tengfei Yan", "Yinyuan Zhang", "Kewei Zhang", "Xinglong Chen", "Kaiqi Chen", "Duomin Wang", "Xiaotian Tang", "Liang Tan", "Li Li", "Yuan Xu", "Haosen Yang", "Yuqi Wang", "Jingfei Xia", "Songyan Huang", "Zhiyang Dou", "Zhen Dong", "Enze Xie", "Tat-Seng Chua", "Daquan Zhou"]
date: "2026-11-03T19:00:00.000Z"
score: ""
guid: "2611.06817"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2611.06817.png"
generated: "2026-11-07T20:33:06+05:30"
---

Egocentric human video offers a scalable source of manipulation priors for robot learning, yet translating raw data scale into generalizable robot policies demands rigorous data curation and training recipes. We introduce Open-HumanScale, the first fully open recipe for scaling egocentric pretraining to 50,000 hours, anchored by Open-HumanScale-50K---a curated egocentric video corpus densely annotated with hand motion and natural language. Leveraging this corpus, we systematically investigate pure human pretraining via closed-loop simulation evaluations and uncover an empirical log-linear scaling law linking pretraining data hours to downstream robot success rates. Grounded in these findings, we develop HumanWAM-Vanilla, a world--action model pretrained exclusively on 50k hours of egocentric human video. Upon robot post-training, HumanWAM-Vanilla reaches 92.08% success on RoboTwin 2.0 Clean2Clean and 68.88% on Clean2Random, alongside a 14.17% mean success rate and a 19.00 mean progress score on RoboDojo. To push the capability frontier further, we explore joint human--robot pretraining with HumanWAM-Goal, a visual-goal-conditioned world--action model. Hybrid data scaling unlocks broad zero-shot generalization across both simulation and physical benchmarks, propelling post-trained RoboTwin 2.0 performance to new state-of-the-art levels: 92.70% on Clean2Clean and a substantial leap to 84.60% on Clean2Random. On physical robots, HumanWAM-Goal further exhibits emergent embodied in-context learning, dynamically adapting its manipulation behavior to unseen visual goals without parameter updates. To support reproducible scaling research in embodied AI, we open-source the Open-HumanScale-50K corpus, data curation and pretraining pipelines, alongside the pretrained and post-trained HumanWAM checkpoints, inference code, and simulation evaluation suites.
