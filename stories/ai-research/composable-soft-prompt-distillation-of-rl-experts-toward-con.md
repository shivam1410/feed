---
title: "Composable Soft-Prompt Distillation of RL Experts: Toward Continual Post-Training"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2611.27376"
authors: ["Zhen Zhang", "Changyi Yang", "Xuehai He", "Chengzhi Liu", "Yutong Yin", "Ziyue Liu", "Zhuoran Yin", "Yangmin Li", "Zhihan Liu", "Jisen Li", "Mingyu Jin", "Chuhan Li", "Zhaotian Weng", "Ruoyu He", "Wenyao Gao", "Jiaxin Deng", "Chenwei Wu", "Hui Shen", "Wenhao Chai", "Chenyang Zhao", "Zhuofan Ying", "Kieran Liu", "Andrew Chen", "Pony Ma", "Zhaoran Wang", "Alkesh Patel", "Zhe Gan", "Xin Eric Wang"]
date: "2026-11-19T19:00:00.000Z"
score: 40
guid: "2611.27376"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2611.27376.png"
generated: "2026-11-24T19:04:06+05:30"
---

RL post-training typically produces domain experts that must then be consolidated into one model, and as new experts keep arriving, this consolidation becomes a continual process. Weight merging and multi-teacher on-policy distillation (MOPD) must re-consolidate the whole model whenever an expert is added, and can erode capabilities outside the target domains. We propose Composable Soft-Prompt Distillation (CSPD), which keeps the pre-RL model frozen, distills each RL expert independently into a soft prompt, and composes experts by concatenating their prompts without joint training. A single soft prompt suffices to distill an RL expert, recovering at least 90% of the teacher's gain in 22 of 23 math, code, and agent settings. Independently trained prompts compose well. In a multi-expert setting, the average rises with every expert added, and the full composition matches MOPD (67.83 vs. 67.79). The composition generalizes best across six held-out benchmarks. Input-space adaptation adds little serving overhead, keeping throughput within 1.5% of the unadapted backbone and reaching 2.40x that of rank-4 LoRA. These results point toward continual post-training on a fixed backbone.
