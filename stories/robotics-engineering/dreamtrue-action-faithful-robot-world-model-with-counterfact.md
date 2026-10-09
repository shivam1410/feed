---
title: "DreamTrue: Action-Faithful Robot World Model with Counterfactual Post-Training"
category: "Robotics & Engineering"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2610.12468"
authors: ["Junyan Li", "Ruizhi Li", "Yu Liu", "Xiangshuo Liu", "Mingchao Sun", "Hongyu Pan", "Mu Xu", "Lue Fan", "Zhaoxiang Zhang"]
date: "2026-10-07T20:00:00.000Z"
score: 72
guid: "2610.12468"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2610.12468.png"
generated: "2026-10-10T00:52:03+05:30"
---

We present DreamTrue, a multi-view, cross-embodiment robot world model for action-faithful and physically plausible video prediction. Training such a model on existing robot datasets faces two obstacles: imprecise calibration can impair action following, while limited coverage of unsuccessful interactions can bias predictions toward successful outcomes. To improve action following across embodiments, we render action trajectories into image-space conditions and introduce offline geometric calibration to align these conditions with the target videos. To broaden interaction coverage, we introduce counterfactual post-training, modifying recorded action trajectories and generating future videos under a wider range of actions and contact configurations. To provide feedback on these predictions without paired ground-truth futures, we construct a human-annotated video dataset covering robot, object, and interaction defects and use it to train an embodied video reward model. Its scores guide reinforcement-learning post-training toward more physically plausible interaction outcomes. On AgiBot, DreamTrue attains state-of-the-art action following, while reducing the human-assessed interaction defect rate from from 48.12% to 6.25%. Notably, our model ranks first in the world model track of the AgiBot World Challenge 2026. The project page can be found at https://brave-eai.github.io/DreamTrue.
