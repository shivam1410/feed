---
title: "Xiaomi-Robotics-1: Scaling Vision-Language-Action Models with over 100K Hours of Real-World Trajectories"
category: "Robotics & Engineering"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.15330"
authors: ["Xiaomi Robotics Team", "Jun Guo", "Piaopiao Jin", "Jason Li", "Peiyan Li", "Yingyan Li", "Futeng Liu", "Wanli Peng", "Optimus Qin", "Yifei Su", "Nan Sun", "Qiao Sun", "Runze Suo", "Heyun Wang", "Yunhong Wang", "Rujie Wu", "Caoyu Xia", "Lina Zhang", "Jack Zhao", "Guoliang Chen", "Wenlong Chen", "Xinze He", "Bin Li", "Qing Li", "Zhuorong Li", "Heng Qu", "Wenxuan Song", "Diyun Xiang", "Yifan Xie", "Peiran Xu", "Hangjun Ye", "Wen Ye", "Han Zhao", "Quanyun Zhou"]
date: "2026-07-15T20:00:00.000Z"
score: 85
guid: "2607.15330"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.15330.png"
generated: "2026-07-20T19:05:49+05:30"
---

Xiaomi-Robotics-1 is a vision-language-action model trained on over 100,000 hours of real-world robot manipulation data collected using UMI devices. The approach uses a two-stage recipe: pre-training on diverse trajectories to build general action capabilities, and post-training to align with specific robot embodiments and human instructions. A key innovation is a scalable auto-labeling pipeline that annotates trajectory clips with natural language descriptions of state transitions. The model demonstrates strong scaling behavior—improving consistently as data and model size increase during pre-training, with improvements transferring to post-training performance. This matters because the model can perform diverse manipulation tasks in unseen environments out-of-the-box and efficiently adapt to novel tasks with minimal fine-tuning data.
