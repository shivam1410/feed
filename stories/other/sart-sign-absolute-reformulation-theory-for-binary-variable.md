---
title: "SART: Sign-Absolute Reformulation Theory for Binary Variable Reduction in Neural Network Verification"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.18657"
authors: ["Jin Xu, Miaomiao Zhang, Bowen Du"]
date: "Tue, 17 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.18657v1"
image: ""
generated: "2026-11-17T19:45:07+05:30"
---

Complete formal verification of neural networks is crucial for their deployment in safety-critical domains. A key bottleneck stems from encoding complexity: traditional methods assign one binary variable per unstable ReLU neuron. We propose the Sign-Absolute Reformulation Theory (SART), which fundamentally breaks the conventional one-to-one mapping between unstable neurons and binary variables by establishing formal reducibility criteria. This allows for finer-grained modeling, where each unstable neuron corresponds on average to fewer than one binary variable, thereby reducing verification complexity at its source. Based on SART, we derive a theoretical lower bound on the number of binary variables required for complete verification and, under the assumption that $P \neq NP$, prove that variables in the final layer can be compressed by 50\%, while the number of variables in intermediate layers cannot be further reduced. To overcome the apparent ``last-layer-only'' limitation, we recast verification as a sequential process and, crucially, show that the gain lifts to the entire network: LayerABS, a SART-based progressive tightening verifier, iteratively treats intermediate layers as temporary final layers and propagates tight bounds that shrink the global search space and binary-variable counts. Furthermore, we reveal a structural law influencing verification complexity: when the signs of weights of unstable neurons satisfy numerical symmetry, with positive and negative weights equal or differing by at most one, the worst-case verification complexity achieves the theoretical optimum, offering theoretical guidance for the design of verification-friendly architectures. As a general-purpose underlying encoding, the value of SART is independent of specific algorithms.
