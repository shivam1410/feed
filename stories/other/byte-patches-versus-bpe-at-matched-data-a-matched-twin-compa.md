---
title: "Byte Patches versus BPE at Matched Data: A Matched-Twin Comparison at 350M Parameters"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.31790"
authors: ["Asadullah Maliyawala, Andrej Lisal"]
date: "Wed, 25 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.31790v1"
image: ""
generated: "2026-11-26T13:13:26+05:30"
---

We compare a MEGABYTE-style byte-patch Transformer with a 64-byte sliding local decoder (local64) to a matched byte-level 8k BPE decoder (BPE-8k) under identical raw bytes, document order, and approximately matched bytes per optimizer step: 350M parameters and 10 billion training bytes. Under matched-span document sliding (identical scored byte ranges), BPE-8k leads with relative gaps of -5.2%, -4.9%, -9.3% and -6.1% in bits per byte (overall, text, code, math; paired bootstrap). Downstream, CharBench equal fine-tuning favors local64 (53.7% vs 40.0%), fact200 favors BPE-8k (16.5% vs 7.0%), and PIQA (raw and length-normalized) and ARC-Easy length-normalized favor BPE-8k after Holm correction at alpha = 0.05; remaining tasks are ties. Evaluation pitfalls that changed conclusions include context-length extrapolation past the BPE training context, bits per token reported as bits per byte, and inconsistent byte denominators. Unlike controlled tokenizer studies that vary the subword tokenizer under a fixed token budget, or FLOP-controlled byte-model scaling studies, we hold the raw bytes, their order and the optimizer recipe fixed and ask whether a fixed-patch byte model can replace the tokenizer at all. Limits: one size, one seed, one 8k vocabulary fixed before the runs, and a known difference in embedding initialization between the twins.
