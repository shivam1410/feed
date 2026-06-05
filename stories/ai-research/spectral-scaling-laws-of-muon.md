---
title: "Spectral Scaling Laws of Muon"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.04058"
authors: ["Gagik Magakyan, Pablo Parrilo, Asuman Ozdaglar"]
date: "Fri, 05 Jun 2026 00:00:00 -0400"
score: 48
guid: "oai:arXiv.org:2606.04058v1"
image: ""
generated: "2026-06-06T01:41:01+05:30"
---

arXiv:2606.04058v1 Announce Type: new Abstract: Orthonormalized update rules have rapidly become a leading choice of optimizer for training large language models, with recent open-source state-of-the-art models adopting Muon. To keep these updates tractable, Muon performs the orthonormalization with the Newton--Schulz (NS) iteration. Since NS is only approximate, directions with small singular values fail to be orthonormalized. In Muon, NS is applied to the momentum matrix at every step, yet little is known about how the singular value spectrum of these momentum matrices behaves during training, or how that behavior changes with model size. We present the first systematic study of this question. Tracking singular value quantiles of the momentum buffer across layers in models ranging from 77M to 2.8B parameters, we observe a consistent picture: after a short burn-in, the quantiles stabilize at a value determined by the layer type and model size. These stabilization values follow remarkably clean power laws in model size, with layer-dependent exponents. Layers up to mid-late depth scale very mildly with model size $M$ (around $M^{-0.25}$), so the standard 5-step NS configuration used at academic scale will continue to orthonormalize them at much larger scales. Some of the late layers, however, scale much more aggressively (up to $M^{-0.96}$) and will fall into the NS failure regime at frontier scale unless one uses more NS iterations or better-tuned coefficients. NS iterations are computationally expensive at scale; our laws give practitioners a principled, layer-aware recipe for choosing the minimum NS configuration that still orthonormalizes the directions that matter -- avoiding unnecessary computation without sacrificing update quality.
