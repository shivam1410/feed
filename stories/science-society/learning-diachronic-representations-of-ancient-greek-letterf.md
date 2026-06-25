---
title: "Learning Diachronic Representations of Ancient Greek Letterforms"
category: "Science & Society"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.24984"
authors: ["John Pavlopoulos, Spyros Barbakos, Lavinia Ferretti, Dionysis Voulgarakis, Asimina Paparrigopoulou, Maria Konstantinidou, Giuseppe De Gregorio, Isabelle Marthot-Santaniello, Paraskevi Platanou, Holger Essler"]
date: "Thu, 25 Jun 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2606.24984v1"
image: ""
generated: "2026-06-25T19:05:48+05:30"
---

arXiv:2606.24984v1 Announce Type: new Abstract: Learning representations that remain robust across centuries of variation in handwriting is a key challenge in diachronic representation learning. Taking one of the longest continuously used writing systems, ancient Greek, as a case study, we introduce three datasets for diachronic representation learning: Hell-Char, a curated training set spanning the 3rd-1st centuries BCE, and two evaluation sets, PaLit-Char (2nd-5th c. CE) and Med-Char (9th-14th c. CE). To address the challenges of symbolic variation, scarce data, and systematic degradation, we propose: a similarity-weighted supervised contrastive loss that biases embeddings using dynamically estimated inter-class similarities, and a lacuna-driven augmentation scheme that simulates realistic manuscript corruptions. Trained with these strategies, both a lightweight CNN and a pretrained ResNet achieve strong recognition performance and produce embeddings that more coherently separate character classes than PCA or generic pretrained models. These embeddings enable clustering, identification of stylistic subgroups, and construction of prototype images that visualize diachronic evolution and transitional letterforms. Our results demonstrate that respecting intrinsic inter-letter relationships and augmenting with domain-informed corruptions yield robust, interpretable representations, offering a transferable paradigm for representation learning under scarce, temporally evolving, and noisy conditions. Code and data available at: https://github.com/ipavlopoulos/diachronic-greek-letterforms.
