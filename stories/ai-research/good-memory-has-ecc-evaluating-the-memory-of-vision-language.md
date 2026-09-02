---
title: "Good Memory Has ECC: Evaluating the Memory of Vision-Language Models Beyond Accuracy"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.00103"
authors: ["Shmuel Berman, Jia Deng"]
date: "Wed, 02 Sep 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2609.00103v1"
image: ""
generated: "2026-09-02T19:06:18+05:30"
---

arXiv:2609.00103v1 Announce Type: new Abstract: Memory is widely viewed as an important unsolved problem for LLMs and VLMs, and current benchmarks typically evaluate it by testing accuracy over long text or video. However, accuracy alone misses properties that matter for real long-horizon tasks. We introduce ECCBench, a benchmark and evaluation protocol that measures memory beyond a system's capacity--its raw accuracy at a specific budget--via three axes we call ECC: efficiency--the computation, in FLOPs, needed to answer from memory; compression--whether compressible inputs are remembered more accurately or efficiently; and calibration--whether the system abstains in response to its own uncertainty and the cost of an error. We find that pretrained VLMs compress their memory over text but not video and are poorly calibrated on both. Among a broader set of memory backbones, several non-Transformer architectures achieve better compression-calibration tradeoffs than RoPE Transformers, suggesting they may be useful components for agents operating over long horizons.
