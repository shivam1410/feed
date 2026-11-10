---
title: "Rethinking How to Leverage Cheap Physics for Data-Efficient Neural Operators"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.10217"
authors: ["Shuo Zhang, Senwei Liang"]
date: "Tue, 10 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.10217v1"
image: ""
generated: "2026-11-10T19:01:15+05:30"
---

Neural operators learn mappings from PDE inputs, such as initial conditions and coefficient fields, to the corresponding solutions. Once trained, they can rapidly predict solutions for new inputs. However, obtaining input-solution pairs for supervised training often requires expensive numerical simulations, whereas PDE inputs and governing equations provide inexpensive physical information. This raises a question: how can cheap physical information reduce the need for labeled solutions? A natural approach is to use physics to select inputs for labeling, but our acquisition experiments show no consistent advantage over random sampling. This observation motivates exploring an alternative: using cheap physics to improve neural operator initialization before supervised training. We propose Physics-Informed Initialization (PI-Init), a simple yet effective method that pretrains neural operators on unlabeled inputs using physics-informed losses and retains the learned parameters for supervised fine-tuning on the labeled dataset. A linearized analysis shows that pretraining can improve downstream prediction accuracy by reducing initialization errors that limited labeled data cannot effectively correct. Experiments across diverse PDE benchmarks and neural operator architectures demonstrate improvements in predictive accuracy, out-of-distribution generalization, and label efficiency. Representative results show error reductions of up to 62.7% at the same label budget and comparable or better accuracy with 90% fewer labels, relative to supervised-only training.
