---
title: "AsySplat: Efficient Asymmetric 3D Gaussian Splatting for Long-Sequence Scene Modeling"
category: "Other"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.10995"
authors: ["Yingji Zhong", "Dave Zhenyu Chen", "Fuzhao Ou", "Youyu Chen", "Zhihao Li", "Lanqing Hong", "Dan Xu"]
date: "2026-07-12T20:00:00.000Z"
score: ""
guid: "2607.10995"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.10995.png"
generated: "2026-07-18T21:58:10+05:30"
---

Recent generalizable 3D Gaussian Splatting models have advanced long-sequence novel view synthesis (NVS), but at the cost of substantial redundant computation. We identify that the redundancy can be mitigated based on two observations: (i) high-precision geometry is not strictly required for high-quality NVS; (ii) appearance learning is generally easier than geometry recovery. Motivated by these insights, we propose an asymmetric architecture that decouples geometry and appearance modeling. The geometry branch processes coarse-grained tokens with most of the parameters for multi-view reconstruction, while the appearance branch operates on fine-grained tokens to capture details using significantly fewer parameters. The two branches interact through bilateral connections, enabling mutual guidance for their respective tasks. This task-aware asymmetry reduces the computational redundancy and allocates the computation more judiciously, thereby increasing parameter efficiency and enabling smaller models to achieve strong performance. On 32-view 960P inputs, our model matches optimization-based methods while delivering nearly 800x speedup, and surpasses the zero-shot performance of state-of-the-art generalizable models with markedly fewer parameters and reduced training/inference overhead, achieving an overall efficiency improvement.
