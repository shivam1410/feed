---
title: "When Does Domain Adaptation Help on Physical Vibration Sensors? A Held-Out-Bearing Study of Neural-Operator and Convolutional Models"
category: "Robotics & Engineering"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.31639"
authors: ["Kumbha Nagaswetha, Rabi Pathak"]
date: "Tue, 29 Sep 2026 00:00:00 -0400"
score: 52
guid: "oai:arXiv.org:2609.31639v1"
image: ""
generated: "2026-09-29T19:09:35+05:30"
---

Diagnosing rolling-element bearing faults from vibration is a canonical physical-sensing task and a widely used benchmark for domain adaptation under operating-condition shift. Accuracies above 99 percent are commonly reported, but under evaluation splits that place the same physical bearing in both training and test. We revisit the task under a held-out-bearing protocol, assigning every bearing unit entirely to either the training or the test set, and find that source-only transfer is far weaker than such numbers suggest: on a change of shaft speed it reaches only $0.36$, against a target-supervised ceiling of 0.97. We then study what governs transfer. Treating computed order tracking, a shaft-angle resampling that places fault frequencies at fixed shaft orders independent of running speed, as a controlled change of representation, we find that a Fourier Neural Operator raises source-only transfer from $0.36$ to $0.61$ on the speed shift, where the fault peaks move, while a convolutional network of matched feature dimension stays near chance in both representations. The representation also decides whether unsupervised alignment can work: with the same normalized RBF-MMD loss and no target labels, the operator reaches 0.71 in the frequency domain but 0.95 in the order domain, within 0.02 of the target-supervised ceiling and above $0.86$ on every held-out bearing fold. Once the representation is right, a small label budget adds little. These results indicate that, for this task, the input representation rather than the alignment method decides whether adaptation helps. A second dataset, whose held-out units are fault diameters rather than bearings, shows that the same protocol exposes failures that even a target-supervised model cannot avoid.
