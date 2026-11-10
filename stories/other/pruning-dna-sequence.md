---
title: "Pruning DNA Sequence"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.10386"
authors: ["Faias Satter, Shaker Islam, Aminul Islam"]
date: "Tue, 10 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.10386v1"
image: ""
generated: "2026-11-10T19:01:15+05:30"
---

Data pruning can substantially reduce training cost by removing examples that contribute little additional learning signal, but it has not been studied for DNA language-model pretraining. We introduce Sequence Pruning (SP), a dynamic pruning framework that removes genomic sequences as they become easy for the model to predict. SP uses per-sequence pretraining accuracy computed directly from the model's forward pass, requiring no separate scoring model or additional pass over the corpus. We evaluate SP across five pretraining settings spanning two corpora, three model families, and both MLM and CLM objectives, with downstream evaluation on five genomic benchmarks. SP reduces pretraining data processing by up to 96% while largely preserving downstream performance. At moderate savings, pruning improves performance by up to 1.2 MCC points over full-data pretraining; at the highest savings, pretraining uses only 4% of the baseline GPU hours with little performance loss. SP also outperforms the dynamic pruning methods InfoBatch and BPAS across most comparisons. Beyond accuracy, our framework supports alternative criteria such as perplexity and EL2N, although accuracy yields the strongest downstream performance at matched savings. These results show that genomic pretraining does not require repeatedly processing all available sequences and that dynamic sequence-level pruning can substantially improve its data and computational efficiency. Code is available at https://github.com/FaiasPromit/pruning-dna-sequence.
