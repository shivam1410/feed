---
title: "SNR-Gated LSTM-Conditioned Diffusion Model for MIMO Channel Estimation"
category: "Physics & Space"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.08977"
authors: ["Jixing Zhou, Xinming Huang"]
date: "Thu, 08 Oct 2026 00:00:00 -0400"
score: 35
guid: "oai:arXiv.org:2610.08977v1"
image: ""
generated: "2026-10-08T19:08:02+05:30"
---

Accurate and low latency channel estimation is critical for modern MIMO systems, particularly under mobility, where channels exhibit structured sparsity and strong temporal correlation. This paper proposes a time-series conditioned diffusion framework for channel estimation that performs denoising in the angular domain. Starting from least squares (LS) observations, we train a diffusion denoiser whose conditioning information is encoded by a long short-term memory (LSTM) network over a short observation sequence, enabling the model to exploit temporal dynamics beyond per-snapshot estimation. To robustly balance observation fidelity and learned generative priors across a wide signal-to-noise ratio (SNR) range, we introduce a learnable SNR-gated late-fusion shortcut that injects the network input into the final decoding stage through a sigmoid gate with trainable center and scale. To reduce inference latency, we adopt deterministic denoising diffusion implicit model (DDIM) style reverse updates with SNR-adaptive truncation and step allocation, which significantly reduces the number of reverse diffusion steps at high SNR while maintaining strong performance in low SNR regimes. Simulations on time-evolving standardized channel models demonstrate that the proposed method achieves consistent performance gains over existing diffusion-based channel estimation baselines, while retaining low latency through SNR-adaptive inference.
