---
title: "Federated Learning of Car Aerodynamics Surrogates with Spectral Optimizers"
category: "Robotics & Engineering"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.25300"
authors: ["Arman Bolatov, Nikolay Spitsyn, Daniil Medyakov, Vladimir Aletov, Dmitry Bylinkin, Martin Tak\\'a\\v{c}, Aleksandr Beznosikov"]
date: "Fri, 20 Nov 2026 00:00:00 -0500"
score: 25
guid: "oai:arXiv.org:2611.25300v1"
image: ""
generated: "2026-11-20T19:04:50+05:30"
---

Neural surrogates predict the aerodynamic forces on a car in seconds, compared with hours for a CFD simulation, but training them requires thousands of CFD simulations of different car designs, which car manufacturers keep proprietary. Federated learning allows several manufacturers to train a shared surrogate without exchanging data. We study which federated optimizer brings such a surrogate closest to one trained on pooled data. On DrivAerNet++, we train a Transolver surrogate across six clients that each hold cars of a single body type, and we compare three spectral optimizers, which orthogonalize the update of each weight matrix (FedMuon and two methods we propose, FedMARS-M and FedOLion), with three non-spectral ones (FedAvg, SCAFFOLD-Adam and FedLion), all tuned with the same protocol. FedMuon and FedMARS-M reach a drag error within 2% of centralized training with Muon, using two to four local epochs per round. The non-spectral methods perform best with sixteen local epochs, the largest number we tested, and still have a 17 to 37% higher drag error than FedMARS-M. We relate this gap to the low stable rank of the weight gradients, for which an orthogonalized step yields about twice the first-order decrease of a gradient step of the same spectral norm. Code: https://github.com/armanbolatov/fedmars_drivaernet
