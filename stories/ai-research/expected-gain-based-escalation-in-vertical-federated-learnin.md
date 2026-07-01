---
title: "Expected Gain-based Escalation in Vertical Federated Learning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.31331"
authors: ["Mohamad Mestoukirdi, Vincent Corlay"]
date: "Wed, 01 Jul 2026 00:00:00 -0400"
score: 58
guid: "oai:arXiv.org:2606.31331v1"
image: ""
generated: "2026-07-01T19:05:33+05:30"
---

arXiv:2606.31331v1 Announce Type: new Abstract: Collaborative inference can improve predictive performance by integrating complementary information across agents, but applying collaborative fusion to every sample can incur unnecessary communication and computational overhead. This trade-off is particularly relevant in vertical federated learning (VFL), where clients observe different views of the same sample and fusion typically requires transmitting intermediate representations to a server. We study selective escalation in a two-round VFL inference protocol, in which a low-cost first round produces a prediction from client posteriors and a second embedding-fusion round is invoked only when it is expected to improve the final decision. We formulate routing as expected-gain score estimation: a sample is escalated when a predicted improvement in correctness justifies the additional communication. The proposed analytical score combines a calibrated pooled posterior with classwise reliability estimates of the VFL model, both obtained from held-out calibration data, yielding an interpretable router that requires no separately trained routing network. Experiments on multi-view classification benchmarks, including controlled test--time view degradation settings, show that the proposed router improves the communication-accuracy trade-off over confidence-, learned-gain-, and deferral-based baselines.
