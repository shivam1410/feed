---
title: "Hybrid Compression for Memory-Efficient Matrix-Vector Multiplication"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.18792"
authors: ["Felipe A. Louza, Giovanni Manzini, Guilherme P. Telles"]
date: "Tue, 17 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.18792v1"
image: ""
generated: "2026-11-17T19:45:07+05:30"
---

Iterative machine-learning algorithms repeatedly access large real-valued matrices through matrix-vector products, and their performance is limited by memory bandwidth rather than arithmetic throughput. Lossless compression schemes that support computation directly over the compressed data reduce both the data moved and the memory footprint of these workloads. The mm-RePair framework [11] follows this approach by applying the RePair grammar compressor to the Compressed Sparse Row/Value (CSRV) representation of a matrix and performing matrix-vector multiplications directly on the compressed data. Its effectiveness, however, degrades on matrices that are dense or contain many distinct values. In this paper we present a hybrid strategy for the mm-RePair framework that combines grammar and entropy compression. The CSRV sequence is partitioned into a grammar-compressible component, formed by the entries that mm-RePair can compress effectively, and an entropy-compressible component holding the remaining entries, which is encoded with the ans-fold coder [24]. Compression improves further by sorting and delta encoding the entries of each row in the CSRV representation, and by remapping the alphabet to a contiguous range. Experiments on real-valued machine-learning matrices, including word embeddings and transformer hidden states, show that our hybrid strategy is more compact than the original \mmRepair on every input and reduces the peak memory of multiplication, with the largest gains on dense matrices with many distinct values, at competitive multiplication times. It also outperforms the column-reordering variant of \mmRepair on most of the matrices, and combining the two is even more compact on the sparse ones, at the cost of a much longer compression time. Finally, our strategy scales with the number of threads as well as the original \mmRepair does.
