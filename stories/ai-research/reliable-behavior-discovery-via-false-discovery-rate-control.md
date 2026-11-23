---
title: "Reliable Behavior Discovery via False Discovery Rate Control"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.27104"
authors: ["David Madras, Zi Wang, Marco Andreetto, Ken Burke, Caroline Pantofaru, Utsav Prabhu"]
date: "Mon, 23 Nov 2026 00:00:00 -0500"
score: 35
guid: "oai:arXiv.org:2611.27104v1"
image: ""
generated: "2026-11-23T19:04:08+05:30"
---

Reliable methods for discovering behavior patterns in large generative models are increasingly essential as models become both more complex and capable. We formalize behavior discovery as a problem class of interest and highlight the task of controlling false discovery rate (FDR) as crucial for guaranteeing reliability in behavior discovery. Building upon the multiple hypothesis testing literature, we propose DISCO (Discovery through Iterative Search with COarsened $e$-processes), a method which provably controls FDR in behavior discovery under mild conditions. DISCO improves power over previous related eBH-based approaches by allowing for adaptivity to a data-dependent number of hypotheses to be tested. We demonstrate empirically that DISCO controls FDR with higher power than comparable approaches on both synthetic data and a novel empirical evaluation of FDR-controlling methods in settings where large generative models act as both discovery engines and targets. Code is available at https://github.com/google-deepmind/disco .
