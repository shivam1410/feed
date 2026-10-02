---
title: "Beyond Diagonal State Space Models: Exact Non-Abelian Group Tracking, Solvability Barriers, and Geometric Physical Manifolds"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.00329"
authors: ["Zeyu Jia (School of Biomedical Engineering,Technology, Tianjin Medical University, Medical School, Tianjin University)"]
date: "Fri, 02 Oct 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2610.00329v1"
image: ""
generated: "2026-10-02T21:40:09+05:30"
---

Selective state space models (SSMs), such as Mamba, S4D, and LRU, are bounded by transition matrix commutativity (A_t A_t' = A_t' A_t) and solvable affine transformation groups (Aff_D of derived length <= 2). Consequently, stacked multi-layer diagonal networks face severe optimization degradation on non-solvable simple groups such as A_5 due to the exponential circuit emulation depth required to simulate non-abelian commutators. We propose Non-Commutative State Space Models (NC-SSM), their real-orthogonal counterpart SO(3)-SSM, and arbitrary-dimension Cayley-SSM, lifting state transitions to compact Lie groups SU(2), SO(3), and SO(N). Via closed-form Euler-Rodrigues maps and rational Cayley transforms, NC-SSM achieves exact norm-preserving isometry (||U_t|| = 1). We introduce pure Hopf-fibration Bloch projective readouts (S^3/{+-1} =~ S^2 =~ SO(3)) to eliminate sign ambiguity, true quaternion parallel prefix scans (9.06x speedup at T=2048), and Identity-Gated Lie SSMs to eliminate sparse syntax phase drift. Extensive benchmarks across 14 experimental regimes show: (1) NC-SSM achieves 100% tracking on S_3, D_4, Q_8 and simple group A_5, where a 3-layer deep diagonal baseline collapses to 6.60% (p = 8.81e-4); (2) Cayley-SO(5)-SSM breaks Klein's 1884 ceiling on symmetric group S_5 (50.92% vs diagonal 5.25%, p = 0.0015, delivering 7.8x variance reduction over SO(3)); (3) SO(3)-SSM preserves Riemannian manifolds across 300 steps ( 580,000x advantage), achieving 0.04 deg dead-reckoning error and active tangent denoising; (4) NC-SSM achieves 74.36% on Dyck-2 and 30.26% on deep AST scope tracking (p = 0.0081); and (5) ablation confirms strict isometry is mathematically necessary for lossless long-range associative memory.
