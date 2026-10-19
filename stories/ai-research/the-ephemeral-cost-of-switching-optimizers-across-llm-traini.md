---
title: "The Ephemeral Cost of Switching Optimizers Across LLM Training Stages"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.22650"
authors: ["Xinyu Zhao, Davis Wertheimer, Ashutosh Sharma, Rameswar Panda, Paul Pu Liang"]
date: "Mon, 19 Oct 2026 00:00:00 -0400"
score: 40
guid: "oai:arXiv.org:2610.22650v1"
image: ""
generated: "2026-10-19T19:03:54+05:30"
---

Recent work suggests that switching optimizers between pretraining and subsequent training stages incurs a performance cost, but systematic investigation of this phenomenon is lacking. We study the mismatch between AdamW and Muon optimizers by pretraining 1.2B Llama-3 models from scratch while varying the proportion of updates taken with each optimizer, and similarly interpolating between the two optimizers during continued pretraining and supervised fine-tuning (SFT). Surprisingly, we find little evidence of a meaningful optimizer mismatch penalty: final performance is largely explained by the independent effects of the pretraining and post-training optimizers, with downstream performance generally improving as the proportion of Muon updates during SFT increases. Although matching the pretraining optimizer can reduce forgetting during SFT, this does not translate into improved final benchmark performance. We further evaluate AdamW and Muon for task-general SFT of open-weight models, across the Llama and Qwen families up to 14B parameters, where Muon remains competitive with AdamW, despite these models having been pretrained with AdamW. Together, our results suggest that the choice of optimizer for post-training can be made largely independently of the optimizer used during pretraining.
