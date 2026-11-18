---
title: "Every Measurement, Every Direction, All at Once: Multimodal Flow Matching for Molecules and Spectra"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.22098"
authors: ["Thorben Prein, Elton Pan, Rafael G\\'omez-Bombarelli, Santiago Miret"]
date: "Wed, 18 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.22098v1"
image: ""
generated: "2026-11-18T19:12:26+05:30"
---

Generative modeling in science is often data-limited, where experiments are expensive. However, each experiment may yield several coupled measurements of the same physical entity. Standard generative models often train only on a single direction, discarding supervision from the rest. We argue that each experiment contains more training signal than this asymmetry allows the model to exploit: random masking enables measurements to serve as either conditioning inputs or prediction targets, yielding multiple supervised denoising tasks from a single experiment. We investigate this premise with MOSAIC, a multimodal flow matching transformer over molecular 3D structure and UV, IR, and Raman spectra. MOSAIC is a single model that is capable of any-to-any generation: generating any subset of modalities from any disjoint subset of the others. On QM9S, MOSAIC achieves 88.8% molecular graph recovery, outperforming the strongest spectra-to-structure baseline by 23.2% in structure generation, while simultaneously outperforming a structure-to-spectra specialist model in spectral generation. Ablations show that the any-to-any objective improves structure generation over structure-only training across model sizes. Furthermore, MOSAIC supports arbitrary subsets of available measurements and enables molecular identification by matching generated spectra to experimental references.
