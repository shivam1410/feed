---
title: "CRISP: A Framework for Clause-Reconstructed Interpretable NeuroSymbolic Propositions"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.02431"
authors: ["Alex Chan, Shafi Muhtasim Chowdhury, Ekin Can Erku\\c{s}, Ole-Christoffer Granmo, Alex Yakovlev, Rishad Shafik"]
date: "Mon, 05 Oct 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2610.02431v1"
image: ""
generated: "2026-10-05T19:10:08+05:30"
---

Deep neural networks achieve high accuracy through layered numerical transformations, yet their decisions remain difficult to audit because decision evidence is encoded in hidden activations rather than explicit rules. This paper introduces CRISP, a framework that reconstructs the last-layer activation vector (LLAV) of binary neural teachers as Tsetlin Machine (TM) clauses. CRISP sign-binarizes the teacher's penultimate pre-logit activations, and assigns one Individual TM (ITM) to each LLAV neuron. Each reconstructed hidden bit is represented by propositional clauses over Booleanized input features, which gives a direct symbolic trace from named input thresholds to a named teacher neuron. CRISP is evaluated on MNIST, KMNIST, FashionMNIST (FMNIST), SVHN, and CIFAR10 using a BinaryConnect convolutional neural network (BCCNN) teacher and a fully binary neural network (BNN) teacher, with an additional study on binary thresholding, thermometer encoding, and quartile binning at multiple bit depths. The results show that LLAV sign-binarization does not reduce teacher-head accuracy in the tested BNN setting, while ITM reconstruction error is the main limiting factor. Quartile one-bit Booleanization gives the strongest reconstruction fidelity on SVHN at 87.52% test fidelity and is competitive on CIFAR10, and the reconstructed LLAV preserves 78.41% teacher-head accuracy on FMNIST. Pooled clause-evidence visualizations show that the learned ITM literals concentrate on the object region in centered benchmarks. CRISP therefore provides a clause-level route for inspecting the final hidden representation of binary neural teachers.
