---
title: "MXCode: Vector Quantization for MX-Native Inference at Scale"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.00403"
authors: ["Gaurav Kolhe, Cansu Demirkiran, Shubhi Tyagi, Sulaiman Sadiq, Boyao Wang, Richard Wang, Maximiliana Behnke, Shreyas Labhsetwar, Levi Melnick, Matthew Mattina, Partha Maji"]
date: "Tue, 03 Nov 2026 00:00:00 -0500"
score: 40
guid: "oai:arXiv.org:2611.00403v1"
image: ""
generated: "2026-11-03T19:05:09+05:30"
---

Memory capacity and bandwidth are major bottlenecks in LLM inference, motivating weight compression beyond conventional 4-bit quantization. Vector quantization (VQ) enables approximately 2-bit weight storage but often relies on codebooks incompatible with native FP4 computation. We introduce MXCode (MX-Native Codebook Quantization), a framework bridging ultra-low-bit VQ compression with MicroXcaling (MX)-native FP4 computation. MXCode proposes three strategies: PostScale, which quantizes learned codebooks to MXFP4; PreScale, which extracts MX scales before codebook learning; and PreScale+, which further compresses these scales using VQ. These strategies explore tradeoffs among quantization quality, scale overhead, and codebook granularity. All reconstruct MX-native W4A4 operands without materializing intermediate high-precision weights. We evaluate MXCode on Qwen3 (235B), DeepSeek-R1 (671B), and GLM-5.2 (753B) using the Microsoft MX Emulation Library. MXCode achieves approximately 2 bits per weight with competitive, workload-dependent model quality. On GB300 hardware, experiments with Qwen3 (235B) show approximately 50% lower model-load memory than Native FP4 while maintaining near-Native-FP4 serving throughput. Under memory-constrained prefix reuse, P90 TTFT improves by up to 94.5%. These results demonstrate software-based reconstruction on existing FP4 hardware and inform the development of future MX-native inference systems.
