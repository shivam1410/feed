---
title: "Layer-wise Input Recoverability in Deep Neural Networks"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.14290"
authors: ["Maxwell Spiridonov, Alireza Rahmansetayesh, Pierre Baldi"]
date: "Wed, 14 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.14290v1"
image: ""
generated: "2026-10-14T19:00:21+05:30"
---

The inner workings of deep neural networks are still not well understood. The information bottleneck framework, which characterizes deep networks by the mutual information between their hidden representations and the network's input, has been used to identify compression of input information with respect to an input image and output labels. We instead study how much of a layer's own input is recoverable from the layer's output in convolutional neural networks (CNNs). A convolutional layer applies its filters to one input patch at a time, so we evaluate recoverability on sampled input patches with a reconstruction-based probe and not on the entire feature map. The probe's size thus depends on channels and kernel size and not on feature map size, which lets our method scale to deep CNNs with wide feature maps. For each layer, we compare pretrained, random, and reconstruction-optimized encoders, using linear and linear-plus-residual-MLP decoders. We measure recoverability as $R^2$ between input patches and their reconstructions on a held-out set. Across nine ImageNet CNNs, recoverability generally decreases with depth but is more consistently predicted by the compression of the layer. Learning-attributed recoverability, the difference between pretrained and random encoders, is not uniform across architectures. We introduce single-property random controls, which transfer one pretrained property onto a random encoder, and find that each control changes recoverability with a consistent sign across models: copying pretrained singular vectors tends to raise recoverability, while copying the pretrained singular-value spectrum or activation sparsity lowers it.
