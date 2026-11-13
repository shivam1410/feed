---
title: "Stealthy, High-Impact False Data Injection Attacks in Smart Grid Using Physics-Constrained GAN"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.15162"
authors: ["Md. Mainul Islam, Hasan Kurban, Abdulrahman Takiddin, Muhammad Ismail, Rachad Atat, Erchin Serpedin"]
date: "Fri, 13 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.15162v1"
image: ""
generated: "2026-11-13T19:01:04+05:30"
---

False data injection (FDI) attacks can distort power system state estimation while retaining plausible measurement patterns. Existing FDI methods trade stealth for impact or vice versa. They often assume access to internal grids, all-bus sensing, or defender models. In this paper, we propose a detector-agnostic physics-constrained generative adversarial network (PCGAN) that learns decoupled power-flow sensitivities from historical measurements of deployed sensors. The learned active-power-angle and reactive-power-voltage-magnitude relationships guide perturbations restricted to compromised channels, while adversarial training promotes realistic spatiotemporal patterns. We implement PCGAN and seven existing FDI attacks on the IEEE 300-bus system using one year of observed hourly demand from PJM Interconnection, a regional transmission organization in the United States, and synthetic bus-level load profiles. We compare their performance across 10%, 30%, 60%, and 100% compromised sensors. Attack stealth is assessed against ten machine-learning (ML) detectors and conventional bad-data detection (BDD) methods, while physical impact is quantified through nonlinear alternating-current weighted least-squares state estimation. PCGAN achieves 84.28% mean ML evasion and 22.31% mean spatial load misperception across the four scenarios. Its mean stealth-impact trade-off score reaches 18.69%, compared with 5.61% for the strongest competing attack. PCGAN also achieves 83.45% chi-square BDD evasion and 86.02% largest-normalized-residual BDD evasion. These results demonstrate a favorable stealth-impact balance under varying sensor-access levels and provide challenging attack cases for evaluating FDI detectors.
