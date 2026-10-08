---
title: "DenoFlow: Flow Matching for SSVEP Denoising under Real Physiological Artifacts"
category: "Neuroscience & Mind"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.08817"
authors: ["Zhentao He, Ziwei Wang, Dongrui Wu"]
date: "Thu, 08 Oct 2026 00:00:00 -0400"
score: 35
guid: "oai:arXiv.org:2610.08817v1"
image: ""
generated: "2026-10-08T19:08:02+05:30"
---

Electroencephalography (EEG)-based brain-computer interfaces (BCIs), particularly steady-state visual evoked potential (SSVEP) systems, are highly vulnerable to noise and artifacts, which severely degrade decoding accuracy. Although recent denoising approaches have shown promise, they are fitted without paired ground truth, can settle on reproducing their input, and are optimized on waveform distance alone, which says nothing about whether the output stays decodable. To address these issues, we propose DenoFlow, which casts SSVEP denoising as transport: instead of learning a direct map from a contaminated trial to a clean one, a field network regresses the velocity of the straight path between them, following the rectified-flow formulation, and denoising integrates that field forward from the observation. The field network is an encoder-decoder that sees the contaminated trial at every layer and the path position at its bottleneck, and a classifier trained alongside it supervises the integrated output. Because the observation itself is both the conditioning input and the starting point of the integration, the model never generates a trial from noise, and training reduces to regression, removing the adversarial min-max game. To obtain paired data on datasets with no ground truth, we injected physiological artifacts of the recorded electromyography (EMG) and electrooculography (EOG) signals under a controlled signal-to-noise target. Experiments on two public SSVEP datasets with five popular SSVEP decoders showed that DenoFlow outperformed seven baseline denoising models on both signal fidelity and downstream decoding accuracy. Code is available at https://github.com/wzwvv/DenoFlow.
