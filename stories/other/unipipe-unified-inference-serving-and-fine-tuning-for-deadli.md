---
title: "UniPipe: Unified Inference Serving and Fine-Tuning for Deadline-Constrained DNN Surrogate Workflows"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.14748"
authors: ["Jaiaid Mobin, Avinash Maurya, M. Mustafa Rafique, Bogdan Nicolae"]
date: "Fri, 13 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.14748v1"
image: ""
generated: "2026-11-13T19:01:04+05:30"
---

DNN surrogates are increasingly used to accelerate scientific workflows that must process high-rate sensor streams in near real time, exemplified by Ptychographic imaging at next-generation X-ray light sources. Such surrogates deliver 100-1000x higher throughput than iterative solvers, enabling faster steering of experiments. To preserve surrogate accuracy during an experiment, as the input distribution evolves, state-of-the-art deployments freeze the pretrained surrogate or run a separate CUDA context that fine-tunes concurrently with serving. However, multi-context concurrency causes significant contention on the GPU, inflating both the mean and the variance of inference latency, triggering deadline misses in workflows where sensor data has to be processed within a hard per-unit deadline. To address this challenge, we propose UniPipe, a single-context system that unifies inference serving and fine-tuning of a DNN surrogate on a single edge GPU. UniPipe is driven by three key insights: both serving and fine-tuning require a forward pass and can be fused into one; the per-sample latency of modern GPUs is non-linear in batch size; and the workload is repetitive across intervals, enabling offline scheduling. Specifically, UniPipe fuses training and inference data in a single forward pass with a selective backward pass on the training subset, and uses a polynomial-time scheduler that exploits the latency curve to compute the batch composition. We evaluate UniPipe on a real-world Ptychographic reconstruction workflow with sensor rates up to 5000 patterns/sec.; UniPipe lowers reconstruction MSE by up to 30% and inference MSE by up to 50% over a pretrained baseline, and reduces the deadline-miss rate by 13%-22% over a multi-context baseline. UniPipe's unified deployment reduces the latency spread from 106% to 57% of the mean, and increases total throughput compared to multi-context baseline.
