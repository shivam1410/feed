---
title: "When Top-1 Fails: Calibrating LoRA Monitors for Masked Diffusion LMs"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.24119"
authors: ["Lucky Verma, Pratik Yadav"]
date: "Wed, 24 Jun 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2606.24119v1"
image: ""
generated: "2026-06-24T19:00:41+05:30"
---

arXiv:2606.24119v1 Announce Type: new Abstract: Discrete diffusion language model (DLM) fine-tuning inherits inexpensive diagnostics from denoising-time confidence monitors, but their PEFT-training meaning is untested. We test top-1 argmax concentration as a collapse warning. Across 816 LoRA/PEFT configurations from three DLM families, the warning fires for every configuration while logs record 0/816 actual collapses at the 200 step horizon, giving zero precision. The cause is pre-equilibrium saturation: top-1 concentration is already high before optimization and quickly becomes insensitive to final training stability. We then evaluate max LoRA gradient norm, a parameter-side signal that samples gradient routing rather than token concentration. On a pooled held-out LLaDA-family split, a train-optimized threshold identifies top-decile final-loss configurations with precision 0.68 and F1=0.79, above the all-positive top-1 baseline even at the lower split-bootstrap confidence bound. Autoregressive controls and cross-family threshold failures bound the result to short-horizon DLM-LoRA inspection rather than a universal collapse detector. Workflow: drop top-1 as a PEFT alarm, log max-gradient early in training, and calibrate thresholds per DLM family before routing runs for inspection.
