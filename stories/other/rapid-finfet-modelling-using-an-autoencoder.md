---
title: "Rapid FinFET Modelling Using an Autoencoder"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.24046"
authors: ["Amit Sarkar Suman Sau, Swagata Mandal"]
date: "Wed, 24 Jun 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2606.24046v1"
image: ""
generated: "2026-06-24T19:00:41+05:30"
---

arXiv:2606.24046v1 Announce Type: new Abstract: This work presents a machine learning framework that leverages an autoencoder (AE) for the efficient modeling of FinFET. We first calibrated a BSIM-CMG model to generate a dataset of current-voltage (ID-VG) characteristics. This data was used to train an autoencoder that compresses full I-V curves into a low-dimensional latent space, which intrinsically encodes key device physics. A key innovation is the explicit incorporation of parameter such as drain to source voltage (VDS) as an input feature, enhancing the model ability to capture bias dependent variation. The trained model successfully reconstructs full I-V curves and directly extracts critical device metrics including threshold voltage (VTH), subthreshold slope (SS), and peak transconductance (gm). This approach demonstrates that data driven compact models, built from actual characterization data, can achieve high accuracy with minimal training data, providing a powerful tool for rapid device characterization, modelling and circuit level simulation.
