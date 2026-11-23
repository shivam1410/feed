---
title: "Motion-Aware Reward Modeling for Instruction-Guided Video Editing"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2611.22495"
authors: ["Li Li", "Xiangbo Gao", "Bo Ni", "Samyadeep Basu", "Viet Dac Lai", "Jing Shi", "Seunghyun Yoon", "Gang Wu", "Yu Wang", "Thien Huu Nguyen", "Tyler Derr", "Franck Dernoncourt", "Zhengzhong Tu", "Yue Zhao"]
date: "2026-11-16T19:00:00.000Z"
score: 40
guid: "2611.22495"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2611.22495.png"
generated: "2026-11-23T19:04:08+05:30"
---

Reward models for instruction-guided video editing can favor temporal consistency at the expense of motion. We study this failure, termed motion collapse, using controlled motion-suppression variants of real edits. On VE-Bench, the evaluated composite reward prefers a motion-suppressed candidate in 97% of cases. Learned video rewards and a VLM judge also struggle with mild suppression, while latent optimization and reward-guided fine-tuning exploit this weakness to increase reward as motion declines. A linear probe of our base reward backbone performs near chance on mild suppression, motivating an explicit inter-frame dynamics input. We propose a motion-aware reward model that combines an RGB frame-difference stream with preference training against motion-suppressed and fabricated-motion negatives. A distillation anchor preserves alignment with human quality judgments. On the VE-Bench motion ladder, our model reduces the rate of selecting motion-suppressed candidates to 0% while achieving a Spearman correlation of 0.57 with human quality ratings. It also detects unseen suppression variants and preserves motion during reward-guided fine-tuning on two editing pipelines. These results support explicitly modeling motion in rewards for video editing.
