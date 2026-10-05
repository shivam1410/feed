---
title: "LexReward: A Taxonomy-Driven Reward Framework for Legal Language Models"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.39071"
authors: ["Yida Cai", "Xin Dai", "Bingxiang He", "Huiyuan Xie", "Yuxiao Ye", "Zhenghao Liu", "Yang Bai", "Zhiyuan Liu"]
date: "2026-09-29T20:00:00.000Z"
score: 52
guid: "2609.39071"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.39071.png"
generated: "2026-10-05T19:10:08+05:30"
---

Legal language models require reward signals that capture not only answer correctness but also the multidimensional quality of legal responses. Existing reward methods, however, often rely on coarse-grained holistic judgments, providing limited domain specificity and interpretability. We introduce LexReward, a taxonomy-driven framework for legal reward modeling. LexReward characterizes legal response quality along three complementary dimensions: Style, covering lexical and syntactic quality; Element, assessing legal subjects, facts, statutes, and decisions; and Chain, evaluating the order, completeness, correctness, and non-redundancy of legal reasoning. For each dimension, we develop rubrics that specify evaluation criteria and quality levels. The resulting rewards are used to construct pairwise preference data for Direct Preference Optimization (DPO) and reward-model training. Experiments show that the rubric-based rewards reliably distinguish legal responses of different quality and that DPO training on the preference data improves performance across all three dimensions. The learned reward models, LexRM, also support effective downstream optimization: each dimension-specific reward model improves policy performance in its corresponding dimension through reinforcement learning, without requiring reference answers at reward time. Dimension-wise analyses further support the effectiveness of the proposed taxonomy and reward construction.
