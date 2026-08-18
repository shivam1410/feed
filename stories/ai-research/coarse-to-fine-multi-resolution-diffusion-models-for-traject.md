---
title: "Coarse-to-Fine Multi-Resolution Diffusion Models for Trajectory Generation in Urban Systems"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.14570"
authors: ["Wen Ye, Muyan Weng, Chuizheng Meng, Hao Niu, Yizhou Zhang, Yan Liu"]
date: "Tue, 18 Aug 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2608.14570v1"
image: ""
generated: "2026-08-18T19:06:14+05:30"
---

arXiv:2608.14570v1 Announce Type: new Abstract: Understanding human mobility is critical for a wide range of urban applications, including traffic management, epidemic control, and urban planning. However, due to privacy concerns, the availability of large-scale public trajectory data remains limited, posing challenges for downstream mobility analysis. Existing methods for synthetic trajectory generation primarily focus on matching global distribution similarity, while often overlooking mobility patterns across different spatial and temporal resolutions that are essential for practical utility. To address these challenges, we propose a novel multi-resolution diffusion framework, MR-Traj, for large-scale trajectory generation. MR-Traj explicitly models trajectories as compositions of coarse-grained milestones and fine-grained segments, enabling the capture of complex spatial-temporal dependencies at multiple resolutions. Experimental results demonstrate that MR-Traj achieves comparable performance to state-of-the-art methods in terms of global distribution similarity, while consistently outperforming them in modeling fine-resolution mobility patterns and supporting downstream urban mobility tasks. In addition, by introducing stochasticity at multiple resolution levels, MR-Traj generates more diverse trajectories, which empirically reduces trajectory linkage risk under a seed-guided data release setting. Our code is available at https://github.com/Ray0202/MR-Traj.
