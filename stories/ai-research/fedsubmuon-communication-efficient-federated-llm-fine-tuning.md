---
title: "FedSubMuon: Communication-Efficient Federated LLM Fine-Tuning via Structured Subspace Muon"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.06073"
authors: ["Shaolong Chen, Youming Tao, Shuzhen Chen, Falko Dressler, Qingqing Ye, Di Wang"]
date: "Wed, 09 Sep 2026 00:00:00 -0400"
score: 62
guid: "oai:arXiv.org:2609.06073v1"
image: ""
generated: "2026-09-09T19:07:26+05:30"
---

arXiv:2609.06073v1 Announce Type: new Abstract: Federated fine-tuning adapts large language models (LLMs) to decentralized client data, but its scalability in cross-device training is often limited by the high communication cost. Muon is an optimizer that improves optimization performance by orthogonalizing momentum for matrix-valued parameters. Existing federated Muon methods demonstrate the benefit of matrix-aware optimization in federated learning, but still require transmitting full layer-size updates and optimizer state. A natural way to reduce communication is to directly apply Muon to LoRA factors, but this changes the optimized object and weakens Muon's matrix-aware update geometry. We propose FedSubMuon, a communication-efficient federated Muon fine-tuning method that optimizes compact coefficient matrices within shared structured subspaces. This design keeps Muon on a single matrix-valued trainable object, while reducing the client upload to compact coefficient matrices. We further introduce FedSubMuon-GT, an accuracy-oriented extension that uses projected gradients to adapt tracked subspace bases toward task-relevant gradient directions. Experiments on instruction tuning and mathematical reasoning show that FedSubMuon-GT achieves the best overall accuracy on four of five dataset-model pairs, while FedSubMuon performs best under all matched communication budgets. On Dolly-15K, the closest communication baseline requires 5.5 times and 1.4 times more total communication on Llama-1B and Qwen-4B, respectively.
