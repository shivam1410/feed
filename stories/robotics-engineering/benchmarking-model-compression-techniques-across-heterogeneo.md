---
title: "Benchmarking Model Compression Techniques Across Heterogeneous Edge Platforms: A Predictive Maintenance Use Case for Rotating Machinery"
category: "Robotics & Engineering"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.30228"
authors: ["Matheus Calheira Guimar\\~aes de Oliveira, Marco Aur\\'elio da Silva Cruz, Regis Cardoso, Lucas Cambuim, Rafael Macieira, Arthur Paim, Helaine Neves, Alex Santos, Lilian Guarieiro, Jean Schmith, Prashant Kumar, Erick G. Sperandio Nascimento"]
date: "Fri, 23 Oct 2026 00:00:00 -0400"
score: 30
guid: "oai:arXiv.org:2610.30228v1"
image: ""
generated: "2026-10-23T19:04:29+05:30"
---

To enable Industry 5.0, where autonomous systems are widely adopted and integrated with people to promote sustainable development in industries, it is imperative to adapt complex deep learning models to operate efficiently on resource-constrained hardware for edge inference. However, adapting these models remains challenging due to the hardware heterogeneity of edge computing in industrial settings, performance degradation caused by model compression, and the lack of clear guidance on which compression techniques are practical and effective for applications such as predictive maintenance. To address these challenges, this paper presents a comprehensive comparative analysis of four state-of-the-art model compression techniques applied to a high-performance convolutional neural network for predictive maintenance using a real-world dataset of rotating machinery, equipment typically used in industry. The compressed models were evaluated across a heterogeneous set of nine computing platforms, ranging from highly constrained edge computing devices to general purpose and high-performance processors, reflecting the diversity and fragmentation typical of industrial edge environments. By jointly prioritizing classification performance, inference speed, and compression ratio, we found that compression using knowledge distillation emerged as the most effective approach. The model had more than 90% speedup across all devices while maintaining a 91.22% balanced F-score, with a very small drop in predictive performance relative to the uncompressed model, along with a 98.9% size reduction. Through successful deployment across multiple edge platforms and a systematic comparison of compression strategies, we demonstrated a clear path to achieving Industry 5.0 targets, drastically cutting computational costs and, consequently, energy consumption without sacrificing predictive performance.
