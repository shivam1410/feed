---
title: "Physics-Informed Error Field Learning: A Post-Training Optimization Framework for Physics-Informed Neural Networks"
category: "Physics & Space"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.24970"
authors: ["Jiuyun Sun, Yong Zhang"]
date: "Thu, 27 Aug 2026 00:00:00 -0400"
score: 66
guid: "oai:arXiv.org:2608.24970v1"
image: ""
generated: "2026-08-27T20:25:46+05:30"
---

arXiv:2608.24970v1 Announce Type: new Abstract: Physics-Informed Neural Networks (PINNs) have emerged as an important class of numerical methods for solving partial differential equations (PDEs). However, during the late-stage optimization process, further parameter updates often yield diminishing accuracy improvements while increasing computational costs. To address this issue, this paper proposes a Physics-Informed Error Field Learning (PIEFL) framework for PINNs. Unlike conventional approaches that continuously approximate the solution field using a single network, PIEFL introduces an auxiliary error network after the primary network achieves satisfactory accuracy and shifts the learning objective from the solution field to the error field. By deriving error control equations under physical constraints, the error network learns the discrepancy between the current approximation and the exact solution, and the learned error correction is combined with the primary prediction to improve solution accuracy. The proposed framework avoids continuous optimization of the entire solution space and focuses computational resources on correcting existing prediction errors. Moreover, PIEFL requires no modification to the primary network architecture, making it compatible with existing PINN models and applicable as a general post-training optimization strategy. Numerical experiments on representative PDEs demonstrate that PIEFL achieves higher solution accuracy under the same computational budget, validating its effectiveness in improving the performance of PINNs.
