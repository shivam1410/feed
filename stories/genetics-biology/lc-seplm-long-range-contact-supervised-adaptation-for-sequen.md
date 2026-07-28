---
title: "LC-SEPLM: long-range contact-supervised adaptation for sequence-only protein representation learning"
category: "Genetics & Biology"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.22777"
authors: ["Chen Wang, Boming Kang, Qinghua Cui"]
date: "Tue, 28 Jul 2026 00:00:00 -0400"
score: 63
guid: "oai:arXiv.org:2607.22777v1"
image: ""
generated: "2026-07-28T19:07:22+05:30"
---

arXiv:2607.22777v1 Announce Type: new Abstract: Protein language models learn transferable sequence representations. However, because they primarily model contextual dependencies along amino-acid sequences, their training objectives do not explicitly constrain the model to learn three-dimensional residue contacts formed after folding . Here, we introduce LC-SEPLM (Long-range Contact-supervised ESM Protein Language Model), which adapts ESM2 with LoRA and long-range residue-pair contact supervision while retaining sequence-only downstream inference. Pair-specific queries use cross-attention over the complete sequence to extract global sequence context associated with long-range spatial contacts. To expose the model to diverse structural information, we trained LC-SEPLM on 500,000 AlphaFold Swiss-Prot proteins. In downstream evaluation, LC-SEPLM improved all eight protein-level tasks relative to ESM2. The largest gain occurred in remote-homology recognition, where macro-F1 increased from 0.6122 to 0.6769 (+0.0647, or 6.47 percentage points). On the official ESM-S EC benchmark, LC-SEPLM also outperformed ESM-S with a maximum absolute gain of 0.1771. These results support residue-pair contact supervision as a bounded route for introducing structural information into protein sequence representations while preserving sequence-only inference.
