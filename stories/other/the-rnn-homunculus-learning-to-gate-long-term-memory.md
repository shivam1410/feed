---
title: "The RNN Homunculus: Learning to Gate Long-Term Memory"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.14279"
authors: ["Zeyu Fan, Alexandru-Dragos Manolache, Jan van Gemert"]
date: "Wed, 14 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.14279v1"
image: ""
generated: "2026-10-14T19:00:21+05:30"
---

Learning long-range dependencies with recurrent neural networks (RNNs) is difficult because of the vanishing gradient problem. Gated recurrent neural networks like GRUs and LSTMs address this problem and are commonly explained by their ability to create additive copy paths through time. This explanation is correct, but incomplete: useful RNN gate values must themselves be learned, which is typically done with another RNN. We study this gate-learning problem through carefully controlled sequence classification tasks. Our analysis shows that gated architectures struggle when all training samples require long-range memory and thus equally suffer from the vanishing gradient problem. We intervene by adding short-dependency samples which let gated models learn solutions that capture long-dependency samples, but also generalize across different class labels. When properly learned, gated RNNs match or even exceed the test accuracy of modern architectures like Mamba and xLSTM. Overall, our results highlight gate learning as a central part of learning long-range memory and show how training data can support this process by exposing the same task over shorter dependencies.
