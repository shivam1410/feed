---
title: "CBD: API-Only LLM Black-Box Unlearning through Controlled Behavioral Divergence"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.27683"
authors: ["Zhiqiang Xie, Yijing Lin, Zhipeng Gao, Dong In Kim"]
date: "Mon, 29 Jun 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2606.27683v1"
image: ""
generated: "2026-06-29T19:05:09+05:30"
---

arXiv:2606.27683v1 Announce Type: new Abstract: Edge devices increasingly invoke large language models (LLMs) through API services for context aware edge intelligence, while edge generated data may be collected to improve LLMs and may introduce sensitive, copyrighted, harmful, or outdated information into model behavior. Machine unlearning offers a practical way to remove the influence of undesired data without retraining LLMs. However, existing methods still face two gaps. The first is API only black box access, where target model parameters and internal logits are unavailable. The second is how to preserve retained utility when unlearning target data and retained data share highly similar prompt structures or semantic patterns. To address these challenges, we propose Controlled Behavioral Divergence (CBD), an API only black box unlearning framework. CBD uses two auxiliary models to create controlled behavioral divergence between retained inputs and unlearning target inputs, converts this divergence into an unlearning relevance score, and routes unlearning related prompts away from the target LLM. To improve discrimination accuracy under high similarity between target and retained data, CBD constructs a gradient statistics based discriminative basis by estimating empirical Fisher matrices and solving a regularized generalized eigenvalue problem, guiding the unlearning signal toward target specific information rather than shared prompt structures. Compared with eleven white box and gray box unlearning baselines, CBD achieves a better unlearning utility trade off and its performance varies little across settings. On ToFU forget10, CBD approaches the retrained reference on the forget set while raising model utility to 74.90, about 15% above the second best baseline. On WMDP, it lowers hazardous knowledge accuracy to 25.68, near random guessing, while preserving MMLU accuracy of 52.67. Code is at https://github.com/DGL-codes/CBD.
