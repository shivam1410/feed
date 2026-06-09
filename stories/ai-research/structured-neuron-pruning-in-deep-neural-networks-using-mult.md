---
title: "Structured Neuron Pruning in Deep Neural Networks Using Multi-Armed Bandits"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.07615"
authors: ["Salem Ameen, Sunil Vadera"]
date: "Tue, 09 Jun 2026 00:00:00 -0400"
score: 59
guid: "oai:arXiv.org:2606.07615v1"
image: ""
generated: "2026-06-09T19:05:06+05:30"
---

arXiv:2606.07615v1 Announce Type: new Abstract: Deep neural networks often contain redundant hidden units. Removing individual weights can reduce parameter count, but unstructured sparsity is not always easy to exploit in standard dense implementations. This paper develops a structured pruning framework in which complete neurons are removed using multi-armed bandit (MAB) algorithms. Each candidate neuron is treated as an arm; pulling an arm temporarily masks that neuron, measures the change in loss on a sampled mini-batch, restores the neuron, and updates an estimate of its safe-removal reward. The framework supports stochastic policies, including Epsilon-Greedy, Softmax, UCB1 and Thompson Sampling, and multiplicative-weight policies, including Hedge-style multiplicative weights and EXP3. We evaluate the method on tabular classification, tabular regression and deep neural-network benchmarks covering image, text and reasoning tasks. Statistical comparisons using the Friedman test followed by the Nemenyi post-hoc test show significant differences between methods. On tabular classification tasks, UCB1 obtains the highest mean rank among pruning policies and improves on the unpruned neural network. On regression tasks, UCB1 obtains the highest mean rank and is statistically competitive with, or superior to, several standard regression models according to R^2. On deep-learning tasks, UCB1 and Thompson Sampling obtain the strongest ranks, and several MAB policies significantly outperform the unpruned model, magnitude-based neuron pruning and greedy activation-variation pruning. The results show that MAB-based neuron pruning is an effective and computationally practical approach for structured model reduction.
