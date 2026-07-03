---
title: "Efficient Temporal Point Processes via Monotone Alternating Splines"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.01752"
authors: ["Cheng Wan, Quyu Kong, Feng Zhou"]
date: "Fri, 03 Jul 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2607.01752v1"
image: ""
generated: "2026-07-03T19:05:12+05:30"
---

arXiv:2607.01752v1 Announce Type: new Abstract: Temporal point processes (TPPs) have widespread applications across various domains. Compared to modeling the conditional intensity of a TPP, modeling its cumulative conditional intensity function (CCIF) improves computational efficiency and eliminates numerical approximation errors. However, current CCIF parameterizations uniformly rely on Monotone Neural Networks (MNNs), which we identify as suffering from three structural deadlocks--convexity restrictions, saturation limits, and violations of CCIF modeling requirements--that fundamentally restrict their representational capacity for complex temporal dynamics. To resolve these bottlenecks, this paper proposes a novel framework called Monotone Alternating Splines (MAS). By leveraging distinct interpolation and extrapolation components, MAS provides a flexible and efficient framework for modeling CCIFs. Theoretically, MAS's interpolation provides strong fitting accuracy, while its extrapolation supports robust generalization, reducing the irreducible approximation gaps of MNNs. Extensive experiments show that MAS achieves superior performance on both synthetic and real-world datasets.
