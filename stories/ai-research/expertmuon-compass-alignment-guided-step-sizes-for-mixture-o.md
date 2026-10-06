---
title: "ExpertMuon-Compass: Alignment-Guided Step Sizes for Mixture-of-Experts Training"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.04140"
authors: ["Omatharv Bharat Vaidya, Ashwin Vinod, Pedram Akbarian, Aditya Sai Ellendula, Connor T. Jerzak, Nhat Ho"]
date: "Tue, 06 Oct 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2610.04140v1"
image: ""
generated: "2026-10-06T22:55:59+05:30"
---

Mixture-of-experts (MoE) language models send each token to a few experts, so each expert is trained on a different part of the data, and this part changes during training. With a shared learning rate, Muon applies updates of roughly the same size to expert matrices of the same shape, even when an expert's update is poorly aligned with its current gradient. We here propose ExpertMuon-Compass (Compass), which multiplies the Muon step of each expert by two factors. A family factor compares the cosine between the expert's orthogonalized update and its gradient with the same cosine for the other experts in its layer. A scalar radius aggregates the alignment between corresponding rows of the update and gradient into one step-length multiplier. Compass keeps the update direction and the momentum buffer of Muon. In pretraining on FineWeb-Edu, Compass with Nesterov momentum on all matrices performs as well as or better than Muon, NorMuon, and other optimizers, with weight decay matched to NorMuon in the longer runs. Adding its factors to NorMuon gives the same or a lower loss than NorMuon. Compass is the most effective when the data seen by each expert varies during training, for example, as when the languages of a multilingual corpus arrive in separate blocks. With Compass, the expert load stays balanced, and the router assigns tokens to experts more decisively. We also prove a perturbation bound for the two factors.
