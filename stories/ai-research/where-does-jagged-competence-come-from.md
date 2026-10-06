---
title: "Where Does Jagged Competence Come From?"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.03831"
authors: ["Ioannis Tsiokos"]
date: "Tue, 06 Oct 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2610.03831v1"
image: ""
generated: "2026-10-06T22:55:59+05:30"
---

Capable systems often show jagged competence: low average error alongside failures on particular inputs. We ask where it comes from in a task built from two known layers. A lower layer A computes five per-slot sums from records; an upper layer B uses the slot-1 sum and a mode carried over from earlier boards to predict the next board's category, so B cannot be computed from the current A alone: B is a strict extension of A. We train small recurrent networks on B and measure, against exact ground truth, what they acquire of A. The central finding is that learning B gives the network a jagged version of A, measured through probe readability and supervised outputs. It is readable where B needs it (slot 1, 97-98% by a linear probe) and becomes less readable where B does not (the other slots, 5-10%); category misreads concentrate near the slot-1 cutoffs; and when A is trained explicitly it comes out only approximately right. The networks show jagged competence in B: natural KL below $3\times10^{-4}$ bits coexists with a maximum law TV of about 0.25 on constructed histories. Matched experiments show that even a good A is not enough: connecting a learned A to B cuts misreads 1.3 to 17-fold, the same exact A gives fewer misreads as one-hot inputs (0-2) than as numerical inputs (10-317), one B update makes an exact A inexact unless the B gradient is blocked, and exact A still leaves some B failures. In this task, uneven acquisition, access and preservation of the lower theory explain part of the jagged competence of a network that learns the theory built on it; some failures remain unexplained. Whether the same holds in larger systems is a test to run.
