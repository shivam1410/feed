---
title: "An Embedded RISC-V Evaluation of Kolmogorov--Arnold Networks in Hard-Constrained Recurrent Physics-Informed Models"
category: "Robotics & Engineering"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.00737"
authors: ["Enzo Nicolas Spotorno, Josafat Leal Filho"]
date: "Tue, 04 Aug 2026 00:00:00 -0400"
score: 66
guid: "oai:arXiv.org:2608.00737v1"
image: ""
generated: "2026-08-04T20:29:16+05:30"
---

arXiv:2608.00737v1 Announce Type: new Abstract: Hard-constrained recurrent physics-informed networks (HRPINNs) embed known dynamics inside a recurrent numerical integrator and restrict a neural branch to learning only the residual dynamics that the first-principles model does not capture. Kolmogorov--Arnold Networks (KANs) have been proposed as parameter-efficient replacements for multilayer perceptrons (MLPs) in such residual branches, but their learnable B-spline activations follow a markedly different execution profile. Building on prior work that characterized when a vanilla B-spline KAN matches or underperforms an MLP as an HRPINN residual branch in discovery accuracy, this paper asks whether that parameter efficiency survives deployment. Using identical trained weights, we measured execution latency, energy per integration step, and dependability under post-training quantization in the closed recurrent loop on a RISC-V RV64GC platform without vector extensions (StarFive VisionFive~2, SiFive U74). For the two accuracy-comparable pairs, the KAN residual branch executed $13.5\times$ and $8.0\times$ slower and consumed $11.3\times$ and $5.6\times$ more energy per integration step (3.7\,$\mu$J against 0.33\,$\mu$J for the smallest pair); across all four parameter-matched size tiers the ranges are $4.7\times$--$14.5\times$ and $4.7\times$--$18.7\times$. Under INT8 quantization, KAN trajectories diverged up to $43\times$ earlier than matched MLPs; the damage traces to weight quantization, not to input-side knot-interval misassignment. These results indicate that the parameter efficiency reported for KANs does not transfer to deployment cost on scalar embedded cores, and that an MLP residual branch is the more dependable default for embedded HRPINN deployment unless specific quantization co-design is used.
