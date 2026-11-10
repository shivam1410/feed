---
title: "MAGE: Towards Generalizable Multi-timescale EEG Representations"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.09928"
authors: ["Tuan-Kiet Doan, Van-Chien Nguyen, Trung-Hieu Tran, Quang-Hung Pham, Ngoc-Son Vu, Huy Phan, Phi Le Nguyen, Duc-Han Le, Nikola Simidjievski, Van-Tam Nguyen"]
date: "Tue, 10 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.09928v1"
image: ""
generated: "2026-11-10T19:01:15+05:30"
---

Electroencephalography (EEG) data plays an important role in understanding human brain activity, with various major applications. While current approaches, which largely build on EEG foundation models, have demonstrated strong performance across datasets and tasks, they typically rely on a fixed temporal scale. This design choice limits their ability to capture characteristics of neural dynamic behavior, often spanning across multiple timescales, which are naturally captured in EEG recordings. To address this limitation, we propose MAGE (\textbf{Multi-timescale Adaptive Generalization for EEG}), a foundation model that dynamically adapts to capture and integrate information across different timescales. Specifically, MAGE combines two key mechanisms: (i) a novel multi-timescale attention mechanism, capable of learning representations across multiple temporal scales and (ii) a trainable aggregation module, that dynamically identifies and adapts to the most informative timescale of the input signal. Experimental results across seven datasets demonstrate that MAGE consistently outperforms existing EEG foundation models while using substantially fewer parameters. Moreover, our results support the hypothesis that different downstream tasks benefit from distinct temporal scales. All source code will be released.
