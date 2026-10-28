---
title: "Distributed LLM Inference via Communication-Efficient Speculative Decoding"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.35957"
authors: ["Joohyun Shin, Byeonghyeon Park, Keumseo Ryum, Joonhyuk Kang"]
date: "Wed, 28 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.35957v1"
image: ""
generated: "2026-10-28T19:00:21+05:30"
---

Distributed speculative decoding has emerged as a promising approach for device--server collaborative large language model (LLM) inference, but its decoding speedup is often limited by the vocabulary-scale communication overhead. In existing distributed speculative decoding methods, exact rejection sampling requires transmitting full token distributions over the LLM vocabulary between the device and the server, which becomes costly in bandwidth-constrained environments. To address this issue, we propose DISCO, a communication-efficient framework for distributed speculative decoding, that eliminates vocabulary-scale distribution transfer while preserving the exact target distribution. DISCO achieves this by introducing a server-side replica of the draft small language model (SLM), which enables the server to locally obtain the draft-side distribution required for rejection sampling. As a result, DISCO exchanges only drafted token indices and scalar probability values between the device and the server. Experimental results on multiple datasets show that DISCO consistently achieves higher decoding speedup than existing distributed speculative decoding methods, particularly under stringent bandwidth constraints.
