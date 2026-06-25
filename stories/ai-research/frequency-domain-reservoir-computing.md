---
title: "Frequency Domain Reservoir Computing"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.24969"
authors: ["Klaus Schertler, Xiomara Runge, Andrea Ceni, David Kappel, Claudio Gallicchio"]
date: "Thu, 25 Jun 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2606.24969v1"
image: ""
generated: "2026-06-25T19:05:48+05:30"
---

arXiv:2606.24969v1 Announce Type: new Abstract: While the quadratic sequence-length bottleneck of transformers has fueled a resurgence in recurrent models, effectively capturing complex dynamics requires architectures that balance efficient training with highly expressive latent states. Echo State Networks (ESNs) offer a compelling approach by utilizing fixed recurrent weights to circumvent backpropagation through time, enabling a closed-form training solution. However, achieving the expressivity needed for complex tasks demands large reservoirs, exposing an $\mathcal{O}(N^2)$ state-update bottleneck that prevents ESNs from matching the scale of contemporary recurrent models. To address this limitation, we introduce Frequency Domain Reservoir Computing (FRESCO), an ESN architecture operating entirely in the frequency domain while avoiding domain-shift overheads to achieve $\mathcal{O}(N)$ complexity for dense, non-linear recurrent updates. By employing a novel dimensional zero-padding input embedding, a packed \FDh readout, and a natively applied frequency-domain non-linearity, FRESCO drastically reduces computational costs and energy consumption of training and inference. Furthermore, FRESCO matches the state-of-the-art predictive performance on memory benchmarks, sequential classification, and multivariate long-horizon forecasting, offering a scalable path forward for dense recurrent architectures.
