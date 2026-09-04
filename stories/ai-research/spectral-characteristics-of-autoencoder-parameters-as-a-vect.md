---
title: "Spectral characteristics of autoencoder parameters as a vector representation of data"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.03495"
authors: ["Maria Nikitina, Anton Bishuk, Oleg Bakhteev"]
date: "Fri, 04 Sep 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2609.03495v1"
image: ""
generated: "2026-09-04T23:32:20+05:30"
---

arXiv:2609.03495v1 Announce Type: new Abstract: This paper examines the relationship between the parameters of autoencoder models and the statistical properties of the data on which they are trained. Autoencoders are defined as models with an encoder-decoder architecture, trained to reconstruct input data through a compressed latent representation. It is proposed that the model parameters can be viewed as a dense vector representation of the corresponding sample. To test this hypothesis, a theoretical and experimental study is conducted in which a vector representation is formed based on the spectral characteristics of the autoencoder parameter matrices. Theoretical analysis shows that the singular values of the model parameter matrices are related to the eigenvalues of the covariance matrix of the training data, ensuring the transfer of information between the data space and the parameter space. Experimental results on the CIFAR-10 and FashionMNIST datasets confirm that the resulting vector representations allow for a high degree of accuracy in distinguishing between models trained on different data subsets, without resorting to complex vector generation algorithms or using the original samples. These results suggest that the parameters of trained autoencoders can be viewed as sample representations.
