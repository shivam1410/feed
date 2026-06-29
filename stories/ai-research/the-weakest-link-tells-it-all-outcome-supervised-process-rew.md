---
title: "The Weakest Link Tells It All: Outcome-Supervised Process Reward Modeling via Learnable Credit Assignment"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.27739"
authors: ["Tianyu Jia, Yue Fang, Hongxin Ding, Rihong Qiu, Zhibang Yang, Zhijing Wu, Xu Chu, Junfeng Zhao, Yasha Wang"]
date: "Mon, 29 Jun 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2606.27739v1"
image: ""
generated: "2026-06-29T19:05:09+05:30"
---

arXiv:2606.27739v1 Announce Type: new Abstract: Process reward models (PRMs) enhance the reasoning capabilities of large language models (LLMs) by providing fine-grained feedback, yet training PRMs typically requires expensive stepwise annotations. Outcome-supervised PRMs offer a scalable alternative by learning from final-answer correctness alone, but this introduces a fundamental *credit assignment* challenge, i.e., attributing outcomes to responsible reasoning steps. Existing approaches rely on either uniform or causal assignment, both of which fail to anchor credit in step correctness and thus hinder process error identification. In this work, we propose Outcome-Supervised Process Reward Modeling via **L**earnable **C**redit **A**ssignment (**LCA**), an outcome-supervised PRM framework that jointly learns credit assignment and reward modeling under the principle of *Weakest Link Assignment: a reasoning chain is as strong as its weakest link*. To address mutual dependence between credit assignment and reward modeling, we formalize outcome-supervised PRM as a Multiple Instance Learning (MIL) problem and introduce Softmax-Weighted-Sum (SWS) pooling, an MIL pooling technique tailored for strong dependence and redundancy among reasoning states. We prove Bayes consistency of our algorithm under mild assumptions. Extensive experiments demonstrate that **LCA** consistently outperforms state-of-the-art outcome-supervised PRMs across multiple tasks and backbones. Code is available at https://anonymous.4open.science/r/LCA.
