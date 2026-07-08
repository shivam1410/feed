---
title: "Unsupervised Anomaly Detection of Information Operations Users via Behavioral and Language Patterns"
category: "Science & Society"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.05855"
authors: ["Sishun Liu, Sajal Halder, Ke Deng, Yan Wang, Xiuzhen Zhang"]
date: "Wed, 08 Jul 2026 00:00:00 -0400"
score: 62
guid: "oai:arXiv.org:2607.05855v1"
image: ""
generated: "2026-07-08T19:04:42+05:30"
---

arXiv:2607.05855v1 Announce Type: new Abstract: Information Operations on social media networks have been identified as a significant threat to democracy and modern society, but they are challenging and expensive to detect by humans. Existing supervised IO detection methods fail to capture the dynamic nature of evolving IO user behavior, while existing unsupervised approaches rely on oversimplified assumptions of coordination among IO users that may not exist in practice. To overcome the limitations of existing methods, we formulate IO user detection as an anomaly detection problem and propose a novel unsupervised IO user detection approach called Temporal-bEhavior-laNguage Signals for information Operation Recognition (TENSOR), which leverages multimodal data, including temporal online user behavior, such as message posting activities, and the textual content of the messages. The motivation is that IO users are typically a very small fraction of all online users and have unique temporal behavioral and language patterns. Specifically, we train a Temporal Point Process (TPP) to capture abnormal temporal behavioral patterns of IO users because they are known to behave in a coordinated manner for IO campaigns. We further introduce a novel evidence function that converts LLM responses, which are generated from user post timelines, into quantitative scores to adjust the TPP outputs for better IO user detection. Experimental results show that TENSOR outperforms the baselines on five real-world IO datasets. Code is available at https://github.com/xiuzhenzhang/TENSOR.
