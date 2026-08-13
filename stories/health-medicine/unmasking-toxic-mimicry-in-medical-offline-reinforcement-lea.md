---
title: "Unmasking Toxic Mimicry in Medical Offline Reinforcement Learning for ICU Sepsis Management via Counterfactual Clinical Audits"
category: "Health & Medicine"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.11410"
authors: ["Hangqi Ren, Junyi Liao"]
date: "Thu, 13 Aug 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2608.11410v1"
image: ""
generated: "2026-08-13T19:06:32+05:30"
---

arXiv:2608.11410v1 Announce Type: new Abstract: Offline reinforcement learning (RL) offers considerable promise for optimizing ICU treatment decisions, yet standard evaluation metrics Mean Squared Error (MSE) and Fitted Q-Evaluation (FQE) assess only behavioral imitation and cannot detect Toxic Mimicry, a failure mode in which agents replicate harmful patterns such as treatment withdrawal during comfort-care transitions. Using the MIMIC-III database, we propose the Counterfactual Clinical Audit (CCA) framework, which stress-tests RL agents through physiological perturbations anchored in Surviving Sepsis Campaign (SSC) guidelines. We audit a Medical Decision Transformer (MedDT) and a Historical Causal Transformer (HCT-RL), the latter employing Causal Action Shielding, propensity-based importance weighting, and Conservative Q-Learning. CCA reveals that MedDT paradoxically reduces vasopressor dosage as lactate escalates, contradicting resuscitation guidelines, while HCT-RL maintains physiologically consistent responses. These findings expose a systemic misalignment between statistical fit and clinical safety, supporting counterfactual audits as a necessary evaluation standard for medical RL.
