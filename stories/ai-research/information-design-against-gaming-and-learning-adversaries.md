---
title: "Information Design Against Gaming and Learning Adversaries"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.31643"
authors: ["Madhava Gaikwad"]
date: "Tue, 29 Sep 2026 00:00:00 -0400"
score: 52
guid: "oai:arXiv.org:2609.31643v1"
image: ""
generated: "2026-09-29T19:09:35+05:30"
---

A principal who deploys a binary classifier with an abstention option must decide which queries the mechanism abstains on. The right choice depends on the adversary. A gaming adversary already knows the classifier and tries to manipulate features across the boundary, so the principal does best by abstaining on queries close to that boundary. The same boundary-localizing rule is the worst possible choice against a learning adversary who does not know the classifier: each abstention now tells the adversary that the boundary is nearby, which is enough to drive a binary search. We analyze this tension. The two natural defenses, abstaining at a fixed rate and abstaining near the boundary, are Blackwell-incomparable: neither can be simulated by post-processing the other's responses. The number of queries needed to reconstruct the boundary to error $\eps$ is $\tilde\Theta(d/\eps)$ under the first defense and $\Theta(d \log(1/\eps))$ under the second, where $d$ is the VC dimension of the classifier family and $\tilde\Theta$ suppresses factors polylogarithmic in $d$ and $1/\eps$. The first rate is a worst case over query distributions; no reconstruction algorithm can close the gap at the distributions that attain it. We characterize the Pareto frontier between the two defense objectives, and confirm both rates on seven binary-classification tasks spanning tabular, image, and language-model-feature inputs: label-plus-counterfactual access extracts the boundary with up to $200\times$ fewer queries than a published label-only baseline.
