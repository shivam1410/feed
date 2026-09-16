---
title: "FlowATC: Aircraft Trajectory Prediction via Flow Matching"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.16528"
authors: ["Mathurin Petit, Emir Torun, Louis Brusset, Jordan Kam, Alexandre M. Bayen"]
date: "Wed, 16 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.16528v1"
image: ""
generated: "2026-09-16T19:00:23+05:30"
---

arXiv:2609.16528v1 Announce Type: new Abstract: Building accurate decision-support tools for next-generation air traffic control requires robust trajectory prediction models. We present a flow-matching architecture trained exclusively on historical aircraft trajectories, with no route labels or chart supervision. Trained on 1.15 million Automatic Dependent Surveillance-Broadcast trajectory windows collected over the San Francisco Bay Area, the model generates aircraft trajectory distributions that closely match historical traffic, reproducing known airspace structure around San Francisco Airport such as the shape of SFO's published NIITE FOUR departure procedure. Our model is trained directly on the native, irregular ADS-B sampling interval. Trajectory prediction is cast as sequence inpainting using a block-causal Transformer that denoises future state tokens conditioned on the observed history using Conditional Flow Matching or Denoising Diffusion Probabilistic Models. We compare our architecture against constant-velocity, deterministic-Long Short Term Memory, and Conditional Variational Autoencoders baselines. At matched parameter count, CFM outperforms DDPM by 11-26% in minADE@20, and both generative objectives surpass the CVAE baseline by 31-41%. We further show that the error degrades gracefully with prediction horizon, and the architecture remains effective when retrained on temporally decimated feeds. Lastly, we sample $K$ independent completions, yielding spatial probabilistic occupancy estimates that can serve as input to downstream conflict-risk estimation.
