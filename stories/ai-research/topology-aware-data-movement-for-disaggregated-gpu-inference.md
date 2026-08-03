---
title: "Topology-Aware Data Movement for Disaggregated GPU Inference"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.28633"
authors: ["Sanjeev Rao Ganjihal"]
date: "Mon, 03 Aug 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2607.28633v1"
image: ""
generated: "2026-08-03T19:06:42+05:30"
---

arXiv:2607.28633v1 Announce Type: new Abstract: Disaggregated LLM inference creates a datacenter networking problem that no existing system solves correctly. When prefill and decode run on separate GPU pools, the KV cache must be transferred between them. For a 70B model this is 2.6 GB per request, exceeding 100 GB/s aggregate at production scale. Yet DistServe, Splitwise, and Mooncake all use uniform RDMA, ignoring that bandwidth between two GPUs varies by 72x depending on their physical relationship: 900 GB/s via NVLink within a domain, 50 GB/s via InfiniBand across nodes, 12.5 GB/s via TCP across data centers. We design a topology-aware transfer orchestrator that discovers interconnect hierarchy at startup and selects optimal transport per transfer. Three mechanisms work together: (1) pipelined layer-by-layer transfer that overlaps transmission with ongoing prefill, hiding 60 to 85 percent of latency behind computation; (2) NVLink domain-aware placement for Mixture-of-Experts models that co-optimizes expert dispatch with KV cache locality; and (3) CXL 3.0 memory expanders as a shared overflow tier providing 6x capacity at 86x lower latency than NVMe. Full evaluation requires multi-node clusters with heterogeneous interconnects and CXL 3.0 hardware that is beyond academic resources and not yet available in GPU clouds. We present analytical bandwidth models, component implementations, and projected analysis across three architectures showing 3 to 18x transfer latency reduction over uniform RDMA.
