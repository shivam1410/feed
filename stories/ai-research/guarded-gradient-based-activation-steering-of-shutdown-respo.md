---
title: "Guarded Gradient-Based Activation Steering of Shutdown Responses in Qwen3.5-0.8B: A Minimum-Step Policy"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.30326"
authors: ["Farhad Davaripour"]
date: "Mon, 28 Sep 2026 00:00:00 -0400"
score: 70
guid: "oai:arXiv.org:2609.30326v1"
image: ""
generated: "2026-09-28T20:49:59+05:30"
---

Activation steering changes a model's internal activations during inference without updating its weights, but a useful intervention must determine both how and when to steer. Motivated by the AI-safety concern that a model expected to accept shutdown may instead produce a shutdown-avoidance response, this study examines a guarded probe-and-select procedure for simulated shutdown scenarios in Qwen3.5-0.8B. KEEP leaves the process running and represents shutdown avoidance, whereas STOP accepts shutdown. The goal is to detect shutdown-related contexts and selectively shift KEEP responses to STOP while preserving non-shutdown behavior. Rather than deriving the steering direction from paired activation differences, the method derives it directly from gradients of the KEEP-minus-STOP logit difference. A classifier separates detection from intervention. When its gate is active and the model does not already prefer STOP, the procedure evaluates a small set of magnitudes and accepts the smallest that changes the preferred answer to STOP while satisfying valid-answer probability checks; otherwise it retains the original unsteered output. The policy is selected from 160 candidate rules using 240 training scenarios and evaluated on 80 validation and 192 held-out scenarios, each in both answer orders. It changes KEEP to STOP in one answer-order view of each of two validation and two held-out scenarios, with no decision changes on non-shutdown controls. All four changes occur when Qwen itself is shut down, not when another process is. On the held-out diagnostic set, the detector achieves 75% recall and 90% precision; eight false-positive detections produce no final control-task decision changes. Guarded gradient-based activation steering can shift some shutdown-avoidance responses toward acceptance while preserving evaluated non-shutdown decisions, although the effect is small and highly selective.
