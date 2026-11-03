---
title: "Quantization of Large Models with Weight Outliers and Sparsity"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.00286"
authors: ["Leonidas Tsigkounakis, Abraham Jaeger Mountain, Yilang Zhang, Georgios B. Giannakis"]
date: "Tue, 03 Nov 2026 00:00:00 -0500"
score: 45
guid: "oai:arXiv.org:2611.00286v1"
image: ""
generated: "2026-11-03T19:05:09+05:30"
---

Post-training quantization (PTQ) reduces the memory burden of large model deployment by casting the high precision trained weights to fewer bits. While this promotes memory-efficient inference, it also incurs quantization error that impairs model performance. To compensate for quantization error, the present contribution decomposes the original trained weights into a quantized matrix, a low-rank component, and a sparse matrix that accounts for outlier rows in the weights. Due to analytical intractability and the discrete structure of the decomposition, a simulated annealing search is employed to explore candidate decompositions while avoiding poor local minima. Numerical tests demonstrate the effectiveness of this approach across a broad suite of large language models, including Llama 3.2 1B, Llama 3.2 3B, Llama 3.1 8B, and Qwen2.5 7B, evaluated on natural language generation benchmarks using 4-bit NF4 and FP4 quantizers. The novel method can markedly outperform direct quantization while incurring minimal memory overhead.
