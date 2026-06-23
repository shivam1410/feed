---
title: "Towards CSI-Native Foundation Models: A Channel-Adaptive Roadmap for 6G"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.20670"
authors: ["Chenyu Zhang, Xinchen Lyu, Chenshan Ren, Shuhan Liu, Qimei Cui"]
date: "Tue, 23 Jun 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2606.20670v1"
image: ""
generated: "2026-06-23T19:00:42+05:30"
---

arXiv:2606.20670v1 Announce Type: new Abstract: Wireless foundation models offer a path toward reusable channel state information (CSI) intelligence for sixth-generation (6G) systems. However, existing generic-backbone adaptation and CSI pretraining methods often treat CSI as task tensors rather than propagation-conditioned channel responses, thereby failing to capture the intrinsic time-frequency-spatial geometry of wireless environments. This paper presents a channel-adaptive roadmap toward CSI-native foundation models, proposing a unified framework that aligns pretraining, positional modeling, and attention control with three channel requirements: scale-aware heterogeneous exposure, physical time-frequency-antenna coordinates, and correlation-bounded token interaction. Extensive experiments demonstrate the superiority of the proposed framework across three dimensions: zero-shot generalization, reducing NMSE by more than 4 dB across spatial-temporal-frequency tasks; scale extrapolation, yielding up to a 5.4 dB gain under 8 times unseen antenna scaling; and inference efficiency, accelerating mobility-aware processing by up to 18.8%. A system-level evaluation with Sionna SYS further shows that the proposed framework uses only 7.01% of dense-pilot overhead, reaches -18.64 dB average NMSE, and improves average net spectral efficiency by 36.6% over dense LMMSE and 15.5% over WiFo, indicating that CSI-native representation learning can support pilot-efficient radio access.
