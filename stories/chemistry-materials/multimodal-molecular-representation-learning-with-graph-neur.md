---
title: "Multimodal Molecular Representation Learning with Graph Neural Networks, Deep & Cross Networks, and SMILES Embeddings"
category: "Chemistry & Materials"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.05736"
authors: ["Qiwei Han, Chi Zhou, Ruobing Wang, Zheng Ma"]
date: "Wed, 08 Jul 2026 00:00:00 -0400"
score: 68
guid: "oai:arXiv.org:2607.05736v1"
image: ""
generated: "2026-07-08T19:04:42+05:30"
---

arXiv:2607.05736v1 Announce Type: new Abstract: Molecular property prediction often relies on isolated data modalities, where continuous 3D graph neural networks (GNNs) struggle to efficiently capture long-range topological dependencies and exact macroscopic heuristics. In this work, we introduce a parameter-efficient Tri-Branch Modular Fusion Neural Network that synthesizes three orthogonal modalities: 3D spatial geometry (SchNet), discrete topological grammar (SMILES via ChemBERTa), and explicit macroscopic physicochemical descriptors (Deep & Cross Network). By bypassing standard scalar readouts and employing a shared late-fusion architecture, the framework establishes a mathematically rigorous multimodal latent space that effectively resolves the arithmetic and oversmoothing limitations of local message passing. We evaluate the proposed architecture on the QM9 benchmark, targeting the extensive thermodynamic property of atomization energy at 0 K ($U_0^{\mathrm{atom}}$). Through systematic combinatorial ablation and latent bottleneck optimization ($d_e=64$), the tri-modal framework achieves a validation Mean Absolute Error (MAE) of 0.0207 eV. Operating with fewer than one million parameters, this architecture decisively surpasses the sub-chemical accuracy threshold and yields a substantial 20.6% error reduction over a strictly controlled geometric baseline. Ultimately, our findings demonstrate that integrating orthogonal macroscopic and topological data streams provides a synergistic, $\mathcal{O}(1)$ physical shortcut. This multimodal alignment offers a highly efficient alternative to brute-force parameter scaling, establishing a robust surrogate model for high-throughput virtual screening (HTVS) pipelines.
