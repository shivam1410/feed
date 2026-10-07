---
title: "Learning to Remember: Distilling Memory Retention for Compact Recurrent Neural Networks"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.06942"
authors: ["Nilushika Udayangania, Kishor Nandakishora, Marimuthu Palaniswami"]
date: "Wed, 07 Oct 2026 00:00:00 -0400"
score: 35
guid: "oai:arXiv.org:2610.06942v1"
image: ""
generated: "2026-10-07T19:11:01+05:30"
---

Deep learning models, particularly recurrent neural networks and their variants, such as long short-term memory, have significantly advanced time series analysis. These models capture complex, sequential patterns in time series, enabling real-time assessments. However, their high computational complexity and large model sizes pose challenges for deployment in resource-constrained environments, such as wearable devices and edge computing platforms. Knowledge Distillation (KD) offers a solution by transferring knowledge from a large, complex model (teacher) to a smaller, more efficient model (student), thereby retaining high performance while reducing computational demands. Current KD methods, originally designed for computer vision tasks, neglect the unique temporal dependencies and memory retention characteristics of time series models. To bridge this gap, we propose a novel KD framework termed Memory-Discrepancy Knowledge Distillation (MemKD). MemKD leverages a specialized loss function to capture memory retention discrepancies between the teacher and student models across subsequences within time series data, ensuring that the student model effectively mimics the teacher's behaviour. This approach facilitates the development of compact, high-performing recurrent neural networks suitable for real-time, time series analysis tasks. We provide additional experiments, in-depth theoretical analysis, and insights into the proposed framework across extended time series benchmarks. Our experiments demonstrate that MemKD significantly outperforms state-of-the-art KD methods. Additionally, we demonstrate that it can match the teacher model's performance across a wide range of compression levels, achieving notable reductions in parameter count and memory usage without a significant loss in accuracy.
