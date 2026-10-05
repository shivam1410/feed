---
title: "Post-Training Quantization of Autoregressive Weather Models"
category: "Climate & Energy"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.02511"
authors: ["Ananyo Bhattacharya, Swastik Bhattacharya, Christiane Jablonowski"]
date: "Mon, 05 Oct 2026 00:00:00 -0400"
score: 78
guid: "oai:arXiv.org:2610.02511v1"
image: ""
generated: "2026-10-05T19:10:08+05:30"
---

Advancements in high-resolution numerical weather prediction (NWP) and data assimilation (DA) have shaped the developments in deep learning (DL) architectures emulating atmospheric dynamics. Emulators for weather forecasting exhibit forecast quality comparable to physics based models at forecast horizon scaling from few days to subseasonal time scales. The emulators are driven by hardware-accelerated matrix multiplication in autoregressive inferences, significantly reducing the computation time and resources required for NWP. Optimization of the matrix multiplication processes in GPU architectures provides opportunities to scale towards high-resolution domain, and offers implementation of out of the box solutions. Post-training quantization (PTQ) has been demonstrated across multiple DL architectures to accelerate and increase the number of computations in unit time while consuming less power, enabling applications on edge hardware. In this study, we investigate the effect of PTQ on pre-trained AI emulators for global-scale weather forecasting. We implement PTQ algorithms in Deep Learning Weather Prediction (DLWP) and FourCastNet (FCN) models as a proof of concept for geophysical fluid dynamics applications. We systematically investigate the effect of PTQ on emulator inferences over short-range forecast horizons. Evaluation of PTQ configurations using simulated quantization hints at qualitatively meaningful forecasts over short-time horizons. These results provide a first benchmark of PTQ for autoregressive weather emulators and a basis for quantization-based optimization of DL models for dynamical systems.
