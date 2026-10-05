---
title: "On-Policy Parameter Update Direction Underlies Generalization in LLM Post-Training"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.36659"
authors: ["Shufan Shen", "Zhongni Hou", "Junshu Sun", "Yufei Zhang", "Wei Lin", "Guojun Yin", "Qingming Huang", "Shuhui Wang"]
date: "2026-09-28T20:00:00.000Z"
score: 52
guid: "2609.36659"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.36659.png"
generated: "2026-10-05T19:10:08+05:30"
---

The strong generalization performance of on-policy post-training paradigms has motivated studies of their parameter update behaviors. However, these studies treat the observed behaviors only as byproducts in on-policy training, overlooking their potential to serve as optimization principles for improving the generalization of other paradigms such as supervised fine-tuning (SFT). To address this limitation, we investigate whether there exists a specific on-policy update behavior that can achieve such improvements. First, our analyses reveal that SFT updates parameters along consistent directions, while the on-policy paradigm continuously adjusts the direction during training. This difference inspires us to focus on the cumulative update direction of each parameter as a promising behavior. Then, we evaluate its effectiveness for improving generalization by proposing On-Policy direction-constrained Supervised Fine-Tuning (OPSFT), which constrains SFT updates to the direction identified by on-policy paradigms. The strong performance of OPSFT indicates that the generalization advantage of on-policy paradigms can be transferred to SFT through the parameter update direction. Once such a direction is identified, even SFT can generalize with its updates constrained to this direction. This finding offers two practical benefits by combining the strong generalization of on-policy paradigms with the advantages of SFT, including the high training efficiency and ability to leverage high-quality trajectories. For efficiency, we identify update directions that support strong generalization using a few on-policy training steps, and subsequently apply OPSFT to achieve high training efficiency. For leveraging high-quality trajectories, OPSFT can utilize these trajectories to continue improving a post-trained model along its update direction without disrupting the ability learned from on-policy training.
