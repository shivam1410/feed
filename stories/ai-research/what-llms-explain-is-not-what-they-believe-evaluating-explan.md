---
title: "What LLMs explain is not what they believe: Evaluating explanation sufficiency under models' own input beliefs"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.28615"
authors: ["Nhi Nguyen, Shauli Ravfogel, Rajesh Ranganath"]
date: "Tue, 30 Jun 2026 00:00:00 -0400"
score: 66
guid: "oai:arXiv.org:2606.28615v1"
image: ""
generated: "2026-06-30T19:06:59+05:30"
---

arXiv:2606.28615v1 Announce Type: new Abstract: Large language models (LLMs) are increasingly deployed in high-stakes domains, where free-text explanations such as chain-of-thought and post-hoc rationales are used to justify model outputs. Yet it remains unclear whether these explanations are sufficient, i.e., if they contain enough information to explain the model's output-generating process. We generalize classical sufficiency from feature attributions to arbitrary explanations and prove that explanation sufficiency can change depending on the input distribution, which must be explicitly defined for LLM explanations. We propose using the LLM itself to generate alternative inputs conditioned on an explanation, capturing its beliefs about possible inputs. We formalize self-consistent sufficiency as a goal for free-text explanations and introduce an information-theoretic metric, SCSuff, that enables evaluation of free-text explanations without relying on predefined biases or shortcuts. Our experiments show that SCSuff agrees with targeted perturbation tests where applicable and demonstrate that explanation sufficiency can vary with the input distribution. We find LLM explanations are generally insufficient and weakly correlated with model size, accuracy, or output entropy. Analysis of final-token hidden states shows that top and bottom SCSuff scores can be predicted from internal representations, suggesting that SCSuff can guide detection and improvement of sufficient LLM explanations. The code for this paper is available at https://github.com/rajesh-lab/self-consistent-sufficiency .
