---
title: "Delayed Effects of Temporary Weight Decay in Muon Pretraining"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.17876"
authors: ["Md Rifat Arefin, Ravid Shwartz-Ziv, Ernie Chang, Chinnadhurai Sankar, Rylan Conway, Aristide Baratin, Irina Rish, Adithya Sagar, Patrick Huber"]
date: "Mon, 16 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.17876v1"
image: ""
generated: "2026-11-16T20:51:01+05:30"
---

A temporary optimization intervention can increase validation loss when it ends yet reduce it at the final training budget. We demonstrate this with temporary weight decay in Muon-trained decoder-only Transformers with 162M, 405M, 1.4B, and 3.4B parameters. For models up to 1.4B parameters, moving a fixed-duration decay window from early to late training reverses its final effect. At 162M, changing window duration alters final loss even at approximately matched total shrinkage. Most strikingly, a schedule selected at 162M and transferred without retuning to 1.4B is 0.26 nats worse than no decay when removed, overtakes it only after 73% of training, and ultimately finishes 0.028 nats better while also outperforming the best sampled constant-decay baseline. Early decay leaves a persistent weight-norm deficit, which keeps relative steps larger after the intervention ends. An approximate norm-dynamics recurrence captures the slow convergence of these relative steps, and fixed-norm replays of the measured trajectories reproduce the performance ordering and a similar loss difference. At 162M and 405M, norm-reset experiments show that smaller weight norms at the end of the decay window explain most of the final loss improvement. A separate Gram intervention exhibits related post-removal norm and relative-step dynamics. These results show that temporary optimization schedules can have delayed effects long after removal and should therefore be evaluated at the intended final training budget, not only at removal.
